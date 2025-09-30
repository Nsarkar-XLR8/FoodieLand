require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const router = require('./router/auth-route');
const connectDB = require('./db');
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/api/auth', router);



connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});





