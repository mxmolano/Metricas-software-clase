import app from './app';
import { ServerBootstrap } from './bootstrap/serverbootstrap';

const serverBootstrap = new ServerBootstrap(app);
serverBootstrap.init();
