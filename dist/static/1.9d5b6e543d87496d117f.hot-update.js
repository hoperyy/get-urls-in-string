webpackHotUpdategetUrlsInString(1,{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(116);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUrlsInString(string) {
    // http://k.weidian.comhttps://k.weidian.com
    // https://k.weidian.com
    // http://k.weidian.com
    var arr = string.match(/\bhttps?:\/\/\S+/gi) || [];

    var multiArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        // arr[i] 可能的值：http://k.weidian.comhttps://k.weidian.com、https://k.weidian.com、http://k.weidian.com
        var s = arr[i];

        var httpLastIndex = s.lastIndexOf('http://');
        var httpsLastIndex = s.lastIndexOf('https://');

        multiArr[i] = [];

        while (httpsLastIndex !== -1 || httpLastIndex !== -1) {
            var finalLastIndex = Math.max(httpLastIndex, httpsLastIndex);
            // console.log(s, finalLastIndex);
            multiArr[i].unshift(s.slice(finalLastIndex));
            s = s.slice(0, finalLastIndex);

            httpLastIndex = s.lastIndexOf('http://');
            httpsLastIndex = s.lastIndexOf('https://');
        }
    }

    var rt = [];

    for (var _i = 0, _len = multiArr.length; _i < _len; _i++) {
        rt.push.apply(rt, (0, _toConsumableArray3.default)(multiArr[_i]));
    }

    // 排序，length 长的靠前
    rt.sort(function (a, b) {
        return b.length - a.length;
    });

    return rt;
}

function analyzeStringByUrls(urls, string) {
    if (!urls || urls.length == 0) {
        return [{ type: 'text', content: string }];
    }

    var url = urls[0];
    var arr = string.split(url);

    var rt = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        rt.push.apply(rt, (0, _toConsumableArray3.default)(analyzeStringByUrls(urls.slice(1), arr[i])));

        if (i !== len - 1) {
            rt.push({ type: 'url', content: url });
        }
    }

    return rt;
}

function getAnalyzedStringArr(string) {
    return analyzeStringByUrls(getUrlsInString(string), string);
};

exports.default = getAnalyzedStringArr;
module.exports = exports['default'];

/***/ })

})
//# sourceMappingURL=1.9d5b6e543d87496d117f.hot-update.js.map