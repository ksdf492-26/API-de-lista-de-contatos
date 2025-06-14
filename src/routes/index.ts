import express from 'express';

import getRouter from './get'

const router = express.Router();


router.use("/contatos",getRouter)

export default router;