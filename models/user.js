import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        // eslint-disable-next-line no-useless-escape
        return validator.isEmail(email);
      },
      message: 'Введите ссылку',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
});

export default mongoose.model('user', UserSchema);
