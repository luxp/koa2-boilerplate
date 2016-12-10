const { resErr } = require('./res')

exports.requireSignIn = (ctx, next) => {
  if (ctx.session.uid !== undefined) {
    return next()
  } else {
    resErr(ctx, 'Please sign in first')
  }
}