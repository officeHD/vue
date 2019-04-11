import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	insurant: {
        relationsWithCustomer: "04", //与投保人关系
        insuName: '', //姓名
        insuSex: 0, //性别
        insuHeight: '', //身高
        insuWeight: '', //体重
        insuBirthDate: '', //出生日期
        insuPhone: '', //手机号
        insuValidDate: '', //证件有效起期
        insuValidDateEnd: '', //证件有效期止期
        insuIdNum: '', //证件号码
        insuAge: '', //年龄
        insuMaritalStatus: '', //婚姻状况
        insuTelephone: '', //固定电话
        insuIdType: '0', //证件类型
        insuIdFrontImg: '', //证件正面
        insuIdBackImg: '', //证件反
        insuEmail: '', //邮箱
        insuProvince: '', //省编号
        insuCity: '', //市编号
        insuCounty: '', //县编号
        insuProvinceName: '', //省
        insuCityName: '', //市
        insuCountyName: '', //县
        insuPermanentAddress: '', //详细地址
        isSatutoryBeneficiary: '',
        insuOccupationCode: '', //职业编号
        insuImparts: [], //被保人告知
        insuNationality: 'CHN', //国家
        insuZipCode: '', //邮编
        insuSocialSecFlag: "N", //是否有社保
        socialInsuProvince: "", //社保省份
        socialInsuCity: "", //社保市
        smokeFlag: "1", //被保人吸烟标志
        insuInCome: "", //被保人年收入
        existOtherAmnt: "" //被保险人在其他公司承保的同类产品保额（现就人身险）
    },
    holder: {
        name: "", //姓名
        sex: 1, //性别
        height: '', //身高
        weight: '', //体重
        idType: "0", //证件类型
        idNum: "", //证件号码
        nationality: "CHN", //国家
        maritalStatus: '', //婚姻状况
        birthDate: "", //生日
        validDate: '', //证件有效起期
        permanentAddress: "", //详细地址
        zipCode: "", //邮编
        telephone: '', //固话
        phone: "", //手机号
        email: "", //邮箱
        relationsWithCustomer: '', //与投保人关系
        idFrontImg: '', //证件照正面
        idBackImg: '', // 证件照反面
        validDateEnd: "", //证件有效止期
        province: "", //省编号
        city: "", //所在城市
        county: "", //县编号
        provinceName: "", //省
        cityName: "", //市
        countyName: "", //县
        occupationCode: '', //投保人职业
        age: "19", //年龄
        inCome: '', //年收入
        socialSecFlag: '', //投保人是否有社保标志 0：非社保1：参加社保
        socialAppProvince: '', //投保人社保所在省编码
        socialAppCity: '', //投保人社保所在市编码
        smokeFlag: '', //投保人吸烟标记0：不吸烟1：吸烟
        imparts: [] //健康告知
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})