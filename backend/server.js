const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'https://portfolio-frontend-nwnu.onrender.com/' // Replace with your Render frontend URL
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_contact')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', require('./routes/contact'));

// Serve frontend
app.use(express.static(path.join(__dirname, '../portfolio/dist')));

app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '../portfolio/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
