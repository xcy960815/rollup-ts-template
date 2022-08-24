
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var Example = /** @class */ (function () {
    function Example() {
        var version = 'class Example is init';
        this.init(version);
    }
    Example.prototype.init = function (content) {
        console.log(content);
    };
    // 连接线转换驼峰
    Example.prototype.toHump = function (name) {
        return name.replace(/-([a-z])/g, function (keb, item) {
            return item.toUpperCase();
        });
    };
    Example.prototype.initPage = function (tagName, innerText, styleConfig) {
        var _this = this;
        if (styleConfig === void 0) { styleConfig = {}; }
        var lable = document.createElement(tagName);
        lable.innerText = innerText;
        var styleConfigString = JSON.stringify(styleConfig);
        if (styleConfigString !== "{}") {
            Object.keys(styleConfig).forEach(function (key) {
                if (key.includes("_")) {
                    var newKey = _this.toHump(key);
                    lable.style[newKey] = styleConfig[key];
                    return;
                }
                lable.style[key] = styleConfig[key];
            });
        }
        else {
            // 默认样式
            lable.style.color = "#ccc";
            lable.style.fontSize = "18px";
        }
        document.body.append(lable);
    };
    return Example;
}());

export { Example };
