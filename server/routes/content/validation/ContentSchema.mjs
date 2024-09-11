import Joi from 'joi'

export const name = Joi.object({
    name: Joi.string().required()
}).required()

export const userSchema = Joi.object({
    nick: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
}).required()