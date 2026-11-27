import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export type GlbAssetKey =
  | 'supercar'
  | 'superbike'
  | 'moto_street'
  | 'pickup_green'
  | 'pickup_red'
  | 'pickup_yellow'
  | 'pickup_purple'
  | 'delivery_van'
  | 'k_sedan'
  | 'k_sedan_sports'
  | 'k_hatchback'
  | 'k_suv'
  | 'k_suv_luxury'
  | 'k_taxi'
  | 'k_police'
  | 'k_ambulance'
  | 'k_van'
  | 'k_delivery'
  | 'k_delivery_flat'
  | 'k_truck'
  | 'k_truck_flat'
  | 'k_garbage_truck'
  | 'k_tractor'
  | 'k_tractor_shovel'
  | 'k_race'
  | 'k_future_car'
  | 'k_tree_large'
  | 'k_tree_small'
  | 'tree_real';

interface GlbSpec {
  url: string;
  targetLength: number;
  yawOffset: number;
  autoAlignLongZ: boolean;
  isVertical?: boolean;
}

const GLB_SPECS: Record<GlbAssetKey, GlbSpec> = {
  supercar: { url: './models/supercar_ferrari.glb', targetLength: 4.6, yawOffset: 0, autoAlignLongZ: true },
  superbike: { url: './models/moto_superbike.glb', targetLength: 2.25, yawOffset: Math.PI / 2, autoAlignLongZ: false },
  moto_street: { url: './models/moto_street.glb', targetLength: 2.15, yawOffset: Math.PI, autoAlignLongZ: false },
  pickup_green: { url: './models/k_pickup_green.glb', targetLength: 4.35, yawOffset: Math.PI, autoAlignLongZ: false },
  pickup_red: { url: './models/k_pickup_red.glb', targetLength: 4.3, yawOffset: Math.PI, autoAlignLongZ: false },
  pickup_yellow: { url: './models/k_pickup_yellow.glb', targetLength: 4.35, yawOffset: Math.PI, autoAlignLongZ: false },
  pickup_purple: { url: './models/k_pickup_purple.glb', targetLength: 4.2, yawOffset: Math.PI, autoAlignLongZ: false },
  delivery_van: { url: './models/van_milk_truck.glb', targetLength: 5.1, yawOffset: Math.PI / 2, autoAlignLongZ: false },
  // Official Kenney CC0 Car Kit real 3D GLBs (all face +Z -> PI aligns to -Z!)
  k_sedan: { url: './models/k_sedan.glb', targetLength: 4.3, yawOffset: Math.PI, autoAlignLongZ: false },
  k_sedan_sports: { url: './models/k_sedan_sports.glb', targetLength: 4.4, yawOffset: Math.PI, autoAlignLongZ: false },
  k_hatchback: { url: './models/k_hatchback.glb', targetLength: 3.9, yawOffset: Math.PI, autoAlignLongZ: false },
  k_suv: { url: './models/k_suv.glb', targetLength: 4.6, yawOffset: Math.PI, autoAlignLongZ: false },
  k_suv_luxury: { url: './models/k_suv_luxury.glb', targetLength: 4.85, yawOffset: Math.PI, autoAlignLongZ: false },
  k_taxi: { url: './models/k_taxi.glb', targetLength: 4.35, yawOffset: Math.PI, autoAlignLongZ: false },
  k_police: { url: './models/k_police.glb', targetLength: 4.45, yawOffset: Math.PI, autoAlignLongZ: false },
  k_ambulance: { url: './models/k_ambulance.glb', targetLength: 5.2, yawOffset: Math.PI, autoAlignLongZ: false },
  k_van: { url: './models/k_van.glb', targetLength: 4.8, yawOffset: Math.PI, autoAlignLongZ: false },
  k_delivery: { url: './models/k_delivery.glb', targetLength: 5.4, yawOffset: Math.PI, autoAlignLongZ: false },
  k_delivery_flat: { url: './models/k_delivery_flat.glb', targetLength: 5.1, yawOffset: Math.PI, autoAlignLongZ: false },
  k_truck: { url: './models/k_truck.glb', targetLength: 7.4, yawOffset: Math.PI, autoAlignLongZ: false },
  k_truck_flat: { url: './models/k_truck_flat.glb', targetLength: 7.2, yawOffset: Math.PI, autoAlignLongZ: false },
  k_garbage_truck: { url: './models/k_garbage_truck.glb', targetLength: 7.4, yawOffset: Math.PI, autoAlignLongZ: false },
  k_tractor: { url: './models/k_tractor.glb', targetLength: 4.1, yawOffset: Math.PI, autoAlignLongZ: false },
  k_tractor_shovel: { url: './models/k_tractor_shovel.glb', targetLength: 4.5, yawOffset: Math.PI, autoAlignLongZ: false },
  k_race: { url: './models/k_race.glb', targetLength: 4.55, yawOffset: Math.PI, autoAlignLongZ: false },
  k_future_car: { url: './models/k_future_car.glb', targetLength: 4.7, yawOffset: Math.PI, autoAlignLongZ: false },
  k_tree_large: { url: './models/k_tree_large.glb', targetLength: 6.2, yawOffset: 0, autoAlignLongZ: false, isVertical: true },
  k_tree_small: { url: './models/k_tree_small.glb', targetLength: 4.5, yawOffset: 0, autoAlignLongZ: false, isVertical: true },
  tree_real: { url: './models/tree_realistic.glb', targetLength: 7.0, yawOffset: 0, autoAlignLongZ: false, isVertical: true }
};

