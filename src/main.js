// import './assets/main.css'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

// 导入element plus国际化
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg图标
// import 'virtual:svg-icons-register'
// 引入全局样式
import '@/assets/css/common.scss'

import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(ElementPlus, {
//   locale: zhCn,
// })

app.mount('#app')
