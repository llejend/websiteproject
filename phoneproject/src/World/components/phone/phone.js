import { setupModel } from './setupModel.js';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

async function loadPhone() {
  const loader = new GLTFLoader();

  const [phoneData] = await Promise.all([
    loader.loadAsync('/assets/models/scene.gltf'),
  ]);


  const phone = setupModel(phoneData);
  phone.position.set(0, 0, 2.5);
  phone.scale.set(10, 10, 10);


  return {
    phone,
  };
}

export { loadPhone };
