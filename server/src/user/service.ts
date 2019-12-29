import { Provider, Injectable} from '@nestjs/common'
import { Connection, Repository } from 'typeorm';
import UserEntity from './dto/user.entity';
import User from './interfaces/User';
import { InjectRepository } from '@nestjs/typeorm';
import { mixHash } from 'src/utils/mix.hash';

@Injectable()
export default class UserService  {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    regist(user: User){
        const {pwd, ...rest} = user
        return this.userRepository.insert({...rest, pwd: mixHash(pwd)})
    }

    async login(user: User){
        return  this.userRepository.find({ userName: 'admin'})
    }
}