import express, { Express } from "express";
const router = express.Router();


router.route("/").get((req, res) => {
    
    res.status(200).json({name: "wrap"});
})

export default router