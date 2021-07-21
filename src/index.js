import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
} from 'three';

const { innerHeight, innerWidth } = window;

const scene = new Scene();
const camera = new PerspectiveCamera(
  75, innerWidth / innerHeight, 0.1, 1000,
);

const renderer = new WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// create a sphere
const sphere = new Mesh(
  new SphereGeometry(5, 50, 50), // Radius, Segments
  new MeshBasicMaterial({
    color: 0xFF0000, // RGB
  }),
);

scene.add(sphere);

function animate() {
  camera.position.z += 0.1;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
