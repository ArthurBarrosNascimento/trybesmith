import Joi from 'joi';

const string = Joi.string().required();

const length = Joi.string().min(3).required();

const schemas = {
  string,
  length,
};

export default schemas;
