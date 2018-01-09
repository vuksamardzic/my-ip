var httpReq = new XMLHttpRequest();
httpReq.onreadystatechange = function(ev)
{
    if (httpReq.readyState === 4)
    {
        if (httpReq.status === 200)
        {
            var data = JSON.parse(httpReq.responseText);
            var el = document.querySelector('.ip');
            var title = document.querySelector('title');

            title.innerHTML += ' ' + data.ip;
            el.innerText = data.ip;
            el.classList.add('visible');
        }
    }
};

httpReq.open('GET', 'https://api.ipify.org?format=json');
httpReq.send();