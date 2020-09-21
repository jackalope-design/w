const request = downloadResume();
keepPageInLoadingStateForever();

function downloadResume() {
    const request = new XMLHttpRequest();
    request.responseType = 'blob';
    request.open(
        "GET",
        "https://drive.google.com/file/d/1PFN54FE8P3JD6lld3NHdwMyEx9CyKVaZ/view?usp=sharing"
    );
    request.onload = onDownloaded;
    request.send(null);
    return request;
}

function onDownloaded() {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(request.response);
    link.download = "AlexSaveau.pdf";
    link.click();

    window.location.replace("/");
}

function keepPageInLoadingStateForever() {
    const f = document.createElement('iframe');
    f.onload = function () {
        f.contentWindow.location.reload();
    };
    f.src = 'about:blank';
    f.style.display = 'none';
    document.body.appendChild(f);
}
