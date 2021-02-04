import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";

@Provide()
@Scope(ScopeEnum.Singleton)
export class DemoService {

    private num: number = 1

    getCount(): number {
        return this.num
    }

}