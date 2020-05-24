"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apis_controller_1 = __importDefault(require("../controllers/apis-controller"));
const router = express_1.Router();
router.get("/", apis_controller_1.default);
exports.default = router;
//# sourceMappingURL=apis-routes.js.map