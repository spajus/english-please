/*!
 * Chrome Extension that forces all Google products to use English.
 *
 * @license MIT
 * @author Tomas Varaneckas <tomas.varaneckas@gmail.com>
 */
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var url = new Url(details.url);
    if (details.type == 'main_frame' && url.query.hl != 'en') {
      url.query.hl = 'en';
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["*://*.google.com/*"] },
  ["blocking"]
);
