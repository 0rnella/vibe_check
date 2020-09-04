const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('VIBE CHECK!');
});

app.listen(port, () => {
  console.log(`Vibe check at http://localhost:${port}`)
});