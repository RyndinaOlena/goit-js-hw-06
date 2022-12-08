(function () {
    const items = document.querySelectorAll("#categories .item");
    console.log(`Number of categories: ${items.length}`)
    items.forEach((item) => {
        const title = item.querySelector("h2").innerText;
        const elementLength = item.querySelectorAll("li").length;

        console.log(`\nCategory: ${title}`);
        console.log(`Elements: ${elementLength}`);

    })
})();