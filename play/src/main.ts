import { createApp } from 'vue'
import { SeamlessScroll } from '@linzhe_tools/seamless-scroll'
import { NumberScroll } from '@linzhe_tools/number-scroll'

import App from './App.vue'

const plugins = [SeamlessScroll, NumberScroll]
const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))
app.mount('#app')
