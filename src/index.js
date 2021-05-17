const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3333, () => {
  console.log('Application started at port 3333.');
});
