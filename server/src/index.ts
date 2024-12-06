import express, { Request, Response } from 'express';

const server = express();

server.get('/' , (req: Request, res: Response) => {
    return res.status(200).json({message : 'Api capixaba'})
})

server.listen(4000, '0.0.0.0' , () => {
    console.log('Server running on port 4000');
})