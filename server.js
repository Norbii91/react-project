// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;
const cors = require('cors');
const { json } = require('react-router-dom');

const filePath = "../../data/users.json"

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
  const { name, password } = req.body;

  // Save data to a JSON file (for simplicity)
  const data = JSON.stringify({ name, password }, null, 2);
  const filePath = path.join(__dirname, 'data', 'users.json');

  try {
    let users = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      users.push(JSON.parse(content));
    }

    users.push(JSON.parse(data)); // Parse the data before pushing to the array
    const updatedContent = JSON.stringify(users);
    fs.writeFileSync(filePath, updatedContent, 'utf-8');

    console.log('Registration data saved:', { name, password });
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving registration data:', error);
    res.status(500).json({ error: 'Error saving registration data' });
  }
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
