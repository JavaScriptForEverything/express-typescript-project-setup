import type { Request, Response, NextFunction } from 'express'

export const getAllUsers = (_req:Request, res:Response, _next:NextFunction) => {
	res.json({
		status: 'success',
		data: {}
	})
}

