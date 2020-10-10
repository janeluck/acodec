import { Controller } from 'egg';

export default class PlayController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = { list: [ 'egg', 'exo', 'fake love', 'sweet', 'psycho' ] };
    await ctx.render('play', data);
  }
}
