import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
})

console.clear()
app.listen(3000, () => console.log("🚀 ~ app: server.ts:5 ~ : Server is running at [ http://localhost:3000 ] !!"))

