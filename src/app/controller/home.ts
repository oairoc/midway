import { Context, inject, controller, get, provide } from 'midway';

@provide()
@controller('/api')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }

  @get('/api')
  async api() {
    this.ctx.body = `hello! API`;
  }
}
