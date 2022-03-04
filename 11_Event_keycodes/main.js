const boxContent = document.querySelector('.container');

window.addEventListener('keydown', function (e) {
    boxContent.innerHTML = `
        <div class="key">
            <span class="title">e.key</span>
            <div class="key-content">${e.key}</div>
        </div>
        <div class="key">
            <span class="title">e.keyCode</span>
            <div class="key-content">${e.keyCode}</div>
        </div>
        <div class="key">
            <span class="title">e.code</span>
            <div class="key-content">${e.code}</div>
        </div>
`
})