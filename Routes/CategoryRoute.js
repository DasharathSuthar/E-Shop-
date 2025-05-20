import { deleteData, getData, getDataById, insertData, updateData } from '../controllers/CategoryController.js'
import express from 'express'
const router = express.Router()

router.post("/", async (req, res) => {
    var bodyData = req.body;
    var responseData = await insertData(bodyData);
    res.status(responseData.Code).json(responseData)
})

router.get("/", async (req, res) => {
    var GetData = await getData()
    res.status(GetData.Code).json(GetData);
})

router.get("/:id", async (req, res) => {
    var idData = await getDataById(req.params.id)
    res.status(idData.Code).json(idData)
})

router.delete("/:id", async (req, res) => {
    var Id = req.params.id
    var DeletedData = await deleteData(Id)
    res.status(200).json(DeletedData)
})

router.put("/:id", async (req, res) => {
    var id = req.params.id
    var bodyData = req.body
    var updatedData = await updateData(id, bodyData)
    res.status(200).json(updatedData);
})
export default router;