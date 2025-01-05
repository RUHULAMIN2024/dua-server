/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { Categories } from './categories.model';
import mongoose from 'mongoose';

const getAllCategories = async (query: Record<string, unknown>) => {
  const result = await Categories.find();

  return result;
};

export const CategoriesService = {
  getAllCategories,
};
