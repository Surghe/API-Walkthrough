import express from "express";
import dotenv from "dotenv";
import db from './db/conn.mjs';
import grades from './routes/grades.mjs';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use('/api/grades', grades);

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).json({ msg :'Server Error'});
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
