const Signup = require('../models/userModel');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')




const home = (req, res) => {
    res.send('Hello from Express!');
}

const signup = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'All fields are require' })
        }

        const newUser = new Signup({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required!" });
        }

        // Find user
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }

        // For now: plain-text comparison (not safe, better use bcrypt)
        if (user.password !== password) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }

        // Generate token AFTER confirming user exists
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

const contact = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const transPorter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `📩 New Contact Form: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
        };
        await transPorter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });

    }
}


const checkout = async (req, res) => {
    const { amount, orderId, paymentMethod } = req.body;

    if (paymentMethod === "bkash") {
        // Call bKash API here
        return res.json({ redirectURL: "https://bkash.com/payment/123" });
    }

    if (paymentMethod === "nagad") {
        // Call Nagad API here
        return res.json({ redirectURL: "https://nagad.com/payment/456" });
    }

    if (paymentMethod === "rocket") {
        // Call Rocket API here
        return res.json({ redirectURL: "https://rocket.com/payment/789" });
    }

    res.status(400).json({ message: "Unsupported payment method" });


}


module.exports = { home, signup, login, checkout, contact }