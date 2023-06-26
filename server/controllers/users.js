import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async ( req, res ) => {
  const { email, password } = req.body;
  try {
    const result = await User.findOne({ email });

    if(!result) return res.status(404).json({ message: "User doesn't exist."});

    const isPasswordCorrect = await bcrypt.compare(password, result.password);

    if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign({
      id: result._id,
      email: result.email,
    }, 'test', { expiresIn: "1h" });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}

export const signup = async ( req, res ) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if(existingUser) return res.status(400).json({ message: "User already exists."});

    if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match."});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`
    });

    const token = jwt.sign({
      id: result._id,
      email: result.email,
    }, 'test', { expiresIn: "1h" });
    
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}