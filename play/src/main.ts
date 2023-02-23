import { createApp } from 'vue'
import { SeamlessScroll } from '@linzhe_tools/seamless-scroll'

import App from './App.vue'

const plugins = [SeamlessScroll]
const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))
app.mount('#app')
