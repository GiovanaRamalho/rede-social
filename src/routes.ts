import express from "express"

const router = express.Router();


router.get("/pagina", (req, res)=>{
    res.status(200).send("pagina dois");
})

router.get("/nome/:username", (req, res)=>{
    const nome = req.params.username;

    res.status(201).send(`O nome enviado na requisição foi ${nome}`);
})



export default router;