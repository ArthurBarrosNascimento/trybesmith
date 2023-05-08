import schemas from './schemas';

const validadeName = (name: string) => {
  const { error } = schemas.string.validate(name);
  if (error) {
    return { type: 422, message: '"name" must be a string' };
  }
  return { type: null, message: '' };
}; 

const validadeAmount = (amount: string) => {
  const { error } = schemas.string.validate(amount);
  if (error) {
    return { type: 422, message: '"amount" must be a string' };
  }
  return { type: null, message: '' };
}; 

const validateLengthName = (name:string) => {
  const { error } = schemas.length.validate(name);
  if (error) {
    return { type: 422, message: '"name" length must be at least 3 characters long' };
  }
  return { type: null, message: '' };
};

const validateLengthAmount = (amount:string) => {
  const { error } = schemas.length.validate(amount);
  if (error) {
    return { type: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return { type: null, message: '' };
};

export default {
  validadeName,
  validadeAmount,
  validateLengthName,
  validateLengthAmount,
};
