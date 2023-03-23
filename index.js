const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/test';
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');
});
const app = express();
app.get('/users', (req, res) => {
  const db = client.db();
  db.collection('sales').find().toArray((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

