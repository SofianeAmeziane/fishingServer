const express = require('express');
const router = express.Router();
import { getfishes, getfisheById } from '../controllers/fishes';

router.get('', getfishes);
router.get('/:id', getfisheById);
export default router

