"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const status_1 = __importDefault(require("./api/status"));
const classify_1 = __importDefault(require("./api/classify"));
dotenv_1.default.config();
// Load configurations
const port = process.env.PORT || 5000;
// Initialize express application
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)());
app.use(status_1.default);
app.use(classify_1.default);
["SIGINT", "SIGTERM"].forEach(signal => process.on(signal, () => process.exit(1)));
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
//# sourceMappingURL=index.js.map