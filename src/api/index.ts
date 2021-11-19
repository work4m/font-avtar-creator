import { Request, Response, Router } from "express";

const router = Router();

router.get('/:id', (req: Request, res: Response, next): Response => {
    return res.send(req.params);
});

router.get('/:id/:name', (req: Request, res: Response, next): void => {
    res.send(req.params);
});

export default router;
