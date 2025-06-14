import express from 'express'
import {getContact} from '../../services/contact';
const router = express.Router();

router.get('/', async (req, res) => {
        const list = await getContact(); 
         res.json({contatos: list})      
});



export default router;