import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 5000;

// middleware
app.use(express.json()); //for parsing body data in json format
app.use(express.urlencoded()); // for parsing body data in urlencoded format (form data)

app.get('/', (req: Request, res: Response) => {
   res.send('Hello 20th August!');
});
app.post("/", (req: Request, res: Response) => {
   console.log(req.body);
   res.send('POST request received!');
});
app.listen(port, () => {
   console.log(`http://localhost:${port}`);
});