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
addModel(
  'resources/models/book/book.obj',
  'resources/models/book/book.mtl',
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0],
);

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
  const aspect = 1;  // the canvas default
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



