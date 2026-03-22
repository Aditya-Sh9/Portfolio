const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST api/contact
// @desc    Submit a contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

// @route   GET api/contact
// @desc    Get all messages (for admin dashboard in future)
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        console.error('Fetch messages error:', error);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
