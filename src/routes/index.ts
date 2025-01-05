import { Router } from 'express';
import { CategoriesRouts } from '../module/categories/categories.route';
import { SUBCategoriesRouts } from '../module/subcategories/subcategories.route';
import { DuasRouts } from '../module/duas/duas.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoriesRouts,
  },
  {
    path: '/sub-categories',
    route: SUBCategoriesRouts,
  },
  {
    path: '/dua',
    route: DuasRouts,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
