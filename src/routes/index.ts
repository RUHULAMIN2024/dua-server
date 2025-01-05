import { Router } from 'express';
import { UserRoutes } from '../module/user/user.route';
import { CategoriesRouts } from '../module/categories/categories.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoriesRouts,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
