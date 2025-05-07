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

    // Send data to the server
    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, rollno, email, phone, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Registration successful') {
                alert(data.message);
                window.location.href = 'dashboard.html';
            } else {
                alert(data.message);
            }
        })
        .catch((error) => console.error('Error:', error));
});
