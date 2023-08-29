import * as THREE from 'three';
import './helpers/requestAnimationFrame';
import { randomInRange } from './helpers/randomRange';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// let prevPositionX = 0;
// let prevPositionY = 0;
// const STEP = 0.01;
function animate() {
	requestAnimationFrame( animate );
  // const positionY = cube.position.y;
  // const positionX = cube.position.x;

  // const getDirection = (prev, current) => {
  //   if (prev > current) {
  //     return current < -3 ? STEP : -STEP;
  //   }

  //   if (prev < current) {
  //     return current > 3 ? -STEP : STEP+0.02;
  //   }

  //   return STEP
  // }

  cube.rotation.x -= 0.01;
  cube.rotation.y -= 0.01;
  // cube.position.x += getDirection(prevPositionX, positionX);
  // cube.position.y += getDirection(prevPositionY, positionY);
  // prevPositionX = positionX;
  // prevPositionY = positionY;
  // console.log('cube position', cube.position.x, cube.position.y);
	renderer.render( scene, camera );
}
// animate();






if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'warning' ).appendChild( warning );

}
