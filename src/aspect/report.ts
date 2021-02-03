import { Aspect, IMethodAspect, JoinPoint, Provide } from '@midwayjs/decorator';
import { UserController } from '../controller/user';

@Provide()
@Aspect(UserController)
export class ReportInfo implements IMethodAspect {
    async afterReturn(point: JoinPoint, result) {
        return result
    }
}