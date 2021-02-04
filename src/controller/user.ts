import { Controller, Get, Inject, Provide } from "@midwayjs/decorator";
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

    // @Get('/')
    // async getUser(@Query() id: number): Promise<User> {
    //     return this.userService.getUser(id)
    // }

}