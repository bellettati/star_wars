import Joi from 'joi';

const travel = Joi.object({
  pc: Joi.number().required(),
  planet: Joi.string().required(),
});

export default { travel };