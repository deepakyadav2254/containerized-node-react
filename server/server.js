const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

mongoose
  .connect('mongodb://127.0.0.1:27017/my-db')
  .then(() => {
    console.log('mongoose is connected');
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
const books = [];

const booksSchema = new Schema({
  title: String,
});

const Book = mongoose.model('Book', booksSchema);

const bookOne = new Book({ title: 'harrypotter' });

bookOne
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

app.get('/books', (req, res) => {
  res.status(200).send(books);
});

app.post('/books', (req, res) => {
  console.log(req.body);
  books.push(req.body);
  res.status(201).send('book is created');
});

app.listen(8000, () => {
  console.log('server is listening on port 8000');
});
