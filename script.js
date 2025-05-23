
document.getElementById('btn').addEventListener('click', async function () {
    const outputDiv = document.getElementById('output')
    const delay = document.getElementById('delay').value.trim()
    const text = document.getElementById('text').value.trim()


    outputDiv.textContent = "";
    if (isNaN(delay)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
    }

    function promise1(text, delay) {
        return new Promise((resolve) => {

            setTimeout(() => {

                document.getElementById('output').textContent = `${text}`
                resolve(text)
            }, delay);
        })
    }
    const result = await promise1(text, delay)

    outputDiv.textContent = result
})





