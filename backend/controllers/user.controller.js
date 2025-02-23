import User from "../models/user.models.js";
import BlackListToken from "../models/blackListToken.js";
export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const findUser = await User.findOne({
      email,
    });
    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await User.hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isValid = await user.matchPassword(password);
    
    if (!isValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({user, token });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
}

export const logout = async (req, res, next) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await BlackListToken.create({ token });
  
  res.status(200).json({ message: "Logged out" });
}