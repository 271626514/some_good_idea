export default {
  RGB (color) {
    let color1, color2, color3
    color = '' + color
    if (typeof color !== 'string') return
    if (color.charAt(0) === '#') {
      color = color.substring(1)
    }
    let not16num = color.split('').filter(function (item, index) {
      return isNaN(parseInt(item, 16))
    })
    if (not16num.length) return
    switch (color.length) {
      case 3:
        color1 = color.substr(0, 1)
        color2 = color.substr(1, 1)
        color3 = color.substr(2, 1)
        color1 = color1 + color1
        color2 = color2 + color2
        color3 = color3 + color3
        break
      case 6:
        color1 = color.substr(0, 2)
        color2 = color.substr(2, 2)
        color3 = color.substr(4, 2)
        break
      default:
        return false
    }
    color1 = parseInt(color1, 16)
    color2 = parseInt(color2, 16)
    color3 = parseInt(color3, 16)
    return {
      r: color1,
      g: color2,
      b: color3
    }
  }
}
