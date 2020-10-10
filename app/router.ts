import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/play', controller.play.index);
  // router.get('/chat', io.controller.chat.index);
};
