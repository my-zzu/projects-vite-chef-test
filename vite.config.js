import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                home: resolve(__dirname, "src/page/home/index.html"),
                about: resolve(__dirname, "src/page/about/index.html"),
                contact: resolve(__dirname, "src/page/contact_1/index.html"),
            },
        },
    },
});
