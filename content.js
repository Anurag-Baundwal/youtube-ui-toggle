let uiHidden = false; // Keep track of the UI state

function toggleUI() {
  const uiElements = document.querySelectorAll('.ytp-chrome-bottom, .ytp-chrome-top');
  if (uiElements.length === 0) return;
  uiElements.forEach(element => {
    element.style.visibility = uiHidden ? 'visible' : 'hidden';
  });
  uiHidden = !uiHidden;
}

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleUI") {
    toggleUI();
  }
});