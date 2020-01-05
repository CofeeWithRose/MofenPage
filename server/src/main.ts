import { NestFactory } from '@nestjs/core'
import AppModule from './app.modules'
import * as session from 'express-session'
import { SESSION_CONFIG } from './config';

const bootstrap = async () => {
    const app =await NestFactory.create(AppModule)
    app.use(session(SESSION_CONFIG))
    await app.listen(3100)
}
bootstrap()