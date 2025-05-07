const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
    fullname: String,
    rollno: String,
    email: String,
    phone: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// API Endpoint for Registration
app.post('/register', async (req, res) => {
    try {
        const { fullname, rollno, email, phone, password } = req.body;

        // Validation (you can expand this)
        if (!fullname || !rollno || !email || !phone || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Save to MongoDB
        const newUser = new User({ fullname, rollno, email, phone, password });
        await newUser.save();

        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
