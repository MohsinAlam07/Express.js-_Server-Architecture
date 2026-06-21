import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  // console.log(req.body)
//   const { name, email, password, age } = req.body;
  try {
    const result=await userService.createUserIntoDB(req.body)
    // console.log(result);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllUsers =async (req: Request, res: Response) => {
  try {
  const result =await userService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: "Users, restrive successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}
const getSingleUser= async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(id)
  try {
   const result =await userService.getSingleUserFromDB(id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Users not found",
        data: {},
      });
    }
    // console.log(result)
    res.status(200).json({
      success: true,
      message: "User, restrive successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
