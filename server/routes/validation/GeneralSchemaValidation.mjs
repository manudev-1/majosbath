import Joi from 'joi'

export const id = Joi.object({
    id: Joi.number()
}).required()