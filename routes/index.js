import { Router } from 'express';
const router = Router();

/* GET  */
router.get('/', function(req, res, next) {
  res.status(200).json({
    status: true,
    message: 'Welcome to Fashion style API'
  })
});

export default router;
