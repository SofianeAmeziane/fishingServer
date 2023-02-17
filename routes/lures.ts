const express = require('express');
const router = express.Router();
import { getlures, getlureById } from '../controllers/lures';

router.get('', getlures);
router.get('/:id', getlureById);
export default router