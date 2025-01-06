import { Duas } from './duas.model';

const getAllDuas = async () => {
  const result = await Duas.find();

  return result;
};

export const DuasService = {
  getAllDuas,
};
