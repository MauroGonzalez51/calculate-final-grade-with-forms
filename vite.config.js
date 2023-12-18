import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": "/src/components",
            "@components/ui": "/src/components/ui",
            "@hooks": "/src/hooks",
            "@context": "/src/context",
            "@utils": "/src/utils",
        },
    },
});