import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'
import App from './App.vue'

library.add(fas)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
