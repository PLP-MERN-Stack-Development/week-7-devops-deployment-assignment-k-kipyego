import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import logger from '../config/logger';

interface JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      res.status(401).json({ message: 'Not authorized to access this route' });
      return;
    }

    try {
      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'your-secret-key'
      ) as JwtPayload;

      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      logger.error('Token verification failed:', error);
      res.status(401).json({ message: 'Not authorized to access this route' });
    }
  } catch (error) {
    logger.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 