# College-Connect 🎓

Your Gateway to Campus Life.

---

### 🏷️ Project Tags
`#college-connect` `#campus-life` `#full-stack` `#web-development` `#mongodb` `#expressjs` `#nodejs` `#javascript` `#vanilla-html-css-js` `#college-portal`

---

College-Connect is a full-stack web-based platform designed to bring everything college students need right to their fingertips. Whether it's tracking college events, ordering from the canteen, checking latest news, exploring company recruitment listings, reporting/finding lost items, or requesting peer help, this application streamlines campus life management.

## 📁 Project Structure

The project has been refactored into a clean and organized structure:

```
College-Connect/
├── frontend/             # Static frontend web assets
│   ├── images/           # Images and icons used in the app
│   ├── *.html            # Lowercase, clean HTML pages
│   ├── *.css             # Styling files matching the HTML pages
│   ├── *.js              # Interactive client-side scripts
│   ├── ppt.pdf           # Project presentation PDF
│   └── ppt.pptx          # Project presentation PowerPoint
├── backend/              # Node.js + Express API Backend
│   ├── models/           # Mongoose Database Models (User, Event, Job, etc.)
│   ├── routes/           # Express Route Handlers (users, events, jobs, etc.)
│   ├── server.js         # Backend Entry Point
│   ├── package.json      # NPM dependencies & scripts
│   └── .env              # Environment Configuration (Mongo URI & Port)
└── README.md             # Project documentation (this file)
```

## 🚀 Key Features

- 📅 **Event Booking & Registration** - Explore upcoming workshops, cultural fests, sports events, and register for them.
- 🍔 **Canteen Pre-ordering** - Browse the canteen menu, add food items to a cart, choose a payment method, and place pre-orders.
- 📰 **Campus & Global News** - Stay informed with live updates from the campus and top global news headlines.
- 💼 **Company Listings & Job Matches** - Find internships and job listings from top recruiters like TCS, Google, IBM, Microsoft. Upload resumes and get matched.
- 🔍 **Lost and Found Board** - Report lost items, search the board, or list found items for peer recovery.
- 🤝 **Peer Academic Help** - Seek support or sign up as a helper to assist peers with classes.
- 🔐 **Authentication & Registration** - Secure sign-up and login utilizing the Node.js/Express.js backend and MongoDB database.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+), Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Deployment & Dev Ops**: git, npm, dotenv

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Setup and Running the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   Create or edit the `.env` file inside `backend/` and verify the MongoDB Atlas connection string:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/databaseName?retryWrites=true&w=majority
   PORT=5000
   ```
4. Start the backend server:
   - For production / standard start:
     ```bash
     npm start
     ```
   - For development (runs with nodemon auto-restart):
     ```bash
     npm run dev
     ```

### Running the Frontend
1. Open the `frontend` folder.
2. Launch `home.html` in any modern web browser, or use a local development server (such as Live Server in VS Code) to serve the `frontend/` directory.
3. The frontend is pre-configured to communicate with the backend API running at `http://localhost:5000/api`.
