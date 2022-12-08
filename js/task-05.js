(function () {
    document.querySelector('#name-input').addEventListener('input', (event) => {
        const value = event.target.value || 'Anonymous';
        document.querySelector('#name-output').innerText = value;
    })
})()