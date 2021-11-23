import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import  Jwt from "jsonwebtoken";


async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization'];
        if(!authorizationHeader){
            throw new ForbiddenError('Crendenciais não informadas')
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválida')
        }
        const secretKey = 'my_secret_key';

        const tokenPayload = Jwt.verify(token, secretKey);

        
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            throw new ForbiddenError('Token inválido')
        }

        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        };
        req.user = user;
        next();

    } catch (error) {
        next(error);
        
    }

}

export default bearerAuthenticationMiddleware;