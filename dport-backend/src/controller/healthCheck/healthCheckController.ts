import { Request, Response } from 'express';

const GetHealth = (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: 'server is up',
    });
};

export { GetHealth };
