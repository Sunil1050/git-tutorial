const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to return the name
app.post('/name', (req, res) => {
  const { name } = req.body;

  if (name) {
    res.send(`Hi ${name}!`);
  } else {
    res.status(400).send('Name not provided.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
