"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.editUser = exports.createUser = exports.obtainOneUser = exports.obtainUsers = void 0;
const postgres_1 = require("../../databases/postgres");
const obtainUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield postgres_1.pool.query("SELECT * FROM users");
        return res.status(200).json(response.rows);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.obtainUsers = obtainUsers;
const obtainOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield postgres_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.obtainOneUser = obtainOneUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        yield postgres_1.pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
        return res.status(200).json({
            message: "User created succefully",
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createUser = createUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    try {
        yield postgres_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id]);
        return res.status(200).json(`User ${id} updated successfully`);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.editUser = editUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield postgres_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
        return res.status(200).json(`User ${id} deleted succesfully`);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.removeUser = removeUser;
