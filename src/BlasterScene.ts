import * as THREE from 'three'

export default class BlasterScene extends THREE.Scene
{
  initialize()
  {
    const geometory = new THREE.BoxGeometry()
    const material = new THREE.MeshPhongMaterial({ color: 0xFFAD00})

    const cube = new THREE.Mesh(geometory, material)
    cube.position.z = -5
    cube.position.y = -1
    
    this.add(cube)

    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    light.position.set(0, 4, 2)

    this.add(light)
  }

  private async createTarget(mtl: MTLLoader.MaterialCreator)
  {
    this.objLoader.setMaterials(mtl)

    const modelRoot = await this.objLoader.loadAsync('assets/targetA.obj')

    modelRoot.rotateY(Math.PI * 0.5)

    return modelRoot
  }

  update()
  {
    // update
  }
}