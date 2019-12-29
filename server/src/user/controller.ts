import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import UserService from './service';
import User from './interfaces/User';
import ServerResponse from 'src/global/dto/server.response';

@Controller('user')
export default class UserController{

    constructor(
        private readonly userService: UserService
    ){}

    @Post('regist')
    regist(@Body() user: User){
        const data =  this.userService.regist(user)
        return new ServerResponse(1, data)
    }

    @Get('login')
    login(@Body() user: User){
        const data = this.userService.login(user)
        return new ServerResponse(1,data)
    }


}