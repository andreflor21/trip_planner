import { FastifyInstance } from 'fastify';

import { verifyJwt } from '@/http/middlewares/verify-jwt';

import { authenticate } from './authenticate';
import { createUser } from './create-user';
import { refresh } from './refresh';
import { listUsers } from './list-users';
export async function usersRoutes(app: FastifyInstance) {
    app.post('/users', createUser);
    app.post('/sessions', authenticate);
    app.patch('/token/refresh', refresh);

    /* Protected routes */
    app.get('/users', { onRequest: [verifyJwt] }, listUsers);
    // app.patch('/user/:userId', { onRequest: [verifyJwt] }, update);
    // app.post('/users/:userId/addTrip', { onRequest: [verifyJwt] }, addTrip);
    // app.post('/users/:userId/removeTrip', { onRequest: [verifyJwt] }, removeTrip);
    // app.delete('/users/:userId', { onRequest: [verifyJwt] }, remove);
}
