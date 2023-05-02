/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  desctription: String,
  body: String,
  author: String,
  date_posted: String,
});
