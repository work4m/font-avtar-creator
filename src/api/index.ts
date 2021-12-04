import { Request, Response, Router, NextFunction } from "express";
import 'canvas';
import { generate } from "text-to-image";

import getTextFromName from "@helper/getTextFromName";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    const name: string = req.query.name as string;
    const background: string = req.query.background as string;
    const color: string = req.query.color as string;
    const upper: string = req.query.upper as string || "true"; // uppercase parameter
    const lower: string = req.query.lower as string; // lower parameter

    console.log("upper :: " + typeof upper);

    const chatText = getTextFromName({ name, upper: (upper === "true"), lower: (lower === "true")});

    const base64Image = await generate(chatText, {
        debug: false,
        maxWidth: 64,
        fontSize: 24,
        customHeight: 64,
        textAlign: "center",
        verticalAlign: "center",
        margin: 5,
        bgColor: background || 'white',
        textColor: color || 'black',
    });

    const img = Buffer.from(base64Image.split(",")[1], 'base64');

    res.set("Content-Type", "image/png");
    res.set("Content-Length", img.length.toString());
    res.send(img);
});

export default router;
