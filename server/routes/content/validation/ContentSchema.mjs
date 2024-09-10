import Joi from 'joi'

export const name = Joi.object({
    name: Joi.string().required()
}).required()