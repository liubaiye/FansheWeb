import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/AboutPage/About'
import MainBusinessSection from '@/components/AboutPage/MainBusinessSection'
import NewList from '@/components/AboutPage/NewList'
import Servers from '@/components/AboutPage/Servers'
import Operation from '@/components/AboutPage/Operation'
import NewsDetail from '@/components/AboutPage/NewsDetail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/About',
        name: 'About',
        component: About
    }, {
        path: '/MainBusinessSection',
        name: 'MainBusinessSection',
        component: MainBusinessSection
    }, {
        path: '/NewList',
        name: 'NewList',
        component: NewList
    }, {
        path: '/Servers',
        name: 'Servers',
        component: Servers
    }, {
        path: '/Operation',
        name: 'Operation',
        component: Operation
    }, {
        path: '/NewsDetail',
        name: 'NewsDetail',
        component: NewsDetail
    }]
})