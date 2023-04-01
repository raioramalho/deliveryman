import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController';

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
routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);

const findAllDeliveriesController = new FindAllDeliveriesController();
routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle);

const findAllAvailableController = new FindAllAvailableController();
routes.get('/deliveries', ensureAuthenticateDeliveryman, findAllAvailableController.handle);

const updateDeliverymanController = new UpdateDeliverymanController();
routes.put('/deliveries/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

export { routes }
