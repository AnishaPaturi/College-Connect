// Initialize tooltips
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear all errors
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.textContent = '');

  let isValid = true;

  // Full Name Validation
  const username = document.getElementById('username').value;
  if (username.length < 3) {
    document.getElementById('usernameError').textContent = "Name must be at least 3 characters long.";
    isValid = false;
  }

  // Roll No. Validation
  const rollNo = document.getElementById('roll-no').value;
  if (!/^[A-Za-z0-9]+$/.test(rollNo)) {
    document.getElementById('rollNoError').textContent = "Roll number can only contain letters and numbers.";
    isValid = false;
  }

  // Email Validation
  const email = document.getElementById('email').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password Validation
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Confirm Password Validation
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    isValid = false;
  }

  // Submit the form if valid
  if (isValid) {
    alert("Sign-up successful!");
    // You can add logic to send data to the server here
  }
});