import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandle.js';
import User from '../models/userModel.js';

//Protect routes

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.jwt;

  if (token) {
  } else {
  }
});
