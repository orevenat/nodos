const _ = require('lodash');
const path = require('path');
const localCommands = require('./commands');
const log = require('./logger');

module.exports = async (projectRoot, env = process.env.NODOS_ENV || 'development') => {
  const appPath = path.join(projectRoot, 'config', 'environments', `${_.capitalize(env)}.js`);
  log(appPath);
  const appModule = require(appPath);
  log(appModule);
  const app = new appModule.default(projectRoot, env);
  Object.values(localCommands).forEach((command) => app.addCommand(command));
  return app;
};
