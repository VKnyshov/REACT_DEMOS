import joi from 'joi';

export const postValidator = joi.object().keys({
    userId: joi.number()
        .required()
        .messages({
            "number.required": "field is required"
        }),
    id: joi.number().required().min(1).max(30),
    title: joi.string()
        .required()
        // .pattern(/w3,20/)
        .min(3)
        .max(20),

    body: joi.string()
        .required()
        .min(10)
})