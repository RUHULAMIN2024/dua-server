import QueryBuilder from '../../builder/QueryBuilder';
import { searchableFields } from './duas.constant';
import { Duas } from './duas.model';

const getAllDuas = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Duas.find(), query)
    .search(searchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

export const DuasService = {
  getAllDuas,
};
