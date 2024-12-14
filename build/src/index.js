"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const data_source_1 = require("./db/data-source");
const app = (0, express_1.default)();
const PORT = 8081;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
new routes_1.default(app);
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database is running.");
})
    .catch((error) => {
    console.log(error);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
