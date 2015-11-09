// when clicked icon
chrome.browserAction.onClicked.addListener(addHatenaBookmark);
function addHatenaBookmark(tab){
  // permissions でtabsを有効にするとurl titleが取れる
  //console.log('url', tab.url);
  if (tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {'tab': tab});
    });
  }
}

// when receved URL
chrome.runtime.onMessage.addListener(newTab);
function newTab(request) {
  if (!request.url){
    return;
  }
  chrome.tabs.create({'url': request.url}/*, function(tab){
    console.log('created tab');
  }*/);
}
