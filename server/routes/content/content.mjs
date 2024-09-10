import e from 'express'
const router = e.Router();

import dotenv from 'dotenv'
dotenv.config()

import RegistrationType from '../../models/db/RegistrationTypeTable.mjs';
import RoleTypeTable from '../../models/db/RoleTypeTable.mjs';

import Helper from '../../util/Helpers.mjs'
import { id } from '../validation/GeneralSchemaValidation.mjs';
import { name } from './validation/ContentSchema.mjs';

// ! -------------------------------------------------------------
// ! Registration Types
// ! -------------------------------------------------------------
router.get("/registrationtypes", async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.get() }})
})
router.get("/registrationtypes/:id", Helper.validateParams(id), async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.getById(req.params.id) }})
})
router.post("/registrationtypes", Helper.validateBody(name), async (req, res) => {
    RegistrationType.post(req.body.name)
    return res.status(200).json({status: 200, message: `\"${req.body.name}\" added successfully`})
})
router.put("/registrationtypes/:id", Helper.validateParams(id), Helper.validateBody(name), async (req, res) => {
    RegistrationType.put(req.params.id, req.body.name)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" updated successfully`})
})
router.delete("/registrationtypes/:id", Helper.validateParams(id), async (req, res) => {
    RegistrationType.put(req.params.id)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" deleted successfully`})
})

// ! -------------------------------------------------------------
// ! Role Types
// ! -------------------------------------------------------------
router.get("/roletypes", async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RoleTypeTable.getColumn(), value: await RoleTypeTable.get() }})
})
router.get("/roletypes/:id", Helper.validateParams(id), async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.getById(req.params.id) }})
})
router.post("/roletypes", Helper.validateBody(name), async (req, res) => {
    RoleTypeTable.post(req.body.name)
    return res.status(200).json({status: 200, message: `\"${req.body.name}\" added successfully`})
})
router.put("/roletypes/:id", Helper.validateParams(id), Helper.validateBody(name), async (req, res) => {
    RoleTypeTable.put(req.params.id, req.body.name)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" updated successfully`})
})
router.delete("/roletypes/:id", Helper.validateParams(id), async (req, res) => {
    RoleTypeTable.delete(req.params.id)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" deleted successfully`})
})

export default router