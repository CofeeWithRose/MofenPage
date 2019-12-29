import { Provider, Injectable} from '@nestjs/common'
import User from './interfaces/User';

@Injectable()
export default class UserService  {

    regist(user: User){
        return 'user inter'
    }

    login(user: User){
        return 'login'
    }
}