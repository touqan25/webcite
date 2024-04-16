const generateAPA = document.querySelector("#generateAPACitation");
const generateMLA = document.querySelector("#generateMLACitation");

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

// Manual Citation Generator for APA7
generateAPA.addEventListener('click', async function() {
    // Geting all my input values
    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const websiteName = document.querySelector('#websiteName').value;

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const tabURL = tab.url;
    const tabTitle = tab.title;
    // Format citation
    const citation = `${lastName}, ${firstName.charAt(0)}. (${new Date().getFullYear()}). ${tabTitle}. ${websiteName}. ${tabURL}`;

    // Copy citation to clipboard
    navigator.clipboard.writeText(citation)

    generateAPA.textContent = "APA7 Citation Copied!";
            generateAPA.classList.remove("not-copied");
            generateAPA.classList.add("copied");
            setTimeout(() => {
                generateAPA.textContent = "Generate APA7 Citation";
                generateAPA.classList.remove("copied");
                generateAPA.classList.add("not-copied");
            }, 2000);
})

// Manual Citation Generator for MLA
generateMLA.addEventListener('click', async function() {

    // Geting all my input values
    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const websiteName = document.querySelector('#websiteName').value;

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const tabURL = tab.url;
    const tabTitle = tab.title;
    // Format citation
    const citation = `${lastName}, ${firstName}. "${tabTitle}." ${websiteName}, ${tabURL}. Accessed ${formatMLADate(currentDate)}`;

    // Copy citation to clipboard
    navigator.clipboard.writeText(citation)

    generateMLA.textContent = "MLA Citation Copied!";
            generateMLA.classList.remove("not-copied");
            generateMLA.classList.add("copied");
            setTimeout(() => {
                generateMLA.textContent = "Generate MLA Citation";
                generateMLA.classList.remove("copied");
                generateMLA.classList.add("not-copied");
            }, 2000);
})

// clear field button
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    // Select all input fields
    const inputFields = document.querySelectorAll(".input");
    
    // Loop through each input field and clear its value
    inputFields.forEach((input) => {
        input.value = "";
    });
});