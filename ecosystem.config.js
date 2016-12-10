module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'Koa2 boilerplate',
      script    : 'app.js',
      node_args: '--harmony_async_await',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
}
