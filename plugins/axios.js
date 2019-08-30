import CryptoJS from 'crypto-js'
/** axios */
export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    const newObj = {}
    const data = config.data
    const str = generateMixed(8)
    // const str = 'ABCDEFGH'
    const encrypt = {
      'str': str,
      'code': Encrypt(str),
    }
    Object.assign(newObj, encrypt, data)
    config.data = newObj
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
    // redirect('/error?id=' + code)
  })
  $axios.onResponse((response) => {

  })
}


const lkey = '1234123412ABCDEF' // 十六位十六进制数作为密钥
const livbase = 'ABCDEF1234123412' // 十六位十六进制数作为密钥偏移量
/**
 *加密
 * @param {*} a
 * @return {[type]}
 */
function Encrypt(a) {
  const keyHash = CryptoJS.MD5(lkey)
  const key = CryptoJS.enc.Utf8.parse(keyHash)
  const iv = CryptoJS.enc.Utf8.parse(livbase)
  const res = CryptoJS.AES.encrypt(a, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding })
  return res.toString()
}


/**
 *随机数
 * @param {*}n
 * @return {[type]}
 */
function generateMixed(n) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let res = ''
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 35)
    res += chars[id]
  }

  return res
}
