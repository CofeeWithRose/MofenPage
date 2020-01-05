import { Controller, Get, Param, Post, Body, Request, Session } from '@nestjs/common'
import UserService from './service';
import User from './interfaces/User';
import ServerResponse from 'src/global/dto/server.response';
import { BASE_PATH } from 'src/config';

@Controller(`${BASE_PATH}/user`)
export default class UserController{

    constructor(
        private readonly userService: UserService
    ){}

    @Post('regist')
    async regist(@Body() user: User){
        const data = await this.userService.regist(user)
        return new ServerResponse(1, data)
    }

    @Post('login')
    async login(@Body() user: User, @Session() session: Express.Session){
        const data = await this.userService.login(user, session)
        return new ServerResponse(1,data)
    }

    @Get('info')
    async getInfo(@Session() session: Express.Session){
        const data = await this.userService.getInfo(session)
        return  new ServerResponse(1,data)
    }


}