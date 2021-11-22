import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'

// get /users (done)
// get /users/:uuid (done)
// post /users (done)
// put /users/:uuid (done)
// dele /users/:uuid (done)


const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ username: 'Jocsa' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body

    console.log(req.body);

    res.status(StatusCodes.CREATED).send(newUser)
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send(modifiedUser)


});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    // const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);

    console.log('deleted');
});

export default usersRoute;
