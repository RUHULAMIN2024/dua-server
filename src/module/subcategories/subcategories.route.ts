import express from 'express';
import { CategoriesController } from './subcategories.controller';
const router = express.Router();

router.get('/', CategoriesController.getAllCategories);

export const CategoriesRouts = router;
