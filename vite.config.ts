import { defineConfig, loadEnv, type ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@admin': path.resolve(__dirname, './src/admin/src'),
        '@client': path.resolve(__dirname, './src/client/src'),
        '@public': path.resolve(__dirname, './src/public/src'),
        '@shared': path.resolve(__dirname, './src/shared/src'),
      },
    },
    server: {
      host: true,
      allowedHosts: ['host.docker.internal'],
      port: Number(env.VITE_PORT) || 5173,
    }
  })
}