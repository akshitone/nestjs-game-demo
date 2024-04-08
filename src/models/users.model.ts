import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  password: { type: String },
  initVector: { type: String },
  securityKey: { type: String },
  dateOfBirth: { type: String },
});
