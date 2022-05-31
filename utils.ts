// 是否是微信浏览器
export const isWeChat = () => {
  const userAgent = window.navigator.userAgent
  if (/MicroMessenger/i.test(userAgent)) {
    return true
  }
  return false
}