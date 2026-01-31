const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateQRCode();
});

function generateQRCode() {
  new QRCode(qrContainer, {
    text: qrText.value,
    height: sizes,
    width: sizes,
    colorLight: "#fff",
    colorDark: "#0000",
  });
}
