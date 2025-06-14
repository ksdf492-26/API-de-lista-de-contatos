import express from 'express';
import postRouter from './post'
import getRouter from './get'

const router = express.Router();

router.use('/contato',postRouter)
router.use("/contatos",getRouter)

export default router;