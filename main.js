import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// let objLoader;
// {
//   objLoader = new OBJLoader();
//   objLoader.load('resources/models/mustang/mustang.obj', (root) => {
//     scene.add(root);
//   });
// }
{
  const objLoader = new OBJLoader();
  const mtlLoader = new MTLLoader();
  mtlLoader.load('resources/models/book/book.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('resources/models/book/book.obj', (root) => {
      scene.add(root);
    });
  });
}

let renderer, cube, scene, camera, cubes, geometry, loader, controls;

function main() {
  const canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
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
  const texture = loader.load('resources/images/checker.png');
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

  {
    const cubeSize = 4;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC'});
    const mesh = new THREE.Mesh(cubeGeo, cubeMat);
    mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
    scene.add(mesh);
  }
  {
    const sphereRadius = 3;
    const sphereWidthDivisions = 32;
    const sphereHeightDivisions = 16;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
    const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
    const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
    scene.add(mesh);
  }

  // // const color = 0xFFFFFF;
  // const skyColor = 0xB1E1FF;  // light blue
  // const groundColor = 0xB97A20;  // brownish orange
  // const intensity = 1;
  // // const light = new THREE.AmbientLight(color, intensity);
  // const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  // scene.add(light);

  // Directional Light
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);
  scene.add(light);
  scene.add(light.target);

  const helper = new THREE.DirectionalLightHelper(light);
  scene.add(helper);




  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  loader = new THREE.TextureLoader();
  // const texture = loader.load( 'resources/images/wall.jpg' );
  // texture.colorSpace = THREE.SRGBColorSpace;

  // const material1 = new THREE.MeshBasicMaterial({map: texture});
  // const material2 = new THREE.MeshPhongMaterial({color: 0x8844aa});
  // const material3 = new THREE.MeshPhongMaterial({color: 0xaa8844});

  const materials = [
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-1.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-2.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-3.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-4.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-5.jpeg') }),
    new THREE.MeshBasicMaterial({ map: loadColorTexture('resources/images/flower-6.jpeg') }),
  ];

  cubes = [];

  // for (let i = 0; i < materials.length; i++) {
  //   let x, y;
  //   if (i < materials.length / 2) {
  //     y = 0;
  //   }
  //   else{
  //     y = 1;
  //   }
  //   // we want cubes 0, 1, 2 to be on y = _ and x = _
  //   cubes.push(makeInstance(geometry, materials[i],  i-1, y));
  // }
  for (let i = 0; i < materials.length / 2; i++) {
    let y = -1
    cubes.push(makeInstance(geometry, materials[i], i - 1, y));
  }
  for (let i = materials.length / 2; i < materials.length; i++) {
    let y = 2;
    cubes.push(makeInstance(geometry, materials[i], i - (materials.length / 2) - 1, y));
  }


  // cubes = [
  //   makeInstance(geometry, material1,  0),
  //   makeInstance(geometry, material2, -2),
  //   makeInstance(geometry, material3,  2),
  // ];

  // scene.add(cubes);


  // scene.add(cube);
  // scene.add(cubes);

  renderer.render(scene, camera);
}


function render(time) {
  controls.update();
  time *= 0.001;  // convert time to seconds

  // cube.rotation.x = time;
  // cube.rotation.y = time;

  cubes.forEach((cube, ndx) => {
    const speed = 1 + ndx * .1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });

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
  // const material = new THREE.MeshPhongMaterial({color});

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



