document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const rollno = document.getElementById('rollno').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Send data to the backend
    fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, rollno, email, phone, password }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Registration failed");
        }
        return response.json();
    })
    .then((data) => {
        alert("Registration successful!");
        window.location.href = 'dashboard.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Registration failed. Please try again.");
    });
});
