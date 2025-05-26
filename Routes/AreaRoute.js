import express from "express";
import AreaController from "../controllers/AreaController.js";
const router = express.Router()
var Instant = new AreaController()

router.post("/",async (req,res) => {
    var insertedData = await Instant.insertData(req.body)
    res.status(insertedData.Code).json(insertedData)
})

router.get("/",async (req,res)=>{
    var getedData = await Instant.getData()
    res.status(getedData.Code).json(getedData)
})

router.get("/:id",async (req,res)=>{
    var idData = await Instant.getDataById(req.params.id)
    res.status(idData.Code).json(idData)
})

router.put("/:id",async (req,res)=>{
    var updatedData = await Instant.updateData(req.params.id,req.body)
    res.status(updatedData.Code).json(updatedData)
})

router.delete("/:id",async(req,res) => {
    var deleteData = await Instant.deleteData(req.params.id)
    res.status(deleteData.Code).json(deleteData)
})

export default router