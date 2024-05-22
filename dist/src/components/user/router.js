"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const component_service_1 = require("./component.service");
router.post('/users', component_service_1.register);
router.post('/users', component_service_1.login);
router.post('/users', component_service_1.logout);
exports.default = router;
