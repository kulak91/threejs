const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a cube for the arena floor with a better material
const arenaSize = 10;
const arenaGeometry = new THREE.BoxGeometry(arenaSize, 0.1, arenaSize);
const arenaMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
const arena = new THREE.Mesh(arenaGeometry, arenaMaterial);
scene.add(arena);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Set renderer clear color to light gray
renderer.setClearColor(0xeeeeee);

const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the arena for a simple animation
  arena.rotation.x += 0.005;
  arena.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();
