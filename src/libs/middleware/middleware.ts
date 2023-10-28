import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import {errors} from '../consts/const'

const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect('/auth')
    }

    jwt.verify(token as string, process.env.TOKEN_SECRET as string, (error) => {
      if (error) {
        return res.status(403).json({message: 'Forbidden'});
      }
      next();
    });
  }
  catch (error) {
    throw new Error(errors.internalServer)
  }
}


export { protect };
