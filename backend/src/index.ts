import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";

import statusRouter from "./api/status";
import classifyRouter from "./api/classify";

dotenv.config();

// Load configurations
const port = process.env.PORT || 5000;

// Initialize express application
const app = express();
app.use(cors());
app.use(fileUpload());

app.use(statusRouter);
app.use(classifyRouter);

["SIGINT", "SIGTERM"].forEach(signal => process.on(signal, () => process.exit(1)));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
