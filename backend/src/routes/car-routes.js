import "dotenv/config";
import Router from "express";
const carRouter = Router();

carRouter.get("/cars", async (req, res) => {
  //   const { fbId } = req.query;

  try {
    res.status(200).json("Testing server");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default carRouter;
