// Get query parameters from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const image = params.get('image');
const description = params.get('description');
const location = params.get('location');
const contact = params.get('contact');

// Populate the details on the page
document.getElementById('itemName').textContent = name;
document.getElementById('itemImage').src = image;
document.getElementById('itemDescription').textContent = description;
document.getElementById('itemLocation').textContent = location;

// Handle "View Contact Info" button click
const contactInfo = document.getElementById('contactInfo');
const viewContactBtn = document.getElementById('viewContactBtn');

viewContactBtn.addEventListener('click', () => {
    contactInfo.style.display = 'block';
    document.getElementById('itemContact').textContent = contact;
    viewContactBtn.style.display = 'none'; // Hide button after showing contact info
});