import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { saveAs } from "file-saver";

const downloadModel = (scene) => {
  const exporter = new GLTFExporter();
  exporter.parse(
    scene,
    function (gltfJson) {
      console.log(gltfJson);
      const jsonString = JSON.stringify(gltfJson);
      console.log(jsonString);

      // The following doesn't seem to work due to iframe sandboxing.
      // But please save the gltf json from the Console to obtain the file.
      const blob = new Blob([jsonString], { type: "application/json" });
      saveAs(blob, "contrib_model.glb");
      console.log("Download requested");
    },
    { binary: true }
  );
};

export default downloadModel;
