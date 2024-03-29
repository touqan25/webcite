// These refer to the copy buttons in my html
// There are two buttons, one for APA7 and one for MLA
// A user will be able to click on these buttons to copy the citation in the
// appropriate format
const copyButton = document.querySelector("#copyButton");
const copyButton2 = document.querySelector("#copyButton2");

// These variables are grabbing stuff from my html file, rather than
// grabbing the current Chrome tab page's title and URL.
// this is where I am stuck regarding that first question I had
const webTitle = document.querySelector("head > title").textContent;
const webURL = window.location.href;

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


// this is the event listener for the APA7 button
// when a user clicks this it will copy the APA7 citation to the clipboard
// and then change the button text to "APA7 Citation Copied!" for 2 seconds to let the user know the copy event was successful 
// we love heuristics (visibility of system status and feedback!)
copyButton.addEventListener("click", () => {
    copyButton.textContent = "APA7 Citation Copied!";
    copyButton.classList.remove("not-copied")
    copyButton.classList.add("copied")
    navigator.clipboard.writeText(`Last Name, First Initial. (YYYY). ${webTitle}. Cite Name. ${webURL}`);
    setTimeout(() => {
        copyButton.textContent = "Copy APA7 Citation";
        copyButton.classList.remove("copied")
        copyButton.classList.add("not-copied")
    }, 2000);

});

// this is the event listener for the MLA button
// so same thing as above, but for MLA
copyButton2.addEventListener("click", () => {
    copyButton2.textContent = "MLA Citation Copied!";
    copyButton2.classList.remove("not-copied")
    copyButton2.classList.add("copied")
    navigator.clipboard.writeText(`Last Name, First Name. ${webTitle} Cite Name. Day Month, Year. ${webURL} Accessed ${formatMLADate(currentDate)}`);
    setTimeout(() => {
        copyButton2.textContent = "Copy MLA Citation";
        copyButton2.classList.remove("copied")
        copyButton2.classList.add("not-copied")
    }, 2000);
});

