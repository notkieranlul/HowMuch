// Get the input field element
const inputField = document.getElementById("from_amount");

// Add an event listener to detect changes in the input
inputField.addEventListener("input", checkInputValue);

function checkInputValue() {
    // Get the current value of the input field
    const inputValue = inputField.value;

    // Check if the value is greater than 10
    if (inputValue >= 10) {
        // Update the text if the value is greater than 10
        document.getElementById("target-text").textContent = "this is working";
    } else {
        // Update the text if the value is 10 or less
        document.getElementById("target-text").textContent = "";
    }
}
