import  express  from "express";
import { createContact } from "../../services/contact";
const router = express ();
router.post("/",async (req,res)=> {
    const {name} = req.body ?? {}
    if(!name || name.length <2){
        res.json({ERROR: "Nome precisa ter 2 ou mais caracteres"})
        return;
    }
    await createContact(name)
    res.json({contato:name})
})

export default router