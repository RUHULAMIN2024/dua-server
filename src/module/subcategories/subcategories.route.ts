import express from 'express';
import { SubCategoriesController } from './subcategories.controller';
const router = express.Router();

router.get('/', SubCategoriesController.getAllSubCategories);

export const SUBCategoriesRouts = router;
