import { userController } from '@src/controllers';
import {
  createUserValidator,
  idValidator,
  paginationQueryParamsValidator,
  updateUserValidator,
} from '@src/utils/validator';
import express from 'express';

const router = express.Router();

router.get('/', paginationQueryParamsValidator, userController.getManyUser);

router.get('/:id', idValidator, userController.getOneUser);

router.post('/', createUserValidator, userController.createNewUser);

router.put('/:id', updateUserValidator, userController.updateOneUser);

router.delete('/:id', idValidator, userController.deleteOneUser);

export default router;
