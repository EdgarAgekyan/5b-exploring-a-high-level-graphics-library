import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

// let objLoader;
// {
//   objLoader = new OBJLoader();
//   objLoader.load('resources/models/mustang/mustang.obj', (root) => {
//     scene.add(root);
//   });
// }

// I was originally going to repeat the same code for each object.
// However, I realized I can just make a basic helper function to get the
// needed data for displaying each object.
// I used ChatGPT to help me realize this but this code is my work.

function addModel(objFile, mtlFile, scale, position, rotation) {
  const objLoader = new OBJLoader();
  const mtlLoader = new MTLLoader();
  mtlLoader.load(mtlFile, (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load(objFile, (root) => {
      root.rotation.set(rotation[0], rotation[1], rotation[2]);
      root.scale.set(scale[0], scale[1], scale[2]);
      root.position.set(position[0], position[1], position[2]);
      scene.add(root);
    });
  });
}

// The holder of books!!!
// addModel(
//   'resources/models/book/book.obj',
//   'resources/models/book/book.mtl',
//   [1, 1, 1],
//   [0, 0, 0],
//   [0, 0, 0],
// );

// Road
addModel(
  'resources/models/cottage/road.obj',
  'resources/models/cottage/road.mtl',
  [.2, .1, .1],
  [0, 0, -12],
  [0, 0, 0],
);

// Lamp 1
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [18, 7, -6],
  [0, 0, 0],
);

// Lamp 2
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [0, 7, -6],
  [0, 0, 0],
);

// Lamp 3
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [-18, 7, -6],
  [0, 0, 0],
);


// Lamp4
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [18, 7, -17],
  [0, 3.14, 0],
);

// Lamp 5
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [0, 7, -17],
  [0, 3.14, 0],
);

// Lamp 6
addModel(
  'resources/models/lamp/model.obj',
  'resources/models/lamp/materials.mtl',
  [3, 3, 3],
  [-18, 7, -17],
  [0, 3.14, 0],
);

// Pool
addModel(
  'resources/models/pool/SwimmingPool.obj',
  'resources/models/pool/SwimmingPool.mtl',
  [.4, .4, .4],
  [9.5, -2.5, 13],
  [0, -3.14 / 2, 0],
);

// Path
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10.4, 0, -6],
  [0, 2, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10, 0, -4],
  [0, -0.5, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10.5, 0, -2],
  [0, 1.3, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10.5, 0, 0],
  [0, .8, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10, 0, 2],
  [0, -.3, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10, 0, 4],
  [0, 0, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [10, 0, 6],
  [0, 1, 0],
);


addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, -6],
  [0, 0, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, -4],
  [0, 0, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, -2],
  [0, 0, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, 0],
  [0, .9, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, 2],
  [0, 2, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, 4],
  [0, .3, 0],
);
addModel(
  'resources/models/rocks/stone.obj',
  'resources/models/rocks/stone.mtl',
  [.4, .4, .4],
  [8, 0, 6],
  [0, -.5, 0],
);

// Gazebo:
addModel(
  'resources/models/gazebo/SM_Gazebo_02.obj',
  'resources/models/gazebo/SM_Gazebo_02.mtl',
  [.5, .5, .5],
  [-14, 0, 13],
  [0, 0, 0],
);

// Fountain
addModel(
  'resources/models/fountain/PUSHILIN_fountain.obj',
  'resources/models/fountain/PUSHILIN_fountain.mtl',
  [2.5, 2.5, 2.5],
  [-8, 2, 3],
  [0, 0, 0],
);

// Benchs
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-2, 0.5, 3],
  [0, 0, 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-13, 0.5, 3],
  [0, 3.14, 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-8, 0.5, 8],
  [0, -3.14/2, 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-8, 0.5, -2],
  [0, 3.14/2, 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-12, 0.5, 0],
  [0, -3.14/3 + 3.3, 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-11.5, 0.5, 6.5],
  [0, -(-3.14/3 + 3.3), 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-4, 0.5, 0],
  [0, -(-3.14/4), 0],
);
addModel(
  'resources/models/bench/model.obj',
  'resources/models/bench/materials.mtl',
  [2.5, 2.5, 2.5],
  [-4, 0.5, 7],
  [0, -.8, 0],
);

// {
//   const objLoader = new OBJLoader();
//   const mtlLoader = new MTLLoader();
//   mtlLoader.load('resources/models/book/book.mtl', (mtl) => {
//     mtl.preload();
//     objLoader.setMaterials(mtl);
//     objLoader.load('resources/models/book/book.obj', (root) => {
//       scene.add(root);
//     });
//   });
// }

