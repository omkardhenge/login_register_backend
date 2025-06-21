const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
