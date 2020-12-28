chrome.tabs.onActivated.addListener((tab) => {
  console.log(tab)
  chrome.tabs.executeScript({
    file: 'inject.js'
  })
})

// chrome.tabs.onUpdated.addListener((id, info, tab) => {
//   console.log(tab)
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//     //code: 'console.log("123")'
//   })
// })

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [
//         // When a page contains a <video> tag...
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { urlContains: 'g' }
//         })
//       ],
//       // ... show the page action.
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });