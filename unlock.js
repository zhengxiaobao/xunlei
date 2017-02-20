//var actualCode = 'Object.defineProperty(this , "navigator" , {value: { platform: "",userAgent:"" }});';
chrome.extension.sendRequest({ doStr: "xunlei" }, function (response) {
    console.log("开始设置");
    var s = document.createElement('script');
    s.textContent = response.JS;
    document.documentElement.appendChild(s);
    s.remove();
    console.log("设置成功");
});
