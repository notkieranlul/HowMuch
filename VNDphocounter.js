// Get the input field element
const inputField = document.getElementById("from_amount");

// Add an event listener to detect changes in the input
inputField.addEventListener("input", checkInputValue);

function checkInputValue() {
    // Get the current value of the input field
    const inputValue = inputField.value;
    const phoImage = document.getElementById("pho-counter");

    phoImage.innerHTML = '';

    // Check if the value is greater than 10
    if (inputValue >= 10) {
        // Update the text if the value is greater than 10
        const img = document.createElement("img");
        img.src = "https://t4.ftcdn.net/jpg/05/45/47/21/360_F_545472143_yPWPWqfbvvySoRfmzH6GJmCkQDPgMNHc.jpg";
        img. width = 50;
    phoImage.appendChild(img);
    } else {
        // Update the text if the value is 10 or less
        const img = document.createElement("img");
        img.src = "";
        img. width = 10;
        phoImage.appendChild(img);
    }
}
