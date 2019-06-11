import Vue from 'vue'
import * as api from '@/config/api';
import * as utils from '@/config/utils';

export default {
    initData({
        dispatch,
        commit
    }) {
        let userType = utils.getDataFromUrl("type")||sessionStorage.userType;
        if (userType) {
            commit('ININ_USER_TYPE', userType);
        }
        let openId = utils.getDataFromUrl("openId")||sessionStorage.openId;
        if (openId) {
            commit('ININ_OPENID', openId);
        }
         
    },
    changeNewsType({ commit }, obj) {
        commit('CHANGE_NEWS_TYPE', obj);
    },
    changeUserType({ commit }, userType) {
        commit('ININ_USER_TYPE', userType);
    }


}
