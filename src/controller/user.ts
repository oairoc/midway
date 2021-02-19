import { ALL, Body, Controller, Get, Inject, Post, Provide } from "@midwayjs/decorator";
import { UserService } from "../service/user";

@Provide()
@Controller('/api/user')
export class UserController {

    @Inject()
    userService: UserService

    @Get('/list')
    async list() {
        return this.userService.getAll()
    }

    @Post('/add')
    async add(@Body(ALL) body: any) {
        return this.userService.addUser(body)
    }

    @Post('/del')
    async del(@Body() name: string) {
        return this.userService.delUser(name)
    }

}