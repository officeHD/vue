import Vue from 'vue'


//校验数据有效性
export const checkData = (str, text) => {
  // var modal = weex.requireModule('modal');
  if (text === '' || !text) {
    //非空验证
    Vue.$vux.toast.text(`${str} 不得为空`, "middle")
    return false
  } else {
    //格式验证
    let reg;
    switch (true) {
      case str.indexOf('姓名') >= 0: //indexOf()截取字符串函数，这里用于判断是否页面上有这一项
      case str.indexOf('持卡人') >= 0:
        reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,15}$/;
        break;
      case str.indexOf('证件号') >= 0:
      case str.indexOf('身份证') >= 0:
        reg =
          /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;
        break;
      case str.indexOf('证件有效期') >= 0:
      case str.indexOf('日期') >= 0:
        reg = /^[1-9]\d{3}-[0-1]\d-[0-3]\d$/;
        break;
      case str.indexOf('电话') >= 0:
      case str.indexOf('手机') >= 0:
        reg = /^1\d{10}$/;
        break;
      case str.indexOf('邮箱') >= 0:
        reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        break;
      case str.indexOf('邮政编码') >= 0:
        reg = /^[0-9]{6}$/;
        break;
      default:
        reg = /[\s\S]*/;
        break
    }
    if (!reg.test(text)) {
      Vue.$vux.toast.text(`${str} 格式不正确！`, "middle")


      return false;
    }
    return true;
  }
}
//身份证校验
export const idNumValid = (code, type) => {
  if (type === '01') {
    //非空验证


    var city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外 "
    };
    var tip = "";
    var pass = true;
    var code15 = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
    var code18 = /(^[1-9]\d{5}[1-2]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X|x)$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;




    if (!code || !code18.test(code)) {
      tip = "身份证号格式错误";
      pass = false;
    } else if (!city[code.substr(0, 2)]) {
      tip = "身份证地址编码错误";
      pass = false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (code.length == 18) {
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
          tip = "身份证校验位错误";
          pass = false;
        }
      }
    }


    if (!pass) Vue.$vux.toast.text(tip, "middle")

    return pass;
  } else {
    return true
  }
}

//获取性别
export const getIdCardGender = (val) => {
  let sex = (val.substr(16, 1) - 0 + 1) % 2;

  return sex;
}
//获取出生日期
export const getIdCardBirthday = (val) => {
  let year = val.substr(6, 4);
  let month = val.substr(10, 2);
  let day = val.substr(12, 2);
  let birthday = year + '-' + month + '-' + day;
  return birthday;
}
//获取年龄
export const getAge = (val) => {
  let birthDate = new Date(val);
  if (val.length == 18) {
    let year = val.substr(6, 4);
    let month = val.substr(10, 2);
    let day = val.substr(12, 2);
    birthDate = new Date(year + '-' + month + '-' + day);
  }
  let ageVal;

  let nowDateTime = new Date();
  ageVal = nowDateTime.getFullYear() - birthDate.getFullYear();
  if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
    ageVal--;
  }

  return ageVal;
}
//去空格
export const removeAllSpace = (str) => {
  return str.replace(/\s+/g, "");
}
//从地址栏里获取数据
export const getDataFromUrl = (name) => {
  //构造一个含有目标参数的正则表达式对象  
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数  
  var r = window.location.search.substr(1).match(reg);
  //返回参数值  
  if (r !== null) return unescape(r[2]);
  return null;
}





//日期转字符串
export const dateToString = (time) => {
  const datenew = new Date(time);
  const year = datenew.getFullYear();
  const month = tran_val(datenew.getMonth() + 1);
  const date = tran_val(datenew.getDate());
  return year + '-' + month + '-' + date;
}
//多少天/月/年（前/后）日期  type: 类型，是指对年月日的操作，AddDayCount是对当前时间进行加减操作，day是对新时间再次进行格式化
export const GetDateStr = (type, AddDayCount, day) => {
  var dd = new Date();
  if (day) {
    dd = new Date(day);
  }
  if (type == "day") {
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  } else if (type == "month") {
    dd.setMonth(dd.getMonth() + AddDayCount); //获取AddDayCount月后的日期
  }
  let year = dd.getFullYear();
  var y = type == "year" ? year + AddDayCount : dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate(); //picker日历上的当前日期的前一天数(原来没有减一)
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  return y + "-" + m + "-" + d;
}

