/* ========================================= */
/*              GLOBE INTERACTIF             */
/* ========================================= */

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.154/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.154/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("globe-container");
if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("images/earth.jpg");

    const globe = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.MeshStandardMaterial({ map: earthTexture })
    );
    scene.add(globe);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    animate();
}
