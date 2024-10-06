const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hellow from my first ever server.');
})

app.get('/data', (req, res) => {
  res.send('Hellow from my first ever server DATA.');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});