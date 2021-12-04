import { Request, Response, Router, NextFunction } from "express";
import 'canvas';
import { generate } from "text-to-image";

import getTextFromName from "@helper/getTextFromName";
import imageTypes from "@utils/imageTypes";

const router = Router();

router.get('/', async (req: Request, res: Response) => {

    const name: string = req.query.name as string || "John Doe"; // name of the user
    const lower: string = req.query.lower as string; // lower parameter
    const type: string = req.query.type as string || "png"; // image formet type
    const size: string = req.query.size as string || "64"; // image formet type
    const fontSize: string = req.query.fontSize as string || "24"; // image formet type

    const background: string = req.query.background as string || 'white'; // background color of the name
    const color: string = req.query.color as string || 'black'; // color of the name

    const length: string = req.query.length as string || "2"; // length of the name
    const upper: string = req.query.upper as string || "true"; // uppercase parameter

    // manuplate types
    const upperBool: boolean = (upper === "true") as boolean;
    const lowerBool: boolean = (lower === "true") as boolean;

    // convert length to integer
    const charNum: number = parseInt(length);
    const sizeImg: number = parseInt(size);
    const fontSizeImg: number = parseInt(fontSize);

    console.log("query length :: " + length);

    const chatText = getTextFromName({
        name,
        upper: upperBool,
        lower: lowerBool,
        charNum
    });

    const base64Image = await generate(chatText, {
        debug: false,
        maxWidth: sizeImg,
        fontSize: fontSizeImg,
        customHeight: sizeImg,
        textAlign: "center",
        verticalAlign: "center",
        margin: 5,
        bgColor: background,
        textColor: color,
    });

    const img = Buffer.from(base64Image.split(",")[1], 'base64');

    res.set("Content-Type", imageTypes[type]);
    res.set("Content-Length", img.length.toString());
    res.send(img);
});

export default router;
