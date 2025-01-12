function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }, (err) => {
        console.error("Could not copy text: ", err);
    });
}

// Add event listeners for contact info
document.getElementById('phone-number').addEventListener('click', function() {
    copyToClipboard('(123) 456-7890');
});

document.getElementById('email').addEventListener('click', function() {
    copyToClipboard('info@ticketbazaar.com');
});