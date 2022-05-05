import { userController } from '@src/controllers';
import {
  newUserValidator,
  updateUserValidator,
  userIdValidator,
} from '@src/utils/validator';
import express from 'express';

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:userId', userIdValidator, userController.getOneUser);

router.post('/', newUserValidator, userController.createNewUser);

router.put('/:userId', updateUserValidator, userController.updateOneUser);

router.delete('/:userId', userIdValidator, userController.deleteOneUser);

export default router;
