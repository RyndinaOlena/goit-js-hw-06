function main() {
    let counterValue = 0;

    document.querySelector('[data-action="decrement"]').addEventListener("click", () => {
        counterValue -= 1;
        document.querySelector('#value').innerText = counterValue;
    });

    document.querySelector('[data-action="increment"]').addEventListener("click", () => {
        counterValue += 1;
        document.querySelector('#value').innerText = counterValue;
    })
}
main()