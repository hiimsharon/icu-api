require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const patientsRoute = require('./routes/patients');

const app = express();
app.use(express.json());

console.log("🔍 Using MongoDB URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/patients', patientsRoute);

// 保活根路由
app.get("/", (req, res) => {
  res.send("✅ ICU API server is running");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
