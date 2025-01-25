let qrinput = document.getElementById("qrInput");
let generateQr = document.getElementById("generateBtn");
let qrPopup = document.getElementById("qrPopup");
let qrImg = document.getElementById("qrImg");
let download_btn = document.getElementById("download-btn");
let close = document.getElementById("close-btn");
let main = document.querySelector(".main-container");
const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';


const inputField = document.getElementById('qrInput');
inputField.addEventListener('blur', () => {
    inputField.focus();
});

generateQr.addEventListener("click", () => {
    if (!qrinput.value) {
        alert("Enter Text or URL first !");
        return;
    }
    else {
        const imgUrl = url + qrinput.value;
        qrImg.setAttribute("src", imgUrl);
        setTimeout(() => {
            qrPopup.classList.add("active");
            main.classList.add("opecity");
        }, 1000)
    }
});

// Add close functionality
close.addEventListener("click", () => {
    qrPopup.classList.remove("active");
    main.classList.remove("opecity");
    qrinput.value = '';
})

download_btn.addEventListener("click", () => {
    const imgUrl = url + qrinput.value;
    fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'qr.jpg';
            link.click();
        })
});

// Add error handling for image load
qrImg.addEventListener("error", () => {
    alert("Failed to generate QR code. Please try again.");
    qrPopup.classList.remove("active");
    main.classList.remove("opacity");
});