import captainModel from "../models/captain.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CLIENT_RENEG_LIMIT } from "tls";

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
