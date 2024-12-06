import express, { Request, Response } from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router)

server.get('/' , (req: Request, res: Response) => {
    return res.status(200).json({message : 'Api capixaba'})
})

server.listen(3000, () => {
    console.log('Server running on port 4000');
})