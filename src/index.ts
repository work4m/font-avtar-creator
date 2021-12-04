import express, { Application, Request, Response } from "express";

import api from "@api";

const app: Application = express();
const port = process.env.PORT || 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send("Cannot GET /");
}
);

app.post('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({

    });
}
);

app.post('/update', (req: Request, res: Response): void => {
  const { name, description } = req.body;
  res.send(`Name ${name}, desc ${description}`);
});

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}
