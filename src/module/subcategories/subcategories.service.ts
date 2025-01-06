import { SubCategories } from './subcategories.model';

const getAllSubCategories = async () => {
  const result = await SubCategories.find();

  return result;
};

export const SubCategoriesService = {
  getAllSubCategories,
};
