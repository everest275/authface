"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.app = (0, express_1.default)();
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(body_parser_1.default.json());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(routes_1.default);
exports.app.listen(4000, () => {
    console.log("server on port", 4000);
});
