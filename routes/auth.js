import { Router } from 'express';
import Controller from '../controllers/authController';

const { signup, login } = Controller;

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
