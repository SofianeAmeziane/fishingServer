"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const lures_1 = require("../controllers/lures");
router.get('', lures_1.getlures);
router.get('/:id', lures_1.getlureById);
exports.default = router;
