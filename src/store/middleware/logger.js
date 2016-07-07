export default store => next => action  => {
  typeof log !== "undefined" ? _log.info(action) : false
  return next(action)
}