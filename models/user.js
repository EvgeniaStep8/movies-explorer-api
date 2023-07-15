import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import UnauthorizedError from '../errors/UnauthorizedError';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
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
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

// eslint-disable-next-line func-names
UserSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .orFail(() => new UnauthorizedError('Передан неверный логин или пароль'))
    .then((user) => bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          throw new UnauthorizedError('Передан неверный логин или пароль');
        }
        return user;
      }));
};

// eslint-disable-next-line func-names
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.model('user', UserSchema);
