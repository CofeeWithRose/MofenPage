import { Provider, Injectable, Logger } from '@nestjs/common'
import { Connection, Repository } from 'typeorm';
import UserEntity from './dto/user.entity';
import User from './interfaces/User';
import { InjectRepository } from '@nestjs/typeorm';
import { mixHash } from 'src/utils/mix.hash';
import WebError from 'src/global/exception/WebError';

@Injectable()
export default class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    regist(user: User) {
        const { pwd, userName, ...rest } = user
        if (!pwd) {
            throw new WebError('0', '请输入密码')
        }
        if (!userName) {
            throw new WebError('0', '请输入账号')
        }
        return this.userRepository.insert({ ...rest, userName, pwd: mixHash(pwd) })

    }

    async login(user: User, session: Express.Session) {
        const { userName, pwd } = user
        if (!pwd) {
            throw new WebError('0', "密碼为 null")
        }
        const dtoUser = await this.userRepository.findOne({ userName, pwd: mixHash(pwd) })
        if (dtoUser) {
            session.userId = dtoUser.id
            Logger.log('login: ', dtoUser.id)
            return true
        }
        console.log('login failed: ', userName, pwd)
        return false
    }

    async getInfo(session: Express.Session) {
        const user = await this.userRepository.findOne({ id: session.userId })
        if (user) {
            const { userName } = user
            return { userName }
        }
        return null
    }
}