function addItem() {
    // Get the value from the input field
    var inputValue = document.getElementById("inputField").value;

    // Check if the input is not empty
    if (inputValue.trim() !== "") {
        // Create a new paragraph element to display the content
        var newItem = document.createElement("p");
        newItem.textContent = inputValue;

        // Append the new item to the list container
        document.getElementById("listContainer").appendChild(newItem);

        // Clear the input field
        document.getElementById("inputField").value = "";
    } else {
        alert("Please enter some text!");
    }
}