export const checkAge = (state, maxAge, minAge) => {
  //在js文件中也可以调用state中的相关数据，也可以采用参数传值的方法，这里直接判断就行了
  var tip = "";
  var pass = true;

  let holderAge, insurantAge, relation, payment, minAgeDay, amnt, insuBirthDate, totalPrem, holderSex, insurantSex;
  holderAge = state.holder.age;
  insurantAge = state.insurant.age;
  relation = state.insurant.relationName;
  payment = state.varietyData.payMent;
  minAgeDay = state.varietyData.minAgeD;
  insuBirthDate = state.varietyData.birthDate;
  amnt = state.varietyData.amnt;
  totalPrem = state.varietyData.totalPrem;
  holderSex = state.holder.sex;
  insurantSex = state.insurant.sex
  

  if (holderAge < 18) {
    tip = "投保人年龄必须大于18周岁";
    pass = false;
  }
  if (payment !== "趸交") {
    if ((holderAge - 0 + (payment - 0)) > 70) {
      tip = "缴费期满时投保人年龄不得超过70周岁";
      pass = false;

    }
  } else {
    if (holderAge > 70) {
      tip = "投保人年龄不得超过70周岁";
      pass = false;

    }
  }

  //判断被保人年龄
  let s1 = insuBirthDate; //被保人生日
  s1 = new Date(s1);
  let s2 = new Date(); //当前日期
  var days = s2.getTime() - s1.getTime(); //毫秒数  ，获取被保人填写时的提日期与被保人出生的日期
  var time = parseInt(days / (1000 * 60 * 60 * 24));
  if (minAgeDay && (time < minAgeDay)) {
    tip = `被保人不得小于${minAgeDay}天`;
    pass = false;
  }
  if (insurantAge >= 0) {
    if (insurantAge > maxAge || insurantAge < minAge) {
      tip = `被保人年龄应在${maxAge}-${maxAge}周岁之间`;
      pass = false;
    }
  }
  if (state.holder.idNum && state.insurant.idNum) {
    if (relation == "子女") { //子女
      if (Math.abs(holderAge - insurantAge) < 18) {
        tip = "被保人与投保人年龄相差小于18周岁 无法投保";
        pass = false;
      }
    } else if (relation == "父母") { //父母
      if (Math.abs(holderAge - insurantAge) < 18) {
        tip = "被保人与投保人年龄相差小于18周岁 无法投保";
        pass = false;

      }
    } else if (relation == "配偶") { //配偶  只需要判断投保人与非投保人的性别就行了，不需要上面的那种
      if (holderSex == insurantSex) {
        tip = "配偶性别相同 无法投保";
        pass = false;
      }
    }
  }
  if (!pass) Vue.$vux.toast.text(tip, "middle")
  return pass;
}


export const checkInsurant = (state) => {
  var tip = "";
  var pass = true;
  let insuName = state.insurant.name,
    insuPhone = state.insurant.phone,
    insuIdNum = state.insurant.idNum,
    insuValidDateEnd = state.insurant.validDateEnd,
    insuEmail = state.insurant.email,
    insuCounty = state.insurant.county,
    insuPermanentAddress = state.insurant.permanentAddress,
    insuHeight = state.insurant.height,
    insuWeight = state.insurant.weight,
    insurantAge = state.insurant.age,
    insuSex = state.insurant.sex,
    occupationCode = state.insurant.occupationCode,
    relationsWithCustomer = state.insurant.relationsWithCustomer;


  if (!checkData('被保人姓名', insuName) ||
    !checkData('被保人电话', insuPhone) ||
    // !checkData('被保人证件号', insuIdNum) ||
    // !checkData('被保人证件有效期', insuValidDateEnd) ||
    // !checkData('被保人邮箱', insuEmail) ||
    // !checkData('被保地区', insuCounty) ||
    // !checkData('被保人详细地址', insuPermanentAddress) ||
    // !checkData('被保人身高', insuHeight) ||
    // !checkData('被保人体重', insuWeight) ||
    !checkData('被保人职业', occupationCode)) {
    pass = false;
    return;
  }

  //这里的正则判断说的是当投保关系为本人时，需要进行邮箱验证，而投保人中没有邮箱验证这条
  if (state.insurant.relationName == '本人') {
    if (!checkData('被保人邮箱', insuEmail)) {
      pass = false;
      return;
    }
  }
  if (!pass) Vue.$vux.toast.text(tip, "middle")
  return pass;
}