let renderer, cube, scene, camera, cubes, geometry, loader, controls;

function main() {
  const canvas = document.querySelector('#c');
  // renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas,
    alpha: true,
  });
  RectAreaLightUniformsLib.init();
  renderer.setSize(window.innerWidth, window.innerHeight)

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = .1;
  const far = 200;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  // camera.position.z = 3.5;

  camera.position.set(0, 10, 20);
  camera.lookAt(0, 0, 0);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();


  scene = new THREE.Scene();

  const planeSize = 40;

  loader = new THREE.TextureLoader();



  var texture = loader.load('resources/images/grass.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);

  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(planeGeo, planeMat);
  mesh.rotation.x = Math.PI * -.5;
  scene.add(mesh);

  // {
  //   const cubeSize = 4;
  //   const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  //   const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC'});
  //   const mesh = new THREE.Mesh(cubeGeo, cubeMat);
  //   mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
  //   scene.add(mesh);
  // }
  // {
  //   const sphereRadius = 3;
  //   const sphereWidthDivisions = 32;
  //   const sphereHeightDivisions = 16;
  //   const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
  //   const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
  //   const mesh = new THREE.Mesh(sphereGeo, sphereMat);
  //   mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
  //   scene.add(mesh);
  // }

  // // const color = 0xFFFFFF;
  // const skyColor = 0xB1E1FF;  // light blue
  // const groundColor = 0xB97A20;  // brownish orange
  // const intensity = 1;
  // // const light = new THREE.AmbientLight(color, intensity);
  // const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  // scene.add(light);

  // Directional Light
  // const color = 0xFFFFFF;
  // const intensity = 1;
  // const light = new THREE.DirectionalLight(color, intensity);
  // light.position.set(0, 10, 0);
  // light.target.position.set(-5, 0, 0);
  // scene.add(light);
  // scene.add(light.target);

  // const helper = new THREE.DirectionalLightHelper(light);
  // scene.add(helper);

  var color, intensity, light, helper;

  // Directional Light to Simulate The Sun:
  color = 0xFFFFFF;
  intensity = 1;
  light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);
  scene.add(light);
  scene.add(light.target);

  // SpotLights for lamps:
  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(0, 9, -6.5);
  light.target.position.set(0, 0, -6.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);

  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(18, 9, -6.5);
  light.target.position.set(18, 0, -6.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);

  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(-18, 9, -6.5);
  light.target.position.set(-18, 0, -6.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);

  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(0, 9, -16.5);
  light.target.position.set(0, 0, -16.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);

  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(18, 9, -16.5);
  light.target.position.set(18, 0, -16.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);

  color = 0xFFFFFF;
  intensity = 400;
  light = new THREE.SpotLight(color, intensity);
  light.position.set(-18, 9, -16.5);
  light.target.position.set(-18, 0, -16.5);
  light.angle = 10;
  scene.add(light);
  scene.add(light.target);
  helper = new THREE.SpotLightHelper(light);
  scene.add(helper);



  // RectArea Light for the Pool
  color = 0x14A7E4;
  intensity = 10;
  const width = 14;
  const height = 7;
  light = new THREE.RectAreaLight(color, intensity, width, height);
  light.position.set(10,0.01, 13);
  light.rotation.x = THREE.MathUtils.degToRad(90);
  scene.add(light);
  helper = new RectAreaLightHelper(light);
  light.add(helper);

  
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
  var material = new THREE.MeshBasicMaterial({ color: 0x7D7D7D });  // Red color

  // Primary shapes:

  const cube = new THREE.Mesh(geometry, material);
  cube.scale.set(1, 4, 22);
  cube.position.set(-19.5, 1, 9);
  scene.add(cube);

  const cube2 = new THREE.Mesh(geometry, material);
  cube2.scale.set(1, 4, 22);
  cube2.position.set(20, 1, 9);
  scene.add(cube2);

  const cube3 = new THREE.Mesh(geometry, material);
  cube3.scale.set(1, 4, 40);
  cube3.position.set(0, 1, 20);
  cube3.rotation.set(0, 3.14/2, 0);
  scene.add(cube3);

  const cube4 = new THREE.Mesh(geometry, material);
  cube4.scale.set(12, 4, 4);
  cube4.position.set(-5.1, -1.99, 13);
  cube4.rotation.set(0, 0, 0);
  scene.add(cube4);

  material = new THREE.MeshBasicMaterial({ color: 0x636363 });  // Red color

  const cube5 = new THREE.Mesh(geometry, material);
  cube5.scale.set(15, 4, 4);
  cube5.position.set(9, -1.99, 0);
  cube5.rotation.set(0, 3.14/2, 0);
  scene.add(cube5);

  material = new THREE.MeshBasicMaterial({ color: 0x8A6500 });  // Red color

  const cube6 = new THREE.Mesh(geometry, material);
  cube6.scale.set(.3, .3, 14);
  cube6.position.set(7, 0, 0);
  scene.add(cube6);

  const cube7 = new THREE.Mesh(geometry, material);
  cube7.scale.set(.3, .3, 14);
  cube7.position.set(7, 1, 0);
  scene.add(cube7);

  const cube8 = new THREE.Mesh(geometry, material);
  cube8.scale.set(.3, .3, 14);
  cube8.position.set(11, 0, 0);
  scene.add(cube8);

  const cube9 = new THREE.Mesh(geometry, material);
  cube9.scale.set(.3, .3, 14);
  cube9.position.set(11, 1, 0);
  scene.add(cube9);
  material = new THREE.MeshBasicMaterial({ color: 0xAC7E00 });  // Red color

  const cube10 = new THREE.Mesh(geometry, material);
  cube10.scale.set(.25, 2, .25);
  cube10.position.set(7, 0, -6);
  scene.add(cube10);

  const cube11 = new THREE.Mesh(geometry, material);
  cube11.scale.set(.25, 2, .25);
  cube11.position.set(7, 0, -4);
  scene.add(cube11);

  const cube12 = new THREE.Mesh(geometry, material);
  cube12.scale.set(.25, 2, .25);
  cube12.position.set(7, 0, -2);
  scene.add(cube12);

  const cube13 = new THREE.Mesh(geometry, material);
  cube13.scale.set(.25, 2, .25);
  cube13.position.set(7, 0, 0);
  scene.add(cube13);

  const cube14 = new THREE.Mesh(geometry, material);
  cube14.scale.set(.25, 2, .25);
  cube14.position.set(7, 0, 2);
  scene.add(cube14);

  const cube15 = new THREE.Mesh(geometry, material);
  cube15.scale.set(.25, 2, .25);
  cube15.position.set(7, 0, 4);
  scene.add(cube15);

  const cube16 = new THREE.Mesh(geometry, material);
  cube16.scale.set(.25, 2, .25);
  cube16.position.set(7, 0, 6);
  scene.add(cube16);

  const cube17 = new THREE.Mesh(geometry, material);
  cube17.scale.set(.25, 2, .25);
  cube17.position.set(11, 0, -6);
  scene.add(cube17);

  const cube18 = new THREE.Mesh(geometry, material);
  cube18.scale.set(.25, 2, .25);
  cube18.position.set(11, 0, -4);
  scene.add(cube18);

  const cube19 = new THREE.Mesh(geometry, material);
  cube19.scale.set(.25, 2, .25);
  cube19.position.set(11, 0, -2);
  scene.add(cube19);

  const cube20 = new THREE.Mesh(geometry, material);
  cube20.scale.set(.25, 2, .25);
  cube20.position.set(11, 0, 0);
  scene.add(cube20);

  const cube21 = new THREE.Mesh(geometry, material);
  cube21.scale.set(.25, 2, .25);
  cube21.position.set(11, 0, 2);
  scene.add(cube21);

  const cube22 = new THREE.Mesh(geometry, material);
  cube22.scale.set(.25, 2, .25);
  cube22.position.set(11, 0, 4);
  scene.add(cube22);

  const cube23 = new THREE.Mesh(geometry, material);
  cube23.scale.set(.25, 2, .25);
  cube23.position.set(11, 0, 6);
  scene.add(cube23);

  // Used chatgpt to quickly do help with this
  const sphereRadius = 1;
  const sphereWidthSegments = 32;
  const sphereHeightSegments = 16;
  const sphereGeometry = new THREE.SphereGeometry(sphereRadius, sphereWidthSegments, sphereHeightSegments);

  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000});

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.scale.set(.5, .5, .5);
  sphere.position.set(10, .05, 14);
  scene.add(sphere);


  const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere2.scale.set(.5, .5, .5);
  sphere2.position.set(7, .05, 12);
  scene.add(sphere2);


  

  loader = new THREE.TextureLoader();

  texture = loader.load(
    'resources/images/sky_texture.png',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });


  renderer.render(scene, camera);
}


function render(time) {
  controls.update();
  time *= 0.001;  // convert time to seconds


  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

main();

requestAnimationFrame(render);

const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

function makeInstance(geometry, texture, x, y) {

  const cube = new THREE.Mesh(geometry, texture);
  scene.add(cube);
  cube.position.x = x;
  cube.position.y = y;

  return cube;
}

function loadColorTexture(path) {
  const texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}



