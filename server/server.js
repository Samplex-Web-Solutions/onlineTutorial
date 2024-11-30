// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quiz'); // Import the quiz routes


//import quizRoutes from './routes/quiz.js';


const app = express();

app.use(express.json());


// Load environment variables from .env
dotenv.config();




// Middleware

app.use(bodyParser.json()); // Parse JSON data




// Enable CORS
app.use(cors());
app.get('/test-cors', (req, res) => {
  res.send('CORS is working!');
});


// Allow only frontend to access backend during development
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,POST', // Allow specific methods
}));


app.use('/api/quiz', quizRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('LearnX Database connected'))
  .catch((err) => console.log(err));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
