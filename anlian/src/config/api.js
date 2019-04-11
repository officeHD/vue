import zAJAX from './ajax';


// 获取价值保费
export const getPremium = (state, cb, insureAge) => {
    let data = {
        sex: state.insurant.insuSex,
        age: insureAge || state.insurant.insuAge,
        tbsex: state.holder.sex,
        tbage: state.holder.age || 19,
        payendyear: state.insurData.payendyear,
        insuYear: 5,
        mult: 1,
        baseMoney: 2000000,
        varietyCode: state.insurData.code,
        amnt: 2000000,
        province: state.insurant.insuProvince,
        city: state.insurant.insuCity,
        insuranceCoverage: 10000,
        socialSecFlag: state.insurant.insuSocialSecFlag
    }

    zAJAX(`${ctx}/app/common/get_rate`, data, cb)
}

//获取员工信息
export const getStaff = (workNum, cb) => {
    zAJAX(`${ctx}/lifeInsuranceApi/get_staff`, {
        workNum: workNum
    }, cb)
}
//获取用户信息
export const getPersonInfo = (workNum, key, cb) => {
    zAJAX(`${ctx}/mobile/lifeInsurance/anbang/get_customer`, {
        workNum: workNum,
        key: key
    }, cb)
}

//投保
export const insertOrder = (state, cb) => {
    //被保人是投保人本人
    let payIntv = state.varietyData.payMent[0] === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.varietyData.payMent[0] === "趸交" ? "" : state.renewInfo, // 续期账户信息
        payPeriod = state.varietyData.payMent[0] === "趸交" ? "1000" : state.varietyData.payMent[0], // 缴费年期
        payPeriodFlag = "Y", // 交费年期标志 Y代表年,A代表岁
        bnfsData = state.bnfsType[0] === "2" ? state.bnfsData : [];


    let data = {
        "orderId": state.orderData.orderId,
        "workNum": state.staffmes.workNum,
        "count": 1, // 份数
        "orderNo": state.orderData.orderNo, // 订单编号
        "proposeDate": "",
        "sumFirstPrem": state.varietyData.fee, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.appntData.permanentAddress,
            "birthDate": state.appntData.birthDate,
            "phone": state.appntData.phone,
            "validDateEnd": state.appntData.validDateEnd,
            "idNum": state.appntData.idNum,
            'age': state.holderAge,
            "height": state.appntData.height,
            "weight": state.appntData.weight,
            "idType": state.appntData.idType,
            "name": state.appntData.name,
            "sex": state.appntData.sex,
            "email": state.appntData.email,
            "nationality": "CHN",
            "province": state.appntData.province,
            "city": state.appntData.city,
            "county": state.appntData.county,
            "zipCode": state.appntData.zipCode,
            "inCome": "",
            "occupationCode": state.occupation.holderNo,
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insuredsData.insuPermanentAddress,
            "insuBirthDate": state.insuredsData.insuBirthDate,
            "insuPhone": state.insuredsData.insuPhone,
            "insuValidDateEnd": state.insuredsData.insuValidDateEnd,
            "insuIdNum": state.insuredsData.insuIdNum,
            "insuHeight": state.insuredsData.insuHeight,
            "insuWeight": state.insuredsData.insuWeight,
            'insuAge': state.insurantAge,
            "insuIdType": state.insuredsData.insuIdType,
            "insuName": state.insuredsData.insuName,
            "insuSex": state.insuredsData.insuSex,
            "insuImparts": [],
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.occupation.no,
            "insuEmail": state.insuredsData.insuEmail,
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insuredsData.insuProvince,
            "insuCity": state.insuredsData.insuCity,
            "insuCounty": state.insuredsData.insuCounty,
            "insuZipCode": state.insuredsData.insuZipCode,
            "insuInCome": "",
            "insuSocialSecFlag": state.insuredsData.insuSocialSecFlag,
            "socialInsuProvince": state.insuredsData.socialInsuProvince,
            "socialInsuCity": state.insuredsData.socialInsuCity,
            "smokeFlag": "",
            "healthNoticeFlag": "Y",
            "existOtherAmnt": ""
        }],
        "renewInfo": renewInfo,
        "risks": [{
            "amnt": 2000000,
            "insuYear": "5",
            "drawAge": '', //领取年龄
            "insuYearFlag": "Y",
            "mult": 1,
            "noClaim": 10000,
            "prem": state.varietyData.fee,
            "riskCode": "110029",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": state.insuredsData.insuSocialSecFlag // 是否参加社保Y参加N不参加获取
        }],
        "bnfs": bnfsData
    }
    zAJAX(`${ctx}/app/common/insert_order`, {
        data: JSON.stringify(data),
        requestType: 2,
        workNum: state.staffmes.workNum
    }, cb)
}

