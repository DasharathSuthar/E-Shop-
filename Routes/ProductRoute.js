import express from "express";
import ProductController from '../controllers/ProductController.js'
const router = express.Router()
//instant 
var instant = new ProductController()

router.post("/", async (req, res) => {
    var bodyData = req.body;
    var insertedData = await instant.insertData(bodyData)
    res.status(insertedData.Code).json(insertedData)
})

router.get("/", async (req, res) => {
    var getedData = await instant.getData()
    res.status(getedData.Code).json(getedData)
})
router.get("/:id", async (req, res) => {
    var geteDataById = await instant.getDataById(req.params.id)
    res.status(geteDataById.Code).json(geteDataById)
})

router.delete("/:id", async (req, res) => {
    var Id = req.params.id
    var DeletedData = await instant.deleteData(Id)
    res.status(200).json(DeletedData)
})

router.put("/:id", async (req, res) => {
    var id = req.params.id
    var bodyData = req.body
    var updatedData = await instant.updateData(id, bodyData)
    res.status(200).json(updatedData);
})
export default router;