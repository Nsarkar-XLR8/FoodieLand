require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-route');
const connectDB = require('./db');
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/api/auth', router);


// ✅ API routes
app.use("/api/meals", require("./routes/meals")); 
// add your other routes here

// ✅ Serve React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});





