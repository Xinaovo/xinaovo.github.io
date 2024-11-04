var targetURL = "";
var delay = 2;
var isLinkValid = false

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function onRedirectNowButtonClick(){
    if(isLinkValid == true){
        document.getElementById("message").innerHTML = "Redirecting...";
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000);
    }
    
}

function checkDelayTime(delayTime){
    if(delayTime > 1){
        return delayTime;
    } else {
        return delayTime + 1;
    }
}

function main(){
    const targetBase64 = getUrlParameter('target');
    var delay = parseInt(getUrlParameter('delay'), 10);

    if (targetBase64 && !isNaN(delay)) {
        targetUrl = atob(targetBase64);
        delay = checkDelayTime(delay);
        let countdown = delay;
        document.getElementById('parameterStatus').innerHTML = "Parameters are valid."

        document.getElementById('message').innerHTML = `Redirect in ${delay} seconds, please Wait...`;
        const intervalId = setInterval(() => {
            countdown -= 1;
            document.getElementById('message').innerHTML = `Redirect in ${countdown} seconds, please Wait...`;

            if (countdown <= 0) {
                clearInterval(intervalId);
                window.location.href = targetUrl;
            }
        }, 1000);
        setTimeout(() => {
            window.location.href = targetUrl;
        }, delay * 1000);

    } else {
        document.getElementById('parameterStatus').innerHTML = 'Invalid Parameters.';
        document.getElementById('message').innerHTML = 'Check URL Parameters.'
    }
}

main()