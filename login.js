document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const rollno = document.getElementById("rollNumber").value;
    const password = document.getElementById("password").value;

    if (!rollno || !password) {
        alert("Please fill in all fields.");
        return;
    }

    fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ rollno, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === "Login successful") {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert(data.message || "Login failed.");
        }
    })
    .catch(err => {
        console.error("Login error:", err);
        alert("Login error.");
    });
});
