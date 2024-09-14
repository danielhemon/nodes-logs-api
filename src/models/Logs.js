import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const logSchema = new Schema({
  date: {
    type: Date,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: false,
    trim: true,
    default: 'server',
    enum: ['api', 'form']
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model('Log', logSchema)