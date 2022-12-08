(function () {
    document.querySelector('#validation-input').addEventListener('blur', (event) => {
        const impEl = event.target;
        const value = impEl.value.length;
        const expected = parseInt(impEl.attributes['data-length'].value);
        if (value === expected) {
            impEl.className = 'valid';
        }
        else {
            impEl.className = 'invalid'
        }

        console.log(value, expected);

    })
})();