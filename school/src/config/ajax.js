// export default (type='GET', url='', data={}, async=true) => {
// 	return new Promise((resolve, reject) => { //定义一个promise
// 		type = type.toUpperCase();
// 
// 		let requestObj;
// 		if (window.XMLHttpRequest) {
// 			requestObj = new XMLHttpRequest();
// 		} else {
// 			requestObj = new ActiveXObject;
// 		}
// 
// 		if (type == 'GET') {
// 			let dataStr = ''; //数据拼接字符串
// 			Object.keys(data).forEach(key => {
// 				dataStr += key + '=' + data[key] + '&';
// 			})
// 			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
// 			url = url + '?' + dataStr;
// 			requestObj.open(type, url, async);
// 			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			requestObj.send();
// 		}else if (type == 'POST') {
// 			requestObj.open(type, url, async);
// 			requestObj.setRequestHeader("Content-type", "application/json");
// 			requestObj.send(JSON.stringify(data));
// 		}else {
// 			reject('error type');
// 		}
// 
// 		requestObj.onreadystatechange = () => {
// 			if (requestObj.readyState == 4) {
// 				if (requestObj.status == 200) {
// 					let obj = requestObj.response
// 					if (typeof obj !== 'object') {
// 						obj = JSON.parse(obj);
// 					}
// 					resolve(obj);
// 				}else {
// 					reject(requestObj);
// 				}
// 			}
// 		}
// 	})
// }


'use strict';
/**
 * 函数：将普通js对象转换成表单参数字符串
 * 输入：
 * 输出：
**/
function objToParams(obj) {
  var list = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      list.push(key + '=' + obj[key]);
    }
  }
  return list.join('&');
}

var zAJAX = function (url, datas, func, type = "POST") {
  if (!navigator.onLine) {
    func({ result: 0, message: '网络已断开，请连接网络！' });
  }
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  

  if (type == "POST") {
    xmlhttp.open(type, url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    xmlhttp.send(objToParams(datas));
  }else{
    xmlhttp.open(type, url+"?"+objToParams(datas), true);
    xmlhttp.send(null);
  }

   


  var t1 = setTimeout(function () {
    func({ result: 0, message: '请求超时，请稍后重试！' });
    xmlhttp.abort();
  }, 30000);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      clearTimeout(t1)
      func(JSON.parse(xmlhttp.responseText));
    }
  }
}

module.exports = zAJAX;