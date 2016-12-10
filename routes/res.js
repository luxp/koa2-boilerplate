function resOk (ctx) {
  ctx.body = {}
}

function resErr (ctx, r) {
  ctx.body = { r }
}

function resOkIfNoErr (ctx, r) {
  if (r) {
    return resErr(ctx, r)
  }
  resOk(ctx)
}

module.exports = {
  resOk,
  resErr,
  resOkIfNoErr
}