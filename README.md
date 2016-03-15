## three-dolphin-geometry-loader

uses [three-stl-loader](https://github.com/enspiral-cherubi/three-stl-loader) and [rusty smith's dolphin.stl](https://grabcad.com/library/dolphin-9) to load a sick dolphin-shaped [THREE.BufferGeometry](http://threejs.org/docs/#Reference/Core/BufferGeometry)

### install

```
npm i --save three-dolphin-geometry-loader
```

### usage

```js
var THREE = require('three')
var loader = require('./three-dolphin-geometry-loader')(THREE)

...

loader(function (geometry) {
  var material = new THREE.MeshNormalMaterial()
  var dolphin = new THREE.Mesh(geometry, material)
  scene.add(dolphin)
})
```

---

![lol](http://g.recordit.co/W4QBgDvI9N.gif)
