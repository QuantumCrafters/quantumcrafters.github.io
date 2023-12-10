
const downloadButton = document.querySelector('.download-btn');

function download() {
  // file path
  const fileUrl = 'res/downloads/resume.png';

  // Create a link element
  const link = document.createElement('a');
  link.href = fileUrl;

  // Specify the default filename for the downloaded file
  link.download = 'Anju-Mourya_Resume.png';

  // Trigger a click event on the link to start the download
  document.body.appendChild(link);
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}

// set event listener
downloadButton.addEventListener('click', download);