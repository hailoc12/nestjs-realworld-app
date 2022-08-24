"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const jwt = __importStar(require("jsonwebtoken"));
class BaseController {
    constructor() { }
    getUserIdFromToken(authorization) {
        if (!authorization)
            return null;
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, config_1.SECRET);
        return decoded.id;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map