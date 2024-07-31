import { FastifyInstance } from 'fastify';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { createTrip } from './create-trip';

export async function tripsRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJwt);

    app.post('/trips', createTrip);
    // app.get('/trips', listTrips);
    // app.get('/trips/:tripId', getTrip);
    // app.patch('/trips/:tripId', updateTrip);
}
