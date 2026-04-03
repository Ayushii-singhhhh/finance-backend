const express = require('express');
const app = express();

app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/records', require('./routes/recordRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

module.exports = app;