export class GlbAssetBank {
  private loader: GLTFLoader;
  private draco: DRACOLoader;
  private cache = new Map<GlbAssetKey, THREE.Group>();
  private inflight = new Map<GlbAssetKey, Promise<void>>();
  private bgStarted = false;

  constructor() {
    this.draco = new DRACOLoader();
    this.draco.setDecoderPath('./draco/');
    this.loader = new GLTFLoader();
    this.loader.setDRACOLoader(this.draco);
  }

  public loadKey(key: GlbAssetKey, onLoaded?: (key: GlbAssetKey) => void): Promise<void> {
    if (this.cache.has(key)) {
      onLoaded?.(key);
      return Promise.resolve();
    }
    const existing = this.inflight.get(key);
    if (existing) return existing;

    const spec = GLB_SPECS[key];
    const p = this.loader
      .loadAsync(spec.url)
      .then((gltf) => {
        const normalized = this.normalizeModel(gltf.scene, spec);
        this.cache.set(key, normalized);
        onLoaded?.(key);
      })
      .catch(() => {})
      .finally(() => {
        this.inflight.delete(key);
      });
    this.inflight.set(key, p);
    return p;
  }

  /**
   * Loads core real 3D GLB vehicles & organic trees rapidly in small parallel batches of 3
   * so traffic & scenery immediately look 100% real 3D without freezing mobile browsers!
   */
  public startBatchedLoad(onLoaded?: (key: GlbAssetKey) => void) {
    if (this.bgStarted) return;
    this.bgStarted = true;
    const priorityOrder: GlbAssetKey[] = [
      // Batch 1: Trees + most common Dhaka cars/bikes/tractor!
      'tree_real',
      'k_sedan',
      'k_tractor',
      'moto_street',
      'k_suv',
      'k_van',
      'k_taxi',
      'k_hatchback',
      'k_truck',
      'k_delivery',
      'k_police',
      'k_ambulance',
      'k_suv_luxury',
      'k_sedan_sports',
      'k_garbage_truck',
      'k_tractor_shovel',
      'k_future_car',
      'k_truck_flat',
      'k_delivery_flat',
      'k_race',
      'k_tree_large',
      'pickup_green',
      'pickup_red',
      'pickup_yellow',
      'pickup_purple',
      'delivery_van',
      // Heavy hero Draco GLBs last (or instantly on demand when selected!)
      'superbike',
      'supercar'
    ];

    let idx = 0;
    const pump = () => {
      if (idx >= priorityOrder.length) return;
      const batch = priorityOrder.slice(idx, idx + 3);
      idx += 3;
      Promise.all(batch.map((k) => this.loadKey(k, onLoaded))).finally(() => {
        window.setTimeout(pump, 160);
      });
    };
    window.setTimeout(pump, 120);
  }

  private normalizeModel(raw: THREE.Group, spec: GlbSpec): THREE.Group {
    const wrapper = new THREE.Group();
    const inner = new THREE.Group();
    inner.add(raw);

    inner.updateMatrixWorld(true);
    let box = new THREE.Box3().setFromObject(inner);
    let size = box.getSize(new THREE.Vector3());

    if (spec.autoAlignLongZ && size.x > size.z * 1.15) {
      inner.rotation.y = Math.PI / 2;
    } else if (spec.yawOffset !== 0) {
      inner.rotation.y = spec.yawOffset;
    }

    inner.updateMatrixWorld(true);
    box = new THREE.Box3().setFromObject(inner);
    size = box.getSize(new THREE.Vector3());

    const measured = spec.isVertical ? Math.max(size.y, 0.01) : Math.max(size.z, size.x, 0.01);
    const scale = spec.targetLength / measured;
    inner.scale.setScalar(scale);

    inner.updateMatrixWorld(true);
    box = new THREE.Box3().setFromObject(inner);
    const center = box.getCenter(new THREE.Vector3());

    inner.position.set(-center.x, -box.min.y, -center.z);
    wrapper.add(inner);

    wrapper.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const m of mats) {
          if (m && 'envMapIntensity' in m) {
            (m as THREE.MeshStandardMaterial).envMapIntensity = 1.4;
          }
        }
      }
    });

    return wrapper;
  }

  public has(key: GlbAssetKey): boolean {
    return this.cache.has(key);
  }

  public clone(key: GlbAssetKey, customizer?: (root: THREE.Group) => void): THREE.Group | null {
    const base = this.cache.get(key);
    if (!base) return null;
    const cloned = base.clone(true);
    if (customizer) {
      cloned.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (Array.isArray(mesh.material)) {
            mesh.material = mesh.material.map((m) => m.clone());
          } else if (mesh.material) {
            mesh.material = mesh.material.clone();
          }
        }
      });
      customizer(cloned);
    }
    return cloned;
  }

  public dispose() {
    this.draco.dispose();
  }
}
