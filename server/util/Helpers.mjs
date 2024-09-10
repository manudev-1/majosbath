import Joi from "joi";

class Helper{
    /**
     * 
     * @param {Joi.ObjectSchema} schema 
     */
    static validateParams(schema){
        return (req, res, next) => {
            const { error } = schema.validate(req.params);
            if (error) {
                console.log(error);
                return res.status(400).json({
                    status: 400,
                    message: error.details.map(detail => detail.message).join(', ')
                });
            }
            next();
        }
    }
    /**
     * 
     * @param {Joi.ObjectSchema} schema 
     */
    static validateBody(schema){
        return (req, res, next) => {
            const { error } = schema.validate(req.body);
            if (error) {
                console.log(error);
                return res.status(400).json({
                    status: 400,
                    message: error.details.map(detail => detail.message).join(', ')
                });
            }
            next();
        }
    }
}

export default Helper