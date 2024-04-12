function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-msg");

    // You can add your authentication logic here
    // For simplicity, I'm checking if the fields are empty
    if (username === "tejas" && password === "12345") {
        // Redirect to another page upon successful login
        window.location.href = "music.html";
        return false; // Prevent form submission
    }
    else if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Username and password are required.";
        return false; // Prevent form submission
    }

    // Clear error message if no validation issues
    errorMessage.textContent = "";
    return true; // Allow form submission
}