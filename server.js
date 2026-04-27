import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic spam prevention: check if required fields are present
const validateBooking = (req, res, next) => {
    const { name, phone, email } = req.body;
    
    if (!name || !phone || !email) {
        return res.status(400).json({ success: false, message: 'Name, phone, and email are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    next();
};

app.post('/api/book-appointment', validateBooking, async (req, res) => {
    try {
        const { name, phone, email, treatment, date, time, message } = req.body;

        // Sanitize inputs (basic)
        const sanitize = (str) => str ? str.toString().replace(/[<>]/g, '') : '';
        
        const data = {
            name: sanitize(name),
            phone: sanitize(phone),
            email: sanitize(email),
            treatment: sanitize(treatment),
            date: sanitize(date),
            time: sanitize(time),
            message: sanitize(message)
        };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'olivedental31@gmail.com', // Target clinic email
            subject: 'New Appointment Booking',
            text: `
New Appointment Booking Details:
--------------------------------
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Treatment: ${data.treatment || 'Not specified'}
Date: ${data.date || 'Not specified'}
Time: ${data.time || 'Not specified'}
Message: ${data.message || 'No message provided'}
            `
        };

        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
