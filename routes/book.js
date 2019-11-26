import { Router } from 'express';
import Controller from '../controllers/bookController.js'

const router = Router();

const { index, create, show, destroy} = Controller;

router.get('/', index);
router.post('/create', create);
router.show('/:id', show);
router.delete('/delete/:id', destroy);

export default router;

