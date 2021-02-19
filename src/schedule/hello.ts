import { Provide, Inject, Schedule, CommonSchedule } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Schedule({
    interval: 60000, // 5s 间隔
    type: 'worker', // 指定某一个 worker 执行
})

export class HelloCron implements CommonSchedule {

    @Inject()
    ctx: Context;

    // 定时执行的具体任务
    async exec() {
        this.ctx.logger.info(new Date());
    }

}