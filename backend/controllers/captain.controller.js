import captainModel from "../models/captain.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CLIENT_RENEG_LIMIT } from "tls";
import BlackListToken from "../models/blackListToken.js";

export const createCaptain = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      vehicle,  
      location,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !vehicle?.color ||
      !vehicle?.plateNumber ||
      !vehicle?.capacity ||
      !vehicle?.vehicleType ||
      !location?.latitude ||
      !location?.longitude
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const captainExists = await captainModel.findOne({ email: req.body.email });

    if (captainExists) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = new captainModel({
      firstName,
      lastName,
      email,
      password: hashPassword,
      vehicle,
      location,
    });

    const newCaptain = await captain.save();

    res.status(201).json({ message: "Captain account created successfully", newCaptain });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body; 
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const captain = await captainModel.findOne({
      email: email,
    });
    if (!captain) {
      return res.status(400).json({ message: "Captain does not exist" });
    }
    const validPassword = await bcrypt.compare(password, captain.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = captain.generateToken()
    res.cookie("token", token);
    res.status(200).json({captain, token });
}

  catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getCaptainProfile = async (req, res) => {
  if (!req.captain) {
    return res.status(404).json({ message: "Captain not found" });
  }
  res.status(200).json({ captain: req.captain });
};


export const logout = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  try {
    // Blacklist the token
    await BlackListToken.create({ token });

    // Clear the cookie
    res.clearCookie("token");

    res.status(200).json({ message: "Captain logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
