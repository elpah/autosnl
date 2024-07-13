import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import carRouter from "./routes/car-routes.js";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/", carRouter);

// app.use("/api/products", productRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
