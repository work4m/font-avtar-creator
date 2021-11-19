import { Request, Response, Router, NextFunction } from "express";
import { generate } from "text-to-image";

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const base64Image = await generate('Lo', {
        debug: false,
        maxWidth: 64,
        fontSize: 18,
        customHeight: 64,
        textAlign: "center",
        verticalAlign: "center",
        margin: 5,
        bgColor: 'blue',
        textColor: 'red',
    });

    const img = Buffer.from(base64Image.split(",")[1], 'base64');

    res.set("Content-Type", "image/png");
    res.set("Content-Length", img.length.toString());
    res.send(img);
});

router.get('/:id/:name', (req: Request, res: Response, next): void => {
    res.send(req.params);
});

export default router;
