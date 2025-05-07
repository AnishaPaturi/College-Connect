// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    // Get the roll number, name, and password values from the form
    const rollNumber = document.getElementById("rollNumber").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (rollNumber === "" || name === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can add more complex validation here (e.g., checking credentials against a database)

    // Redirect to dashboard or home page upon successful login
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to another page
});
