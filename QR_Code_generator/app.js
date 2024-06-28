// Select DOM elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate QR code
function genQR() {
    const text = qrText.value.trim();
    if (text) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
        qrImage.style.display = 'block';
    } else {
        alert('Please enter text or URL');
    }
}

// Toggle the mode
let modeBtn = document.querySelector('#mode');
let body = document.querySelector('body');
let mode = "light";

modeBtn.addEventListener("click", () => {
    if (mode === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.textContent = "Click to Light Mode";
        mode = "dark";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        modeBtn.textContent = "Click to Dark Mode";
        mode = "light";
    }
});
