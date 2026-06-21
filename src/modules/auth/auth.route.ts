import { Router } from "express";
import { authConntroller } from "./auth.controller";

const router = Router();
router.post("/login",authConntroller.loginUser)
export const authRoute = router