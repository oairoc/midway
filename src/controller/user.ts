import { Controller, Get, Provide, Query, RequestIP } from "@midwayjs/decorator";
import { User } from "./interface";

@Provide()
@Controller('/api/user')
export class UserController {

    @Get('/')
    async getUser(@Query() id: number): Promise<User> {
        // xxxx
        return
    }

    @Get('/test')
    async demo(@RequestIP() ip: string) {
        return ip
    }

}