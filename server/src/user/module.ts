import { Module, Type, Provider } from '@nestjs/common'
import UserService from './service'
import UserController from './controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './dto/user.entity';
@Module({  
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers: [UserService],
    exports: [ UserService]
})
export default class UserModule{}