const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput(); //n called it here
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img"); //when qrcode generates, library canva/img banake .qr-body ke andr dalti h ye line us img ele ko pick krra
  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttr); //a tag ka href attr jav set krte ho tabhi browser us link ko downloadable resrc ke roop treat krta aur agar btn(a tag) ke sath downlaod attr bhi ho
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`,
    ); //QR library do tarike se QR generate karti img/canvas Agar QR library ne canvas banaya hai instead of img,Agar QR library ne canvas banaya hai instead of img.todataurl() canvas ele ka method ye canvas me draw hui img ko base64 string me convert krdeta basicalyy Ye download button ke href me base64 image dal raha hai
  }
});

//just to avoid the code repeation we have created the funct
function isEmptyInput() {
  // if (qrText.value.length > 0) {
  //   generateQRCode();
  // } else {
  //   alert("Enter text/URL to generate the code!");
  // }
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter text/URL to generate the code!");
}

function generateQRCode() {
  qrContainer.innerText = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
