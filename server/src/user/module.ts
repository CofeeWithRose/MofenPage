import { Module, Type, Provider } from '@nestjs/common'
import UserService from './service'
import UserController from './controller'
@Module({  
    controllers:[UserController],
    providers: [UserService],
    exports: [ UserService]
})
export default class UserModule{}