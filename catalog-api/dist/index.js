"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(5005, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server listening on:', 'http://' + address + ':' + port);
});
const people_json_1 = __importDefault(require("./people.json"));
const genres_json_1 = __importDefault(require("./genres.json"));
const movies_json_1 = __importDefault(require("./movies.json"));
app_1.app.get('/people', (req, res) => {
    res.status(200).json(people_json_1.default);
});
app_1.app.post('/people', (req, res) => {
    people_json_1.default.push(req.body);
    res.status(200).json(people_json_1.default);
});
app_1.app.get('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const person = people_json_1.default.find(person => person.id === id);
    res.status(200).json(person);
});
app_1.app.put('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let person = people_json_1.default.find(person => person.id === id);
    person.name = req.body.name,
        person.role = req.body.role,
        res.status(200).json(person);
});
app_1.app.delete('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let person = people_json_1.default.find(person => person.id === id);
    people_json_1.default.splice(people_json_1.default.indexOf(person), 1);
    res.status(200).json(people_json_1.default);
});
app_1.app.get('/genres', (req, res) => {
    res.status(200).json(genres_json_1.default);
});
app_1.app.post('/genres', (req, res) => {
    genres_json_1.default.push(req.body);
    res.status(200).json(genres_json_1.default);
});
app_1.app.get('/genres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const genre = genres_json_1.default.find(genre => genre.id === id);
    res.status(200).json(genre);
});
app_1.app.put('/genres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let genre = genres_json_1.default.find(genre => genre.id === id);
    genre.description = req.body.description,
        res.status(200).json(genre);
});
app_1.app.delete('/genres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let genre = genres_json_1.default.find(genre => genre.id === id);
    genres_json_1.default.splice(genres_json_1.default.indexOf(genre), 1);
    res.status(200).json(genres_json_1.default);
});
app_1.app.get('/movies', (req, res) => {
    res.status(200).json(movies_json_1.default);
});
app_1.app.post('/movies', (req, res) => {
    movies_json_1.default.push(req.body);
    res.status(200).json(movies_json_1.default);
});
app_1.app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies_json_1.default.find(movie => movie.id === id);
    res.status(200).json(movie);
});
app_1.app.put('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let movie = movies_json_1.default.find(movie => movie.id === id);
    movie.title = req.body.title,
        movie.director = req.body.director,
        movie.cast = req.body.cast,
        movie.duration = req.body.duration,
        movie.genres = req.body.genres,
        res.status(200).json(movie);
});
app_1.app.delete('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let movie = movies_json_1.default.find(movie => movie.id === id);
    movies_json_1.default.splice(movies_json_1.default.indexOf(movie), 1);
    res.status(200).json(movies_json_1.default);
});
//# sourceMappingURL=index.js.map