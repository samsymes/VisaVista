import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), cesium()],
    base: "/",
    assetsInclude: ["**/*.glb"],
  };
  if (command !== "serve") {
    config.base = "/VisaVista/";
  }

  return config;
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import cesium from "vite-plugin-cesium";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), cesium()],
//   base: "/VisaVista/",
//   assetsInclude: ["**/*.glb"],
// });
