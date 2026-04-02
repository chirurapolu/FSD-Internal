//Movie CRUD (Express.js + MongoDB)
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/moviedb');

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: String, director: String, releaseYear: Number, genre: String
}));

app.post('/movies', async (req, res) => {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
});

app.get('/movies', async (req, res) => {
    res.json(await Movie.find());
});

app.get('/movies/:id', async (req, res) => {
    res.json(await Movie.findById(req.params.id));
});

app.put('/movies/:id', async (req, res) => {
    res.json(await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

app.delete('/movies/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
});

app.listen(3000, () => console.log('Server on port 3000'));
