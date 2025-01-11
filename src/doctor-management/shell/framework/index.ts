import { Router } from 'express';
import { ManagementController } from '../adapters/inbound/management.controller';

const router = Router();
const controller = new ManagementController();

router.use('/', controller.router);

export default router;
