console.log("I am being loaded");

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check the message type
    if (message.type === 'GREETING') {
        // Handle the message content
        console.log('Received message from popup:', message.content);
        
        // Example: Send a response back to the popup
        sendResponse({ received: true });
    }
});

// // Listen for messages from popup script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("Message received from popup script:", request); // Log received message
//     if (request.action === "copyAPA7Citation") {
//         // Code to copy APA7 citation
//         // Retrieve webTitle and webURL from the DOM
//         const webTitle = document.querySelector("head > title").textContent;
//         const webURL = window.location.href;
//         navigator.clipboard.writeText(`Last Name, First Initial. (YYYY). ${webTitle}. Cite Name. ${webURL}`)
//         .then(() => {
//             sendResponse({ success: true }); // Send response back to popup script (if needed)
//         })
//         .catch((error) => {
//             console.error("Failed to copy APA7 citation:", error);
//             sendResponse({ success: false }); // Send response back to popup script (if needed)
//         });
//     } else if (request.action === "copyMLACitation") {
//         // Code to copy MLA citation
//         // Retrieve webTitle and webURL from the DOM
//         const webTitle = document.querySelector("head > title").textContent;
//         const webURL = window.location.href;
//         const currentDate = new Date();
//         navigator.clipboard.writeText(`Last Name, First Name. ${webTitle} Cite Name. Day Month, Year. ${webURL} Accessed ${formatMLADate(currentDate)}`)
//         .then(() => {
//             sendResponse({ success: true }); // Send response back to popup script (if needed)
//         })
//         .catch((error) => {
//             console.error("Failed to copy MLA citation:", error);
//             sendResponse({ success: false }); // Send response back to popup script (if needed)
//         });
//     }
//     // Make sure to return true to indicate that you will call sendResponse asynchronously
//     return true;
// });