const Router = require('koa-router');
const userRouter = new Router({
  prefix: '/user'
})

const userManager = require('../services/user')
const { resOk, resErr, resOkIfNoErr } = require('./res')

userRouter
  .get('/', ctx => {
    ctx.body = 'user';
  })
  .post('/sign-up', async ctx => {
    const { uid, pw } = ctx.request.body
    if (uid && pw) {
      const error = await userManager.signUp(uid, pw)
      resOkIfNoErr(ctx, error)
    }
  })
  .post('/sign-in', async ctx => {
    const { uid, pw } = ctx.request.body
    const error = await userManager.checkUidPw(uid, pw)
    if (!error) {
      ctx.session.uid = uid
    }
    resOkIfNoErr(ctx, error)
  })
  .post('/sign-out', ctx => {
    delete ctx.session.uid
    resOk(ctx)
  })

module.exports = (app) => {
  app.use(userRouter.routes())
}