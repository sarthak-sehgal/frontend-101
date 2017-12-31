document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    if(url.startsWith("https://bits-oasis.org") || url.startsWith("https://bits-apogee.org") || url.startsWith("https://bits-bosm.org"))
    {
      chrome.tabs.executeScript({
        code: 'console.log("Hurray!")'
      });  
    }
  });
});