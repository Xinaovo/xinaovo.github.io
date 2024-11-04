function generateLink() {
    var urlInput = '';
    const delayInput = parseInt(document.getElementById('delayInput').value, 10);
    const resultElement = document.getElementById('result');

    if (!document.getElementById('urlInput').value) {
        alert('Target URL does not exist. Enter it first.');
        return;
    } else {
        urlInput = document.getElementById('urlInput').value;
    }

    if(urlInput.startsWith("https://") | urlInput.startsWith("http://")){
        
    }else{
        alert('Target URL invalid. Please enter FULL Target URL here, including the "http://" or https:// header, e.g. https://www.example.com');
        return;
    }

    if (isNaN(delayInput) || delayInput <= 1) {
        alert('Delay time is invalid. Range of delay time is from 2 to 60.');
        return;
    }

    const targetEncoded = btoa(urlInput);
    const redirectUrl = `index.html?target=${targetEncoded}&delay=${delayInput}`;
    resultElement.innerHTML = `RedirectMe Link: <a href="${redirectUrl}" target="_blank">${redirectUrl}</a>`;
}