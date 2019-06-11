import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        name: "主页",
        path: '',
        component: r => require.ensure([], () => r(require('../page/entry')), 'entry')
    },
    {
        name: "资讯中心",
        path: 'new',
        component: r => require.ensure([], () => r(require('../page/news/list')), 'news')
    }, {
        name: "资讯中心选择",
        path: 'newsCheck',
        component: r => require.ensure([], () => r(require('../page/news/check')), 'newsCheck')
    }, {
        name: "资讯中心详情",
        path: 'newsDetail',
        component: r => require.ensure([], () => r(require('../page/news/detail')), 'newsDetail')
    }, {
        name: "账户管理",
        path: 'acManage',
        component: r => require.ensure([], () => r(require('../page/account/manage')), 'acManage')
    }, {
        name: "账户绑定",
        path: 'acBind',
        component: r => require.ensure([], () => r(require('../page/account/bind')), 'acBind')
    }, {
        name: "信息中心",
        path: 'main',
        component: r => require.ensure([], () => r(require('../page/main/index')), 'main')
    }, {
        name: "通讯录",
        path: 'concat',
        component: r => require.ensure([], () => r(require('../page/main/concat')), 'concat')
    }, {
        name: "通讯录列表",
        path: 'classList',
        component: r => require.ensure([], () => r(require('../page/main/classList')), 'classList')
    },
    {
        name: "学校简介",
        path: 'introduce',
        component: r => require.ensure([], () => r(require('../page/student/introduce/index')), 'concat')
    }, {
        name: "教师风采",
        path: 'teacherInfo',
        component: r => require.ensure([], () => r(require('../page/student/teacherInfo/index')), 'teacherInfo')
    }, {
        name: "教师列表",
        path: 'teacherList',
        component: r => require.ensure([], () => r(require('../page/student/teacherInfo/list')), 'teacherList')
    }, {
        name: "教师详情",
        path: 'teacherDetail',
        component: r => require.ensure([], () => r(require('../page/student/teacherInfo/detail')), 'teacherDetail')
    }, {
        name: "费用明细",
        path: 'cost',
        component: r => require.ensure([], () => r(require('../page/student/cost/index')), 'cost')
    }, {
        name: "费用详情",
        path: 'costDetail',
        component: r => require.ensure([], () => r(require('../page/student/cost/detail')), 'costDetail')
    }, {
        name: "在线缴费",
        path: 'costPay',
        component: r => require.ensure([], () => r(require('../page/student/cost/pay')), 'costPay')
    }, {
        name: "缴费记录",
        path: 'payHistory',
        component: r => require.ensure([], () => r(require('../page/student/cost/payHistory')), 'payHistory')
    },
    {
        name: "缴费记录详情",
        path: 'payDetail',
        component: r => require.ensure([], () => r(require('../page/student/cost/payDetail')), 'payDetail')
    },
    {
        name: "课表",
        path: 'timetable',
        component: r => require.ensure([], () => r(require('../page/student/timetable/index')), 'timetable')
    }, {
        name: "课后作业",
        path: 'homework',
        component: r => require.ensure([], () => r(require('../page/student/homework/index')), 'homework')
    },
    {
        name: "课后作业历史",
        path: 'homeworkHistory',
        component: r => require.ensure([], () => r(require('../page/student/homework/history')), 'homeworkHistory')
    },
    {
        name: "课后作业详情",
        path: 'homeworkDetail',
        component: r => require.ensure([], () => r(require('../page/student/homework/detail')), 'homeworkDetail')
    },
    {
        name: "成绩查询",
        path: 'results',
        component: r => require.ensure([], () => r(require('../page/student/results/index')), 'results')
    }, {
        name: "科目查询",
        path: 'resultSub',
        component: r => require.ensure([], () => r(require('../page/student/results/subject')), 'resultSub')
    }, {
        name: "统考查询",
        path: 'resultTotal',
        component: r => require.ensure([], () => r(require('../page/student/results/total')), 'resultTotal')
    }, {
        name: "体质状况",
        path: 'health',
        component: r => require.ensure([], () => r(require('../page/student/health/index')), 'health')
    },
    {
        name: "体测历史",
        path: 'healthList',
        component: r => require.ensure([], () => r(require('../page/student/health/list')), 'healthList')
    },
    {
        name: "账号管理",
        path: 'account',
        component: r => require.ensure([], () => r(require('../page/student/account/index')), 'account')
    },
    {
        name: "账号添加",
        path: 'accountAdd',
        component: r => require.ensure([], () => r(require('../page/student/account/bind')), 'accountAdd')
    },
    {
        name: "考勤查看",
        path: 'attendance',
        component: r => require.ensure([], () => r(require('../page/teacher/attendance/index')), 'attendance')
    },
    {
        name: "考勤筛选",
        path: 'filter',
        component: r => require.ensure([], () => r(require('../page/teacher/attendance/filter')), 'filter')
    },
    {
        name: "成绩查看",
        path: 'tresult',
        component: r => require.ensure([], () => r(require('../page/teacher/tresult/index')), 'tresult')
    },
    {
        name: "成绩详情",
        path: 'trestMore',
        component: r => require.ensure([], () => r(require('../page/teacher/tresult/trestMore')),
            'trestMore')
    }, {
        name: "科目详情",
        path: 'subDetail',
        component: r => require.ensure([], () => r(require('../page/teacher/tresult/subDetail')),
            'subDetail')
    },
    {
        name: "作业通知",
        path: 'twork',
        component: r => require.ensure([], () => r(require('../page/teacher/twork/index')), 'twork')
    },
    {
        name: "老师作业历史",
        path: 'tworkHistory',
        component: r => require.ensure([], () => r(require('../page/teacher/twork/tworkHistory')), 'tworkHistory')
    },
    {
        name: "消息历史",
        path: 'noticeHistory',
        component: r => require.ensure([], () => r(require('../page/teacher/twork/noticeHistory')), 'noticeHistory')
    },
    {
        name: "新增作业",
        path: 'addwork',
        component: r => require.ensure([], () => r(require('../page/teacher/twork/addwork')), 'addwork')
    }, {
        name: "新增通知",
        path: 'addnotice',
        component: r => require.ensure([], () => r(require('../page/teacher/twork/addnotice')), 'addnotice')
    },
    {
        name: "工资明细",
        path: 'salary',
        component: r => require.ensure([], () => r(require('../page/teacher/salary/index')), 'salary')
    }, {
        name: "费用统计",
        path: 'outlay',
        component: r => require.ensure([], () => r(require('../page/teacher/outlay/index')), 'outlay')
    }, {
        name: "教师课表",
        path: 'ttimetable',
        component: r => require.ensure([], () => r(require('../page/teacher/ttimetable/index')), 'ttimetable')
    }











    ]
}]
