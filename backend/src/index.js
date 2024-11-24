import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import carRouter from "./routes/car-routes.js";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.BACKEND_PORT || 80;
console.log("PORT = ", port)
app.use(express.json());
app.use("/api/", carRouter);

app.listen(port, '0.0.0.0', () => console.log(`listening on port ${port}`));
export default app;
