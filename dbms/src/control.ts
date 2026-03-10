import { Request, Response } from "express"
import asyncHandler from "./middleware"
import { queryService } from "./query"

export const createUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await queryService.getUser()

  res.status(201).json(result)
})