import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
       plugins: [vue()],
       css: {
              preprocessorOptions: {
                     scss: {
                            additionalData: `
          @import "./src/scss/fontface.scss";
        `
                     }
              }
       },
       resolve: {
              alias: {
                     "@": path.resolve(__dirname, "./src")
              }
       },
       build: {
              rollupOptions: {
                     output: {
                            entryFileNames: "js/[name]-[hash].js",
                            chunkFileNames: "js/[name]-[hash].js",
                            assetFileNames(assetInfo) {
                                   if (assetInfo.name?.endsWith(".css")) {
                                          return "css/[name]-[hash].css";
                                   }
                                   const imgExts = [".png", ".svg", ".jpg", ".gif", ".ico", ".jpeg", ".webp"];
                                   if (imgExts.some((ext) => assetInfo.name?.endsWith(ext))) {
                                          return "imgs/[name]-[hash].[ext]";
                                   }
                                   return "assets/[name]-[hash].[ext]";
                            }
                     }
              }
       },
       // server: {
       //     host: '0.0.0.0',
       // 	port:8080
       // },
       base: "./"
});
