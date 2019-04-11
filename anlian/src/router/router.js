import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/notice',
        component: r => require.ensure([], () => r(require('../page/notice')), 'notice')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    },{
        path:'/poster',
        component: r => require.ensure([],() => r(require('../page/poster')),'poster')
    },{
        path:'/insured',
        component: r => require.ensure([],() => r(require('../page/insured')),'insured') 
    }]
}]