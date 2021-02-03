import { Controller, Get, Inject, Logger, Provide, Query } from "@midwayjs/decorator";
import { ILogger } from '@midwayjs/logger';
import { Context } from "egg";
import { UserService } from "../service/user";
import { User } from "../interface";

@Provide()
@Controller('/api/user')
export class UserController {

    @Inject()
    userService: UserService

    @Inject()
    ctx: Context

    @Logger()
    logger: ILogger;

    @Get('/')
    async getUser(@Query() id: number): Promise<User> {
        this.logger.info('plain error message', 321);
        return this.userService.getUser(id)
    }

    @Get('/test', { middleware: ['reportMiddleware'] })
    async test() {
        return this.ctx.query
    }

}