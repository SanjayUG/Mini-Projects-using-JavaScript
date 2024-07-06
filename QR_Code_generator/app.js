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
        enableDarkMode();
        modeBtn.textContent = "Click to Light Mode";
        mode = "dark";
    } else {
        enableLightMode();
        modeBtn.textContent = "Click to Dark Mode";
        mode = "light";
    }
});

// Enable Dark Mode
function enableDarkMode() {
    body.style.backgroundColor = "#333333";
    body.style.color = "#ffffff";
    document.querySelector('h1').style.color = "#ffffff";
    document.querySelector('h3').style.color = "#ffffff";
    document.querySelector('.container').style.backgroundColor = "#444444";
    document.querySelector('.container').style.boxShadow = "0 0 10px rgba(255,255,255,0.1)";
    document.querySelector('input[type="text"]').style.backgroundColor = "#555555";
    document.querySelector('input[type="text"]').style.color = "#ffffff";
    document.querySelector('input[type="text"]').style.border = "1px solid #777777";
    document.querySelector('button').style.backgroundColor = "#666666";
}

// Enable Light Mode
function enableLightMode() {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    document.querySelector('h1').style.color = "#000000";
    document.querySelector('h3').style.color = "#ede4e4";
    document.querySelector('.container').style.backgroundColor = "#2bb1ff";
    document.querySelector('.container').style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    document.querySelector('input[type="text"]').style.backgroundColor = "#ffffff";
    document.querySelector('input[type="text"]').style.color = "#000000";
    document.querySelector('input[type="text"]').style.border = "1px solid #ccc";
    document.querySelector('button').style.backgroundColor = "#1928ae";
    document.querySelector('button').style.color = "#ffffff";
}

// Random background
let randomBtn = document.querySelector('#random');

randomBtn.addEventListener("click", () => {
    let randomGen = "#" + Math.floor(Math.random() * 16777215).toString(16); // 16777215 is the decimal equivalent of FFFFFF
    document.body.style.backgroundColor = randomGen;    
});
