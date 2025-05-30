function downloadFile() {
  const link = document.createElement("a");
  link.href = "../../portfolio/Rodrigo CV.pdf";
  link.download = "RodrigoCV.pdf";
  link.click();
}