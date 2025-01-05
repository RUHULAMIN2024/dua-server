import express from 'express';
import { DuasController } from './duas.controller';
const router = express.Router();

router.get('/', DuasController.getAllDuas);

export const DuasRouts = router;
