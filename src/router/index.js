import Vue from 'vue'
import Router from 'vue-router'
// Home component
import Home from '@/components/home/Home'

// Reusable Global components
import Header from '@/components/reusable/Header'
import Footer from '@/components/reusable/Footer'

// User components
import Register from '@/components/user/Register'
import Login from '@/components/user/Login'

// Profile components
import CreateProfile from '@/components/profile/CreateProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        footer: Footer
      }
    },
    // {
    //   path: '*',
    //   name: 'Home',
    //   components: {
    //     default: Home,
    //     footer: Footer,
    //     header: Header
    //   }
    // },
    // User components
    {
      path: '/register',
      name: 'Register',
      components: {
        default: Register,
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        default: Login,
        header: Header,
        footer: Footer
      }
    },
    // Profile components
    {
      path: '/profile/create',
      name: 'CreateProfile',
      components: {
        default: CreateProfile,
        header: Header,
        footer: Footer
      }
    }
  ]
})
