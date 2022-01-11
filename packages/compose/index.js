function compose(middlewares) {
  console.log(middlewares)
  return (context, next) => {
    return dispatch(0)
    function dispatch(i) {
      let fn = middlewares[i]
      if (i === middlewares.length) fn = next
      if (!fn) return Promise.resolve()
      return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
    }
  }
}
module.exports = compose
