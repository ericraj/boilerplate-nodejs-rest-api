import { userController } from '@src/controllers';
import express from 'express';

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getOneUser);

router.post('/', userController.createNewUser);

router.patch('/:userId', userController.updateOneUser);

router.delete('/:userId', userController.deleteOneUser);

export default router;
