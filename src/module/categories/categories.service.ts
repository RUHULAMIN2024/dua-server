import { Categories } from './categories.model';

const getAllCategories = async () => {
  const result = await Categories.find();

  return result;
};

export const CategoriesService = {
  getAllCategories,
};
