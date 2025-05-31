// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ CI/CD Pipeline Deployment Successful!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
