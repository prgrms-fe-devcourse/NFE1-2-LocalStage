import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        '/api': {
          target: 'http://www.kopis.or.kr/openApi/restful',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    define: {
      'import.meta.env.VITE_KAKAO_MAP_API_KEY': JSON.stringify(env.VITE_KAKAO_MAP_API_KEY),
    },
  };
});
