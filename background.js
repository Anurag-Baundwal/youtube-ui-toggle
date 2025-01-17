browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-ui") {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      browser.tabs.sendMessage(activeTab.id, { action: "toggleUI" });
    });
  }
});