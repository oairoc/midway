import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from 'typeorm';
import { User } from "../entity/user";

@Provide()
export class UserService {

    @InjectEntityModel(User)
    userModel: Repository<User>;

    async getAll() {
        return await this.userModel.find()
    }

}