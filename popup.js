chrome.tabs.query({active : true, currentWindow: true}, function (tabs) {
  var tab = (tabs.length === 0 ? tabs : tabs[0]);

  new QRious({
    element: document.getElementById('qr'),
    value: tab.url
  });
})