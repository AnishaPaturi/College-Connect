const cardContainer = document.getElementById('cardContainer');
const searchBar = document.getElementById('searchBar');
const lostButton = document.getElementById('lostButton');

const items = [
{
    name: 'Black Wallet',
    image: 'images/black_wallet.jpg',
    description: 'A black leather wallet with several cards inside.',
    location: 'Admin Building, Room 101',
    contact: 'John Doe - 9876543210',
},
{
    name: 'Red Backpack',
    image: 'images/red_bag.jpg',
    description: 'A red backpack containing notebooks and a laptop.',
    location: 'Library, Front Desk',
    contact: 'Jane Smith - 1234567890',
},
{
    name: 'Blue Umbrella',
    image: 'images/blue_umbrella.jpg',
    description: 'A blue collapsible umbrella with a metal handle.',
    location: 'Cafeteria, Lost & Found',
    contact: 'Michael Lee - 1122334455',
},
{
    name: 'iPhone',
    image: 'images/iphone.jpg',
    description: 'A silver iPhone 12 with a cracked screen.',
    location: 'Main Hall, Lost & Found Desk',
    contact: 'Alice Brown - 9988776655',
},
{
    name: 'Laptop',
    image: 'images/laptop.jpg',
    description: 'A black Dell laptop with a charging cable.',
    location: 'IT Lab, Room 204',
    contact: 'Tom Clark - 5544332211',
},
{
    name: 'Keys',
    image: 'images/keys.jpg',
    description: 'A bunch of keys with a blue keychain.',
    location: 'Reception, Main Office',
    contact: 'Emma Wilson - 6677889900',
},
];

// function renderCards(items) {
//     cardContainer.innerHTML = '';
//     items.forEach(item => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = ` 
//             <img src="${item.image}" alt="${item.name}">
//             <div class="details">
//                 <h3>${item.name}</h3>
//                 <p>${item.description}</p>
//                 <p><strong>Location:</strong> ${item.location}</p>
//                 <p><strong>Contact:</strong> ${item.contact}</p>
//                 <button>Contact</button>
//             </div>
//         `;
//         cardContainer.appendChild(card);
//     });
// }


function renderCards(items) {
    cardContainer.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = ` 
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Contact:</strong> ${item.contact}</p>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}


renderCards(items);

function searchItem() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchInput));
    renderCards(filteredItems);
}

lostButton.addEventListener('click', function() {
    searchBar.style.display = 'block';
});