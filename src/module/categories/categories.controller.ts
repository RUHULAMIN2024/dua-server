import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoriesService } from './categories.service';

const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoriesService.getAllCategories(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Categories are retrieved successfully',
    data: result,
  });
});

export const CategoriesController = {
  getAllCategories,
};
