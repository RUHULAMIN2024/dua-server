import { Router } from 'express';
import { CategoriesRouts } from '../module/categories/categories.route';
import { SUBCategoriesRouts } from '../module/subcategories/subcategories.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/dua',
    route: DuaRoutes,
  },
  {
    path: '/categories',
    route: CategoriesRouts,
  },
  {
    path: '/sub-categories',
    route: SUBCategoriesRouts,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
