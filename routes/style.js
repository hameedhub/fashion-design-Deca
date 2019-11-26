import { Router } from 'express';
import Controller from '../controllers/styleController';
import router from './auth';

const { index, create, show, update, destroy} = Controller;

router.post('/create', create);
router.put('/update', update);
router.get('/', index);
router.delete('/delete', destroy);

export default router;
