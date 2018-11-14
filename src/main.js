import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes.js'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false

Vue.use(HighchartsVue)

new Vue({
    useEslint: false,
    router,
    render: h => h(App),
}).$mount('#app')
