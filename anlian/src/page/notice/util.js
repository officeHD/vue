let utilFunc = {
    //初始化字体
    initIconFont () {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_1082618_rcplhhjj4wj.ttf')"
        });
    },
    //设置缓存
    setCache(key,value) {
        let storage = weex.requireModule('storage');
        return new Promise(function (resolve) {
            try {
                storage.setItem(key, value);
                resolve(true)
            } catch (e) {
                console.log(e);
                resolve(false);
            }
        });
    },
    // 获取缓存
    getCache(key) {
        let storage = weex.requireModule('storage');
        return new Promise(function (resolve) {
            try {
                storage.getItem(key, e => {
                    if (e.result === 'success') {
                        resolve(e.data);
                    } else {
                        resolve(null);
                    }
                });
            } catch (e) {
                console.log(e);
                resolve(null);
            }
        });
    },
    // 清除缓存
    removeCache(key) {
        let storage = weex.requireModule('storage');
        storage.removeItem(key)
    },
    setBundleUrl(url, jsFile) {
        const bundleUrl = url;
        let host = '';
        let path = '';
        let nativeBase;
        const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            const matchFirstPath = /\/\/[^\/]+\/([^\/]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        const h5Base = './index.html?page=';
        // in Native
        let base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path? path+'/':'');
        }

        const newUrl = base + jsFile;
        return newUrl;
    },
   
    getUrlSearch(url,name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?')+1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

export default utilFunc;