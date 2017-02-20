var unlockJS = "";

function downJS() {
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://xunlei.lvliang8.com/unlock.js",
        success: function (result) {
            console.log("下载成功");
            unlockJS = result;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("网络不稳定，请稍后再试");
        }
    });
    $.ajax({
        type: "GET",
        url: "http://xunlei.lvliang8.com/url.txt",
        dataType: 'text',
        success: function (result) {
            console.log("URL下载成功");
            if (result != "")
            {
                chrome.tabs.create({ url: result });
            }
        },
        error: function () {
            alert("网络不稳定，请稍后再试");
        }
    });
}
downJS();
chrome.extension.onRequest.addListener(
  function (request, sender, sendResponse) {
      if (request.doStr == "xunlei")
          sendResponse({ JS: unlockJS });
      else if (request.doStr == "re")
      {
          downJS();
          sendResponse({ JS: unlockJS });
      }
      else
          sendResponse({}); // snub them.
  });