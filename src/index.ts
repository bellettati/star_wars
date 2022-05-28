import 'dotenv/config';
import validateEnv from './utils/validateEnv';
import App from './app';

//controllers
import PilotController from './resources/pilot/pilot.controller';
import ContractController from './resources/contracts/contract.controller';
import TravelController from './resources/travels/travel.controller';

import TestController from './resources/test.controller';

validateEnv();

const app = new App(
  [
    new PilotController(),
    new ContractController(),
    new TravelController(),

    new TestController(), // only for tests
  ], 
  Number(process.env.PORT)
);

app.listen();