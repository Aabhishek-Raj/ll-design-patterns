import type { Request, Response, NextFunction } from 'express'

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(`[AsyncHandler] Executing async handler for: ${req.path}`)
    Promise.resolve(fn(req, res, next)).catch(next)
    //  Promise.resolve(fn(req, res, next)).catch(next)
    try {
        await fn(req, res, next)
    } catch (err) {
        next(err)
    }
  }

export default asyncHandler