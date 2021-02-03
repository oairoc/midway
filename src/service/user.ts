import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { User } from "../interface";

@Provide()
@Scope(ScopeEnum.Singleton)
export class UserService {

    private num: number = 1

    async getUser(id: number): Promise<User> {
        return {
            id: id,
            name: "lily",
            age: this.num++
        }
    }

}