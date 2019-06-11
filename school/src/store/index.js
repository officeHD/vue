import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
    userType: "0",//老师--1  学生--2 游客---0
    openId:"",
    teacher: {},
    studend: {},
    common: {
        newsTypeArr: [
            { id: "1", name: "小学教育", img: "1",  ischeck: "" },
            { id: "2", name: "小学教育", img: "1",  ischeck: "" },
            { id: "3", name: "小学教育", img: "1",  ischeck: "" },
            { id: "4", name: "小学教育", img: "1",  ischeck: "" },
            { id: "5", name: "小学教育", img: "1",  ischeck: "" },
            { id: "6", name: "小学教育", img: "1",  ischeck: "" },
            { id: "7", name: "小学教育", img: "1",  ischeck: "" },
            { id: "8", name: "小学教育", img: "1",  ischeck: "" },
            { id: "9", name: "小学教育", img: "1",  ischeck: "" },
            { id: "10", name: "小学教育", img: "1",  ischeck: "" },
            { id: "11", name: "小学教育", img: "1",  ischeck: "" },
            { id: "12", name: "小学教育", img: "1",  ischeck: "" },
        ],
        newsList:[
            { id: "1", name: "小学教育", img: "1",  ischeck: "" },
            { id: "2", name: "小学教育", img: "1",  ischeck: "" },
            { id: "3", name: "小学教育", img: "1",  ischeck: "" },
            { id: "4", name: "小学教育", img: "1",  ischeck: "" }
        ]
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})