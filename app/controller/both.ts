import { Controller } from 'egg';
import { ws, opt } from '../../jane/env';

export default class BothController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = {
      ws,
      opt,
    };
    await ctx.render('both', data);
  }
}
