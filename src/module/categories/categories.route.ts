import express from 'express';
import { CategoriesController } from './categories.controller';
const router = express.Router();

router.get('/', CategoriesController.getAllCategories);

export const CategoriesRouts = router;
