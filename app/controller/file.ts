import { Controller } from 'egg';

export default class FileController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('file');
  }
}
