import { cleanEnv, str, port } from 'envalid';

export const validateEnv = (): void => {
  cleanEnv(
    process.env,
    {
      NODE_ENV: str({ choices: ['development', 'production'] }),
      MONGO_PATH: str(),
      PORT: port({ default: 3000 })
    } 
  )
}