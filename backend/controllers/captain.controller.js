import captainModel from "../models/captain.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createCaptain = async (req, res) => {
  try {
    const {
      fullName,
      lastName,
      email,
      password,
      color,
      plateNumber,
      capacity,
      vehicleType,
    } = req.body;
    if (
      !fullName ||
      !lastName ||
      !email ||
      !password ||
      !color ||
      !plateNumber ||
      !capacity ||
      !vehicleType
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const captainExists = await captainModel.findOne({ email: req.body.email });

    if (captainExists) {
      return res.status(400).json({ message: "captain already exists" });
    }
    const hashPassword = await User.hashPassword(password);
    const captain = new captainModel({
      fullName: req.body.fullName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      vehicle: req.body.vehicle,
      location: req.body.location,
    });

    const newCaptain = await captain.save();
    res
      .status(201)
      .json({ message: "captain account created successfully", newCaptain });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
