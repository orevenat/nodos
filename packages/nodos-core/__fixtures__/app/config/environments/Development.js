import Application from '../Application';

export default class extends Application {
  init() {
    super.init();
    this.config.logLevel = 'debug';
    this.config.errorHandler = false;
    this.config.cacheModules = false;
    this.config.host = 'http://example.com';
    // this.config.db = {
    //   type: 'sqlite',
    //   synchronize: true,
    //   logging: true,
    //   database: 'db/test.sqlite3',
    //   entities: [
    //     `${__dirname}/../../app/entities/*.js`,
    //   ],
    // };
  }
}
