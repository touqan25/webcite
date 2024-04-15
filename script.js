document.querySelector('#copyButton').addEventListener('click', function() {
    // Message to be sent
    const message = {
        type: 'GREETING',
        content: 'Hello from the popup!'
    };

    // Send message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
});



// // Event listener for APA7 button
// document.querySelector("#copyButton").addEventListener("click", () => {
//     console.log("Message sent to content script");
//     // Send message to content script to copy APA7 citation
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: "copyAPA7Citation" }, function (response) {
//             // Handle response from content script (if needed)
//             if (response && response.success) {
//                 // Update button text and class
//                 const copyButton = document.querySelector("#copyButton");
//                 copyButton.textContent = "APA7 Citation Copied!";
//                 copyButton.classList.remove("not-copied");
//                 copyButton.classList.add("copied");
//                 // Reset button text and class after 2 seconds
//                 setTimeout(() => {
//                     copyButton.textContent = "Copy APA7 Citation";
//                     copyButton.classList.remove("copied");
//                     copyButton.classList.add("not-copied");
//                 }, 2000);
//             }
//         });
//     });
// });

// // Event listener for MLA button
// document.querySelector("#copyButton2").addEventListener("click", () => {
//     // Send message to content script to copy MLA citation
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: "copyMLACitation" }, function (response) {
//             if (response && response.success) {
//                 // Update button text and class
//                 const copyButton2 = document.querySelector("#copyButton2");
//                 copyButton2.textContent = "MLA Citation Copied!";
//                 copyButton2.classList.remove("not-copied");
//                 copyButton2.classList.add("copied");
//                 // Reset button text and class after 2 seconds
//                 setTimeout(() => {
//                     copyButton2.textContent = "Copy MLA Citation";
//                     copyButton2.classList.remove("copied");
//                     copyButton2.classList.add("not-copied");
//                 }, 2000);
//             }
//         });
//     });
// });