import joi from 'joi';

export const postValidator = joi.object().keys({
    userId: joi.number().min(1).max(10)
        .messages({
            "number.min": "ID повинен бути більше 1",
            "number.max": "ID повинен бути не більше 10",
        }),
    title: joi.string().min(3).max(20)
        .messages({
            "string.min": "Треба більше 3 знаків",
            "string.max": "Треба меньше 20 знаків",
            "string.empty": "Впишіть назву посту",
        }),
    body: joi.string().min(20)
        .messages({
            "string.min": "Треба більше 20 знаків",
            "string.empty": "Впишіть пост",
        }),
})