//核保
export const underwriting = (state, cb) => {
    //被保人是投保人本人
    let payIntv = state.varietyData.payMent[0] === "趸交" ? "0" : "12", // 缴费类型
        renewInfo = state.varietyData.payMent[0] === "趸交" ? "" : state.renewInfo, // 续期账户信息
        payPeriod = state.varietyData.payMent[0] === "趸交" ? "1000" : state.varietyData.payMent[0], // 缴费年期
        bnfsData = state.bnfsType[0] === "2" ? state.bnfsData : [];
    let data = {
        "orderId": state.orderData.orderId,
        "workNum": state.staffmes.workNum,
        "count": 1, // 份数
        "orderNo": state.orderData.orderNo, // 订单编号
        "proposeDate": "",
        "sumFirstPrem": state.varietyData.fee, // 总保费
        "valDate": "",
        "appnt": {
            "permanentAddress": state.appntData.permanentAddress,
            "birthDate": state.appntData.birthDate,
            "phone": state.appntData.phone,
            "validDateEnd": state.appntData.validDateEnd,
            "idNum": state.appntData.idNum,
            'age': state.holderAge,
            "idType": state.appntData.idType,
            "height": state.appntData.height,
            "weight": state.appntData.weight,
            "occupationCode": state.occupation.holderNo,
            "name": state.appntData.name,
            "sex": state.appntData.sex,
            "email": state.appntData.email,
            "nationality": "CHN",
            "province": state.appntData.province,
            "city": state.appntData.city,
            "county": state.appntData.county,
            "zipCode": state.appntData.zipCode,
            "inCome": "",
            "imparts": [],
            "socialSecFlag": "",
            "socialAppProvince": "",
            "socialAppCity": "",
            "smokeFlag": "",
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
        },
        "insureds": [{
            "insuPermanentAddress": state.insuredsData.insuPermanentAddress,
            "insuBirthDate": state.insuredsData.insuBirthDate,
            "insuPhone": state.insuredsData.insuPhone,
            "insuValidDateEnd": state.insuredsData.insuValidDateEnd,
            "insuIdNum": state.insuredsData.insuIdNum,
            'insuAge': state.insurantAge,
            "insuIdType": state.insuredsData.insuIdType,
            "insuName": state.insuredsData.insuName,
            "insuHeight": state.insuredsData.insuHeight,
            "insuWeight": state.insuredsData.insuWeight,
            "insuSex": state.insuredsData.insuSex,
            "insuImparts": [],
            "isSatutoryBeneficiary": "0",
            "insuOccupationCode": state.occupation.no,
            "insuEmail": state.insuredsData.insuEmail,
            "relationsWithCustomer": state.insuredsData.relationsWithCustomer,
            "insuNationality": "CHN",
            "insuProvince": state.insuredsData.insuProvince,
            "insuCity": state.insuredsData.insuCity,
            "insuCounty": state.insuredsData.insuCounty,
            "insuZipCode": state.insuredsData.insuZipCode,
            "insuInCome": "",
            "insuSocialSecFlag": state.insuredsData.insuSocialSecFlag,
            "socialInsuProvince": state.insuredsData.socialInsuProvince,
            "socialInsuCity": state.insuredsData.socialInsuCity,
            "smokeFlag": "",
            "healthNoticeFlag": "Y",
            "existOtherAmnt": ""
        }],
        "renewInfo": renewInfo,
        "risks": [{
            "amnt": 2000000,
            "insuYear": "5",
            "drawAge": '', //领取年龄
            "insuYearFlag": "Y",
            "noClaim": 10000,
            "mult": 1,
            "prem": state.varietyData.fee,
            "riskCode": "110029",
            "payIntv": payIntv, // 缴费类型
            "payPeriod": payPeriod, // 缴费年期
            "payPeriodFlag": "Y", // 交费年期标志 Y代表年,A代表岁
            "socialSecFlag": state.insuredsData.insuSocialSecFlag // 是否参加社保Y参加N不参加获取
        }],
        "bnfs": bnfsData
    }
    zAJAX(`${ctx}/app/common/underwriting`, {
        data: JSON.stringify(data),
        requestType: 2
    }, cb)
}


//如果是编辑页面，初始化编辑数据
export const getEditDate = (state, id, cb) => {
    zAJAX(`${ctx}/app/common/detail`, { id: id, requestType: 2 }, cb)
}
