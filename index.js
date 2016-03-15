module.exports = function (THREE) {
  var STLLoader = require('three-stl-loader')(THREE)
  var loader = new STLLoader()
  var stlPath = './dolphin.stl'

  return function (onLoad) {
    loader.load(stlPath, onLoad)
  }
}
