import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import UserService from './service';
import User from './interfaces/User';
import ServerResponse from 'src/global/dto/server.response';

@Controller('user')
export default class UserController{

    constructor(
        private readonly userService: UserService
    ){}

    @Get('regist')
    async regist(@Body() user: User){
        const data = await this.userService.regist(user)
        return new ServerResponse(1, data)
    }

    @Get('login')
    async login(@Body() user: User){
        const data = await this.userService.login(user)
        return new ServerResponse(1,data)
    }


}