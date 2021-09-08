import jwt from 'jsonwebtoken';
import { Users } from '../models/Users.js';
import { Bcrypt, generateToken } from '../helpers/helpers.js';

export async function loginUser(req, res) {
  const userInfo = req.body;

  const user = Users.getUserByEmail(userInfo);

  if (!user) {
    console.log('No user');

    return res
      .status(400)
      .json({ success: false, message: 'Wrong password or username' });
  }

  const match = await Bcrypt.comparePassword(userInfo.password, user.password);

  if (!match) {
    return res
      .status(400)
      .json({ success: false, message: 'Wrong password or username' });
  }

  const token = await generateToken({ id: user.id, userName: user.userName });

  user.token = token;

  res
    .cookie('authToken', token, {
      httpOnly: true,
    })
    .json({ success: true });
}