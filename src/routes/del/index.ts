import  express  from "express";
import { createContact, delContact } from "../../services/contact";
const router = express ();
router.delete("/",async (req,res)=> {
    const {name} = req.query ?? {}
    if(!name){
        res.json({ERROR: "É necessario adicionar um nome!!"})
        return;
    }
    await delContact(name as string);
    res.json({contato:name})
})

export default router