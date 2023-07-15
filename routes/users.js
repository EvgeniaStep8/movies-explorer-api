import { Router } from 'express';
import { getUserMe, patchUser } from '../controllers/users';

const userRoutes = Router();

userRoutes.get('/me', getUserMe);
userRoutes.patch('me', patchUser);

export default userRoutes;
