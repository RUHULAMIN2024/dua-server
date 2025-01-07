import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DuasService } from './duas.service';

const getAllDuas = catchAsync(async (req, res) => {
  const result = await DuasService.getAllDuas(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Duas are retrieved successfully',
    data: result,
  });
});

export const DuasController = {
  getAllDuas,
};
