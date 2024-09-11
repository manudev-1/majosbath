import e from 'express'
const router = e.Router();

import dotenv from 'dotenv'
dotenv.config()

import RoleTypeTable from '../../models/db/RoleTypeTable.mjs';
import UserTable from '../../models/db/UserTable.mjs';

import Helper from '../../util/Helpers.mjs'
import { id } from '../validation/GeneralSchemaValidation.mjs';
import { name } from './validation/ContentSchema.mjs';
import { userSchema } from './validation/ContentSchema.mjs';

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

// ! -------------------------------------------------------------
// ! User
// ! -------------------------------------------------------------
router.get("/user", async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await UserTable.getColumn(), value: await UserTable.get() }})
})
router.get("/user/:id", Helper.validateParams(id), async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await UserTable.getColumn(), value: await UserTable.getById(req.params.id) }})
})
router.post("/user", Helper.validateBody(userSchema), async (req, res) => {
    UserTable.post(req.body.nick, req.body.email, req.body.password)
    return res.status(200).json({status: 200, message: `User added successfully`})
})
router.put("/user/:id", Helper.validateParams(id), Helper.validateBody(name), async (req, res) => {
    UserTable.put(req.params.id, req.body.name)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" updated successfully`})
})
router.delete("/user/:id", Helper.validateParams(id), async (req, res) => {
    UserTable.delete(req.params.id)
    return res.status(200).json({status: 200, message: `\"${req.params.id}\" deleted successfully`})
})

export default router