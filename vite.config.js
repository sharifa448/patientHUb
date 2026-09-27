import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // اضافه کردن این خط

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // اضافه کردن این خط
  ],
})
