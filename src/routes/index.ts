import express from 'express';
import postRouter from './post'
import getRouter from './get'
import delRouter from './del'
const router = express.Router();

router.use('/contato',postRouter)
router.use("/contatos",getRouter)
router.use("/contato",delRouter)
export default router;