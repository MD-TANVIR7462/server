import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
   res.send('Hello 20th August!');
});

app.listen(port, () => {
   console.log(`http://localhost:${port}`);
});