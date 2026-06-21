// const express = require('express')
import express, {
  type Application,
  type Request,
  type Response,
} from "express";

// import { Pool } from "pg";

import { initDB, pool } from "./db";
import { userRoute } from "./modules/user/user.route";

const app: Application = express();
// const port = config.port;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req: Request, res: Response) => {
  //   res.send('Hello World!')
  res.status(200).json({ message: "Express Server", authoor: "Next level" });
});
app.use('/api/users',userRoute)




app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
         DELETE FROM users WHERE id=$1
            `,
      [id],
    );
    if(result.rowCount===0){
        res.status(404).json({
        success: false,
        message: "Users not found",
      });

    }
    res.status(200).json({
      success: true,
      message: "User,delete successfully",
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});
export default app