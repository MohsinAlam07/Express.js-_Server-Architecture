import { Router, type Request, type Response} from "express";
import { userController } from "./user.controller";
import { pool } from "../../db";


const router = Router();
router.post("/",userController.createUser );
router.get("/", userController.getAllUsers);

router.get("/:id",userController.getSingleUser);


export const  userRoute=router;
