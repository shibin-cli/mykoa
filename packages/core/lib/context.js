const context = {
  _body: null,
  req: null,
  res: null,
  get body() {
    return this._body
  },
  set body(val) {
    if (typeof val !== 'string') {
      val = JSON.stringify(val)
    }
    this._body = val
    // this.res.end(this._body)
  },
  get method() {
    return this.req.method
  },
  get url() {
    return this.req.url
  },
  set(filed, val) {
    this.res.setHeader(filed, val)
  },
  throw(code, text) {
    this.res.statusCode = code
    this.res.end(text || 'Error')
  },
  redirect(url) {
    this.res.statusCode = 302
    this.set('Location', url)
    this.body = `Redirecting to ${url}.`
  },
  get path() {
    return this.req.url
  }
}
function creatContext(req, res) {
  const ctx = Object.create(context)
  ctx.req = req
  ctx.res = res
  return ctx
}
module.exports = creatContext
