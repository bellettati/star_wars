import Joi from 'joi';

const create = Joi.object(
  {
    name: Joi.string().max(80).min(5).required(),
    age: Joi.number().min(18).required()
  }
);

export default { create };