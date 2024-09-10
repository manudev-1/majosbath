import e from 'express'
const router = e.Router();

import dotenv from 'dotenv'
dotenv.config()

import RegistrationType from '../../models/db/RegistrationTypeTable.mjs';
import RoleTypeTable from '../../models/db/RoleTypeTable.mjs';

import Helper from '../../Util/Helpers.mjs'
import { id } from '../validation/GeneralSchemaValidation.mjs';

router.get("/registrationtypes", async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.get() }})
})
router.get("/registrationtypes/:id", Helper.validateParams(id), async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.getById(req.params.id) }})
})

router.get("/roletypes", async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RoleTypeTable.getColumn(), value: await RoleTypeTable.get() }})
})
router.get("/roletypes/:id", Helper.validateParams(id), async (req, res) => {
    return res.status(200).json({status: 200, message: { columns: await RegistrationType.getColumn(), value: await RegistrationType.getById(req.params.id) }})
})

export default router