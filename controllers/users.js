import User from '../models/user';
import NotFoundError from '../errors/NotFoundError';
import BadRequestError from '../errors/BadRequestError';

const getUserMe = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError('Пользователь с переаднным id не найден'))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.message.includes('Cast to ObjectId failed')) {
        next(new BadRequestError('Передан некорректный id'));
      } else {
        next(err);
      }
    });
};

const patchUser = (req, res, next) => {
  const { _id } = req.user;
  const newUser = req.body;
  User.findByIdAndUpdate(_id, newUser, {
    new: true,
    runValidators: true,
  })
    .orFail(() => new NotFoundError('Пользователь с переаднным id не найден'))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.message.includes('Cast to ObjectId failed')) {
        next(new BadRequestError('Передан некорректный id'));
      } else if (err.message.includes('Validation failed')) {
        next(new BadRequestError('Передан некорректные данные пользователя'));
      } else {
        next(err);
      }
    });
};

export { getUserMe, patchUser };
