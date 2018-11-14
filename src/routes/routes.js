import Vue from 'vue'
import Router from 'vue-router'
import a from '../components/pages/a'
import b from '../components/pages/b'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import Main from '../components/pages/Main'
import PatientList from '../components/pages/PatientList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: 'Login'
            },
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                title: 'Register',
            },
        },
        {
            path: '/patients',
            name: 'Patients',
            component: Main,
            meta: {
                title: 'Diabet track',
            },

        },
        {
            path: '/patient-list',
            name: 'DiabetTrack',
            component: PatientList,
            meta: {
                title: 'Patient list',
            }
        },

        {
            path: '/clinic-info',
            name: 'ClinicInfo',
            component: a,
            meta: {
                title: 'Clinic info',
            },
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log('router params: ', next)
//     next()
// })

router.afterEach((to) => {
    const {title} = to.meta
    document.title = title != null ? title : `Diabetes track`
})

export default router