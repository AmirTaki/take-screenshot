const container = document.querySelector('#container')
const captureButton = document.querySelector('#capture-button')
const previewContainer = document.querySelector('#preview-container')
const downloadButton = document.querySelector('#download-button')

captureButton.addEventListener("click", async() => {
    downloadButton.classList.remove('hide')
    const canvas = await html2canvas(container)
    const imageURL = canvas.toDataRUL();
    previewContainer.innerHTML = `
    <img src = ${imageURL} id = 'image' />`

    downloadButton.href = imageURL;
    downloadButton.download = 'image.png'
})

window.onload = () => {
    downloadButton.classList.add('hide')
    previewContainer.innerHTML = ''
}