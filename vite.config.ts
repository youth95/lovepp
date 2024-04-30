import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: '#000000',
        name: '爱萍萍系统2',
        start_url: '/',
        display: 'fullscreen',
        icons: [
          {
            sizes: '114x114',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-114x114-09ce42d3ca4b.png'
          },
          {
            sizes: '120x120',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-120x120-92bd46d04241.png'
          },
          {
            sizes: '144x144',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png'
          },
          {
            sizes: '152x152',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-152x152-5f777cdc30ae.png'
          },
          {
            sizes: '180x180',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png'
          },
          {
            sizes: '57x57',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-57x57-22f09f5b3a64.png'
          },
          {
            sizes: '60x60',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-60x60-19037ac897bf.png'
          },
          {
            sizes: '72x72',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-72x72-e090c8a282d0.png'
          },
          {
            sizes: '76x76',
            src: 'https://github.githubassets.com/assets/apple-touch-icon-76x76-a4523d80afb4.png'
          },
          {
            src: 'https://github.githubassets.com/assets/app-icon-192-bcc967ab9829.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: 'https://github.githubassets.com/assets/app-icon-512-7f9c4ff2e960.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ]
      }
    })
  ]
})