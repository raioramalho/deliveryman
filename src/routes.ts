import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';

const routes = Router();

const createClientController = new CreateClientController();
routes.post('/client/', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
routes.post('/client/authenticate', authenticateClientController.handle);

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

const createDeliverymanController = new CreateDeliverymanController();
routes.post('/deliveryman/', createDeliverymanController.handle);

const createDeliveryController = new CreateDeliveryController();
routes.post('/delivery', createDeliveryController.handle);

export { routes }
