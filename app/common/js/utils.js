/**
 * @module  browserInfo 
 * @description 获取浏览器UA标识
 */
export
var browserInfo = (function() {
        var regExp = {
            weixin: /micromessenger\//ig,
            momo: /momowebview\//ig,
            qq: /mqqbrowser\/|\sqq\//ig,
            baidu: /baidu/ig,
            uc: /ucbrowser/ig,
            xiaomi: /xiaomi\//ig,
            firefox: /firefox/ig,
            opera: /opr\/|opera/ig,
            sogou: /sogoumobilebrowser/ig,
            liebao: /liebao/ig,
            oppo: /oppobrowser/ig,
            360: /360 aphone browser/ig,
            //判断完其他的内容后再判断是否为safari
            safari: /version\/([0-9]+\.\d[\.\d]*)\s+mobile\/\w+\s+safari\/([0-9]+\.\d[\.\d]*)/ig,
            chrome: /chrome\/([0-9]+\.\d[\.\d]*)+\s+mobile\s+safari\/([0-9]+\.\d[\.\d]*)$|crios/ig
        };
        var source = "other";
        for (var key in regExp) {
            if (regExp[key].test(navigator.userAgent.toLowerCase())) {
                source = key;
                break;
            }
        }
        return source;
    })() 
    /**
     * @module diffDeviceInfo
     * @description 返回系统平台及ios版本
     */
export
var deviceInfo = (function() {
    var ua = navigator.userAgent.toLowerCase(),
        isAndroid = ua.match(/(android);?[\s\/]+([\d.]+)?/),
        isIOS = ua.match(/(iphone\sos)\s([\d_]+)/);
    if (isIOS) {
        var versions = /[\S\s]*os ([\d_]+) like/ig.exec(ua);
        // iOS 版本
        var iOSMajorVersion = parseInt(versions[1], 10);
    }
    return {
        "isAndroid": isAndroid || "",
        "isIOS": isIOS || "",
        "iosVersion": iOSMajorVersion || ""
    };
})();