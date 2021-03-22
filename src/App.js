import { useEffect } from 'react'
import { WebCanvas, Engine, WebGLRenderer, Camera, Vector4 } from 'oasis-engine'
import './App.css'

function App() {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const webCanvas = new WebCanvas(canvas)

    let engine = new Engine(webCanvas, new WebGLRenderer())

    const scene = engine.sceneManager.activeScene
    const rootEntity = scene.createRootEntity('root')

    const cameraNode = rootEntity.createChild('myCamera')
    const camera = cameraNode.addComponent(Camera)
    camera.backgroundColor = new Vector4(1, 1, 1, 0)

    engine.run()
  }, [])

  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: 'gray' }}>
      <canvas
        id='canvas'
        width='500'
        height='500'
        style={{ width: '500px', height: '500px' }}
      ></canvas>
    </div>
  )
}

export default App