export const checkBnfs = (state) => {
  var tip = "";
  var pass = true;
  let holderAge = state.insurant.age;
  let holderSex = state.insurant.sex;
  let bnfsType = state.benefit.type;
  let bnfsData = state.benefit.benefits;
  if (bnfsType == "01") {
    let totalLot = 0;
    bnfsData.forEach(function (item, index) {
      if (!checkData(`受益人${index + 1}与被保人关系`, item.relationToInsured) || !checkData(`受益人${index + 1}姓名`, item.name) ||
        !checkData(`受益人${index + 1}手机号`, item.phone) || !checkData(`受益人${index + 1}证件号`, item.idNo) ||
        !checkData(`受益人${index + 1}证件有效期`, item.idEndDate) || !checkData(`受益人${index + 1}受益比例`, item.bnfLot)
      ) {
        pass = false;
        return;
      } else {

        if (item.relationToInsured == "01") { //父母
          if (calculatedAge(item.idNo) - holderAge < 18) {
            tip = `受益人${index + 1}年龄与被保人关系不符`;
            // 
            Vue.$vux.toast.text(tip, "middle")
            // Toast.info(tip, 2);
            pass = false;
            return;
          }
        } else if (item.relationToInsured == "00") { //配偶

          if (item.sex == holderSex) {
            tip = `受益人${index + 1}性别与被保人关系不符`;
            Vue.$vux.toast.text(tip, "middle")
            // Toast.info(tip, 2);
            pass = false;
            return;
          }
        } else if (item.relationToInsured == "02") { //子女
          if (holderAge - calculatedAge(item.idNo) < 18) {
            tip = `受益人${index + 1}年龄与被保人关系不符`;
            Vue.$vux.toast.text(tip, "middle")
            // Toast.info(tip, 2);
            pass = false;
            return;
          }
        }
        totalLot += (item.bnfLot - 0);
      }
    })

    if (pass && totalLot != 100) {

      tip = `受益比例总和应为100`;
      Vue.$vux.toast.text(tip, "middle")
      pass = false;
      return;
    }
  }

  // if (!pass) Toast.info(tip);
  return pass;
}


// 计算年龄
const calculatedAge = (val) => {
  let bbrAge;
  if (val != null && val != "") {
    if (val.length === 18) {
      let bbrBirthday = val.substr(6, 4) + "-" + val.substr(10, 2) + "-" + val.substr(12, 2);
      let strBirthday = val.substr(6, 4) + "/" + val.substr(10, 2) + "/" + val.substr(12, 2);

      let birthDate = new Date(strBirthday);
      let nowDateTime = new Date();
      bbrAge = nowDateTime.getFullYear() - birthDate.getFullYear();
      if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        bbrAge--;
      }
    }
  }

  return bbrAge;
}

// SHA1
function add(x, y) {
  return ((x & 0x7FFFFFFF) + (y & 0x7FFFFFFF)) ^ (x & 0x80000000) ^ (y & 0x80000000);
}

function SHA1hex(num) {
  var sHEXChars = "0123456789abcdef";
  var str = "";
  for (var j = 7; j >= 0; j--)
    str += sHEXChars.charAt((num >> (j * 4)) & 0x0F);
  return str;
}

function AlignSHA1(sIn) {
  var nblk = ((sIn.length + 8) >> 6) + 1,
    blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
  for (i = 0; i < sIn.length; i++)
    blks[i >> 2] |= sIn.charCodeAt(i) << (24 - (i & 3) * 8);
  blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
  blks[nblk * 16 - 1] = sIn.length * 8;
  return blks;
}

function rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

function ft(t, b, c, d) {
  if (t < 20) return (b & c) | ((~b) & d);
  if (t < 40) return b ^ c ^ d;
  if (t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

function kt(t) {
  return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
    (t < 60) ? -1894007588 : -899497514;
}

export const SHA1 = (sIn) => {
  var x = AlignSHA1(sIn);
  var w = new Array(80);
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  var e = -1009589776;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;
    for (var j = 0; j < 80; j++) {
      if (j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      let t = add(add(rol(a, 5), ft(j, b, c, d)), add(add(e, w[j]), kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }
    a = add(a, olda);
    b = add(b, oldb);
    c = add(c, oldc);
    d = add(d, oldd);
    e = add(e, olde);
  }
  let SHA1Value = SHA1hex(a) + SHA1hex(b) + SHA1hex(c) + SHA1hex(d) + SHA1hex(e);
  return SHA1Value.toUpperCase();
}
