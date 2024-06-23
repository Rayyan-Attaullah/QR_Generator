document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const generateButton = document.getElementById('generateButton');
    const qrcodeContainer = document.getElementById('qrcode');

    generateButton.addEventListener('click', () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            qrcodeContainer.innerHTML = '';
            new QRCode(qrcodeContainer, {
                text: userInput,
                width: 128,
                height: 128,
            });
        } else {
            qrcodeContainer.innerHTML = 'Please enter some text or a URL.';
        }
    });
});
