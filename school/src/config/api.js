import zAJAX from './ajax';
import * as utils from '@/config/utils';

//教师绑定


export const teacherbd = (data,cb) => {
  zAJAX(`${ctx}/api/teacherbd`, data, cb, "get")
}

//信息查询-通知公告
export const getNotice = (cb) => {
  zAJAX(`${ctx}/api/notice`, {}, cb, "get")
}

//信学科列表
export const getSubject = (cb) => {
  zAJAX(`${ctx}/api/subject`, {}, cb, "get")
}

//根据学科获取教师：
export const getTeacherBysub = (data, cb) => {
  zAJAX(`${ctx}/api/getTeacherBysub`, data, cb, "get")
}
// 用户服务  教师详情
export const getTeachdetail = (data, cb) => {
  zAJAX(`${ctx}/api/teachdetail`, data, cb, "get")
}
// 用户服务  费用明细--查询列表接口
export const chargeproject = (cb) => {
  zAJAX(`${ctx}/api/chargeproject`, {}, cb, "get")
}

// 用户服务  费用明细-在线缴费列表接口
export const feelist = (data, cb) => {
  zAJAX(`${ctx}/api/feelist`, data, cb, "get")
}
// 用户服务  费用明细-缴费记录列表接口
export const chargefee = (data, cb) => {
  zAJAX(`${ctx}/api/chargefee`, data, cb, "get")
}

// 用户服务  费用明细-收费详情接口
export const chargedetail = (data, cb) => {
  zAJAX(`${ctx}/api/chargedetail`, data, cb, "get")
}
// 用户服务  成绩查询
export const cjlist = (cb) => {
  zAJAX(`${ctx}/api/cjlist`, {}, cb, "get")
}

// 用户服务  体质查询查询
export const qualitylist = (cb) => {
  zAJAX(`${ctx}/api/qualitylist`, {}, cb, "get")
}
// 用户服务  个人信息接口
export const jzginfo = (data,cb) => {
  zAJAX(`${ctx}/api/jzginfo`, data, cb, "get")
}



