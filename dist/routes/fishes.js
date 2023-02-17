"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const fishes_1 = require("../controllers/fishes");
router.get('', fishes_1.getfishes);
router.get('/:id', fishes_1.getfisheById);
exports.default = router;
