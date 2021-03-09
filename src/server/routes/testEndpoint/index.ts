import { Router } from 'express';
import { getController } from './testEndpoint.handlers';

const router: Router = Router();

router.route('/').get(getController);

export default router;
