chrome.runtime.onMessage.addListener(createLink);

function createLink(request, sender, sendResponse) {
  if(!request.tab){
    return;
  }

  var HATENA_BOOLMARK_URL = 'http://b.hatena.ne.jp/entry/';

  //console.log("content_script: received message");
  var tab_info = request.tab;
  var url = tab_info.url;
  var encodeURI_bookmark = encodeURI(url);
  //console.log('encodeURI: ', encodeURI_bookmark);

  var url = HATENA_BOOLMARK_URL + encodeURI_bookmark;
  chrome.runtime.sendMessage({'url': url});
}
