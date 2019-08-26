import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import users from '../models/users';
import validateUserSignup from '../validators/signup';

dotenv.config();

const signup = (req, res) => {
  const { error } = validateUserSignup.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const user = users.find(e => e.email === req.body.email);
  if (user) {
    res.status(409).json({
      status: 409,
      error: 'The email is already registered',
    });
    return;
  }
  const id = parseInt(users.length + 1, 10);
  const password = bcrypt.hashSync(req.body.password, 10);
  const { firstName, lastName, email, address, bio, occupation, expertise, position } = req.body;
  users.push({ id, firstName, lastName, email, password, address, bio, occupation, expertise, position });
  const payload = {
    id, firstName, lastName, email, password, address, bio, occupation, expertise, position
  };
  const token = jwt.sign(payload, process.env.THE_KEY);
  res.status(201).json({
    status: 201,
    message: "User created successfully!.",
    data: {
      token,
      message: "User created successfully!.",
    },
  });
};

export default signup;
