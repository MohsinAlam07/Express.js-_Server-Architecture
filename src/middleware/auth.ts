import type { NextFunction, Request, Response } from "express";

const auth=()=>{
    return async (req : Request,res : Response,next : NextFunction)=>{
    // console.log("This is protected");
    console.log(req)
    next();

}
}

export default auth