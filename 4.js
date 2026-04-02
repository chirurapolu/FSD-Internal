//Student management CRUD
const express = require('express');
const app = express();
app.use(express.json());

let students = [];
let nextId = 1;

// POST - Add student
app.post('/students', (req, res) => {
    const student = { id: nextId++, ...req.body };
    students.push(student);
    res.status(201).json(student);
});

// GET - All students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET - By ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    student ? res.json(student) : res.status(404).json({ msg: "Not found" });
});

// PUT - Update
app.put('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);
    if (index === -1) return res.status(404).json({ msg: "Not found" });
    students[index] = { ...students[index], ...req.body };
    res.json(students[index]);
});

// DELETE
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.json({ msg: "Deleted" });
});

app.listen(3000, () => console.log('Server running on port 3000'));