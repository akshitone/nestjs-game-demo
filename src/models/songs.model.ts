import mongoose from 'mongoose';

export const SongSchema = new mongoose.Schema({
  songId: { type: String, unique: true },
  title: { type: String },
  artists: { type: Array },
  album: { type: String },
  releasedDate: { type: String },
  duration: { type: String },
});
