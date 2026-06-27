# College-Connect 🎓

Your Gateway to Campus Life.

---

### 🏷️ Project Tags
`#college-connect` `#campus-life` `#full-stack` `#web-development` `#mongodb` `#expressjs` `#nodejs` `#javascript` `#vanilla-html-css-js` `#college-portal` `#canteen-ordering` `#event-booking` `#lost-and-found` `#peer-mentoring` `#job-portal` `#bootstrap5` `#rest-api` `#serverless-ready` `#vercel-ready` `#fullstack-javascript`

---

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/AnishaPaturi/College-Connect)
[![NodeJS Version](https://img.shields.io/badge/node-%3E%3D%2018.x-green?logo=node.js)](https://nodejs.org)
[![Express Version](https://img.shields.io/badge/Express-5.1.0-lightgrey?logo=express)](https://expressjs.com)
[![Mongoose Version](https://img.shields.io/badge/Mongoose-8.14.1-red?logo=mongodb)](https://mongoosejs.com)
[![Bootstrap CSS](https://img.shields.io/badge/Bootstrap-5.3.0-blueviolet?logo=bootstrap)](https://getbootstrap.com)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%26%20Render-black?logo=vercel)](https://vercel.com)

College-Connect is a full-stack web-based platform designed to bring everything college students need right to their fingertips. Whether it's tracking college events, ordering from the canteen, checking latest news, exploring company recruitment listings, reporting/finding lost items, or requesting peer help, this application streamlines campus life management.

---

## 📁 Project Structure

The project is refactored into a clean and organized structure:

```
College-Connect/
├── frontend/             # Static frontend web assets
│   ├── images/           # Images, logos, and icons used in the app
│   ├── index.html        # Main landing & entry page (renamed from home.html)
│   ├── index.css         # Styling for the main landing page
│   ├── index.js          # Interactive scripts for the landing page
│   ├── *.html            # Lowercase, clean HTML pages for each feature
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

---

## 🚀 Key Features

* 🍔 **Canteen Pre-ordering**: Browse the canteen menu, add food items to a cart, choose a payment method, and place pre-orders.
* 📅 **Event Booking & Registration**: Explore upcoming fests, workshops, and sports events, and register for them directly.
* 📰 **Campus & Global News**: Stay informed with live updates from the campus and top global news headlines.
* 💼 **Company Listings & Job Matches**: Find internships and job listings from top recruiters like TCS, Google, IBM, and Microsoft. Upload resumes and get matched.
* 🤝 **Peer Academic Help**: Seek support in difficult subjects or sign up as a helper to assist peers.
* 🔍 **Lost and Found Board**: Report lost items, search the board, or list found items for peer recovery.
* 🔐 **Authentication & Registration**: Secure sign-up and login utilizing the Node.js/Express.js backend and MongoDB database.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+), Bootstrap 5
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ORM)
* **Hosting / Deployment**:
  * **Frontend**: Static host (e.g., Vercel / Netlify)
  * **Backend**: Container host (e.g., Render / Render Web Services)

---

## 📡 API Reference & Backend Architecture

The backend provides a RESTful JSON API. All routes are prefixed with `/api`.

### 1. Authentication & Users (`/api/users`)
* `GET /api/users` - Fetch list of all registered users.
* `POST /api/users` - Register a new user profile.
* `POST /api/users/login` - Authenticate user credentials (roll number & password).

### 2. Events (`/api/events`)
* `GET /api/events` - Fetch all upcoming events (sorted by date).
* `POST /api/events` - Create/post a new campus event.

### 3. Canteen Menu (`/api/canteen`)
* `GET /api/canteen` - Fetch available food and beverage menu items.
* `POST /api/canteen` - Add new items to the menu.

### 4. Job Board & Internships (`/api/jobs`)
* `GET /api/jobs` - Fetch job and internship postings.
* `POST /api/jobs` - Create a new job listing.

### 5. Lost & Found (`/api/lost`)
* `GET /api/lost` - Get all reported lost and found items.
* `POST /api/lost` - Report a new lost or found item.

### 6. Peer Help (`/api/peerhelp`)
* `GET /api/peerhelp` - Get academic assistance requests.
* `POST /api/peerhelp` - Post a request for help or sign up to help.

### 7. Campus News (`/api/news`)
* `GET /api/news` - Fetch campus updates and news bulletins.
* `POST /api/news` - Post a new news article.

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `18.x` or higher).

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
   Create a `.env` file inside the `backend/` directory:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/databaseName?retryWrites=true&w=majority
   PORT=5000
   ```
4. Start the backend server:
   * **Development Mode** (auto-restart using nodemon):
     ```bash
     npm run dev
     ```
   * **Production Mode**:
     ```bash
     npm start
     ```

### Running the Frontend
1. Open the `frontend` folder.
2. Launch [index.html](file:///C:/Users/anish/OneDrive/College/Projects/College-Connect/frontend/index.html) in any modern web browser, or use a local development server (such as Live Server in VS Code) to serve the `frontend/` directory.
3. The frontend is pre-configured to communicate with the backend API running at `http://localhost:5000/api`.

---

## 🚀 Deployment Instructions

### Frontend (Static Site e.g. Vercel)
The entry point has been updated to [index.html](file:///C:/Users/anish/OneDrive/College/Projects/College-Connect/frontend/index.html).
1. Go to [Vercel Console](https://vercel.com) and create a new project.
2. Connect your GitHub repository.
3. Set **Root Directory** to `frontend`.
4. Deploy! No build settings or custom rewrites are needed because [index.html](file:///C:/Users/anish/OneDrive/College/Projects/College-Connect/frontend/index.html) is served by default at `/`.

### Backend (Web Service e.g. Render)
1. Go to [Render](https://render.com) and create a new **Web Service**.
2. Connect your GitHub repository.
3. Set **Root Directory** to `backend`.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add your environment variables (like `MONGO_URI` and `PORT`) in the Render Dashboard under **Environment**.
