/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { Duas } from './duas.model';
import mongoose from 'mongoose';

const getAllDuas = async () => {
  const result = await Duas.find();

  return result;
};

export const DuasService = {
  getAllDuas,
};
