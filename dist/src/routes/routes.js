"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/test', (_req, res) => {
    res.send("Hello world");
});
const router_1 = __importDefault(require("../components/user/router"));
router.use(router_1.default);
exports.default = router;
