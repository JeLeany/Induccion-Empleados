import './assets/main.css' // Importación de tus estilos personalizados

// Importar los estilos CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importar el JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createPinia } from 'pinia'
import { createApp } from 'vue' // Asegúrate de importar desde 'vue'
import App from './App.vue'
import router from './router'

// Importar estilos de Swiper
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Importar Swiper y sus módulos
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// Inicializar Swiper
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// Usar la instancia de Swiper más adelante
console.log(swiper) // Útil para depurar o verificar configuración

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
