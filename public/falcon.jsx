import falcon from "./millenium_falcon.glb";

function Falcon() {
  return (
    <div>
      <model-viewer
        src={falcon}
        alt="A 3D model of an astronaut"
        auto-rotate
        camera-controls
      ></model-viewer>
    </div>
  );
}
export default Falcon;
