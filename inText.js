// These refer to the copy and generate buttons in my html
// There are two buttons, one for APA7 and one for MLA
// A user will be able to click on these buttons to copy the citation in the
// appropriate format
const copyButton = document.querySelector("#copyButton");
const copyButton2 = document.querySelector("#copyButton2");

// this is the function that formats the MLA Accessed date, I tried it and it works!
// I am not sure if this is the most efficient way to do this, but it works
const formatMLADate = (date) => {
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

let currentDate = new Date();


// Automatic Citation Generator for APA7
copyButton.addEventListener('click', async function() {
    copyButton.textContent = "APA7 Citation Copied!";
    copyButton.classList.remove("not-copied");
    copyButton.classList.add("copied");

    const year = document.querySelector('#publishedDate').value;

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let selectedText;
    try {
        [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => getSelection().toString(),
        });
        selectedText = result;
        console.log('here is the result', result);
    } catch (e) {
        console.warn('error getting selection', e.message)
    }

    const tabTitle = tab.title;

    if (selectedText) {
        try {
            await navigator.clipboard.writeText(`"${selectedText}," ("${tabTitle}", ${year}).`);
            console.log("Selected text copied to clipboard:", selectedText);
            } catch (error) {
                console.error("Error copying selected text to clipboard:", error);
            }
        }

    setTimeout(() => {
      copyButton.textContent = "Copy APA7 Citation";
      copyButton.classList.remove("copied");
      copyButton.classList.add("not-copied");
    }, 2000);

});

// Automatic Citation Generator for MLA
copyButton2.addEventListener('click', async function() {
    copyButton2.textContent = "MLA Citation Copied!";
    copyButton2.classList.remove("not-copied")
    copyButton2.classList.add("copied")

    const lastName = document.querySelector('#lastname').value;


    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let selectedText;
    try {
        [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => getSelection().toString(),
        });
        selectedText = result;
        console.log('here is the result', result);
    } catch (e) {
        console.warn('error getting selection', e.message)
    }

    const tabTitle = tab.title;

    if (selectedText) {
        try {
            await navigator.clipboard.writeText(`"${selectedText}," (${lastName}, "${tabTitle}").`);
            console.log("Selected text copied to clipboard:", selectedText);
            } catch (error) {
                console.error("Error copying selected text to clipboard:", error);
            }
        }

    setTimeout(() => {
        copyButton2.textContent = "Copy MLA Citation";
        copyButton2.classList.remove("copied")
        copyButton2.classList.add("not-copied")
    }, 2000);
});