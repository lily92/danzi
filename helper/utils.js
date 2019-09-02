let timeout = null

/**
 *js防抖
 * @param {*} fn
 * @param {*} wait 等待时间
 */
function debounce(fn, wait) {
  if (timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(fn, wait)
}
export default debounce
