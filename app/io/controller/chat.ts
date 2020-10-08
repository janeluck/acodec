import { Controller } from 'egg';

export default class NspController extends Controller {
  public async index() {
    const message = this.ctx.args[0];
    console.log('chat :', message + ' : ' + process.pid);
    const say = await this.ctx.service.user.sayHi('egg');
    this.ctx.socket.emit('res', say);
  }
}
