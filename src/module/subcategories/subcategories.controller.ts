import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SubCategoriesService } from './subcategories.service';

const getAllSubCategories = catchAsync(async (req, res) => {
  const result = await SubCategoriesService.getAllSubCategories();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'SubCategories are retrieved successfully',
    data: result,
  });
});

export const SubCategoriesController = {
  getAllSubCategories,
};
