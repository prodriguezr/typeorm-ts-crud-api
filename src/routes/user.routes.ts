import { Router } from 'express';
import { userCtrlr } from '../controllers';

const router = Router();

router.get('/', userCtrlr.getUsers);
router.get('/:id', userCtrlr.getUserById);
router.post('/', userCtrlr.createUser);
router.put('/', userCtrlr.updateUser);
router.delete('/:id', userCtrlr.deleteUser);

export default router;
