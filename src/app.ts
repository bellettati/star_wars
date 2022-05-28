import express, { Application } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import IController from './utils/interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {

  public express: Application;
  public port: number;

  constructor(controllers: IController[], port: number) {

    this.express = express();
    this.port = port;

    this.initializeDatabaseConnection();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeDatabaseConnection = (): void => {
    const mongoPath: string = process.env.MONGO_PATH!;

    mongoose.connect(mongoPath)
      .then(() => console.log('connected to DB'))
      .catch(e => console.log(e.message));
  }

  private initializeMiddleware = (): void => {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan('dev'))
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(compression());
  }

  private initializeControllers = (controllers: IController[]): void => {
    controllers.forEach(controller => {
      this.express.use('/api', controller.router);
    })
  }

  private initializeErrorHandling = (): void => {
    this.express.use(errorMiddleware);
  }

  public listen = (): void => {
    this.express.listen(this.port, () => console.log('server running on port '+this.port));
  }
}

export default App;
