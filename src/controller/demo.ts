import { Controller, Get, Inject, Logger, Provide } from "@midwayjs/decorator";
import { ILogger } from '@midwayjs/logger';
import { Context } from "egg";

@Provide()
@Controller('/api/demo')
export class DemoController {

    @Inject()
    ctx: Context

    @Logger()
    logger: ILogger;

    @Get('/test', { middleware: ['reportMiddleware'] })
    async test() {
        this.logger.info('plain error message', 321);
        return this.ctx.query
    }

}