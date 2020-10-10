import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = { name: 'egg' };
    await ctx.render('home', data);
  }
}
