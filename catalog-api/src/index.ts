import {app} from './app'
import {AddressInfo} from 'net'
const server = app.listen(5005, '0.0.0.0', () => {
    const {port, address} = server.address() as AddressInfo;
    console.log('Server listening on:','http://' + address + ':'+port);
});

import people from './people.json'
import genres from './genres.json'
import movies from './movies.json'
import archives from './archives.json'

/********** People **********/
interface Person {
  id: number;
  name: string;
  role: string;
}

app.get('/people', (req,res) => {
    res.status(200).json(people)
})

app.post('/people', (req,res) => {
    people.push(req.body)
    res.status(200).json(people)
})

app.get('/people/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const person : Person = people.find(person => person.id === id)
    res.status(200).json(person)
})

app.put('/people/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let person : Person = people.find(person => person.id === id)
    person.name = req.body.name,
    person.role = req.body.role,
    res.status(200).json(person)
})

app.delete('/people/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let person : Person = people.find(person => person.id === id)
    people.splice(people.indexOf(person),1)
    res.status(200).json(people)
})



/********** Genres **********/
interface Genre {
  id: number;
  description: string;
}

app.get('/genres', (req,res) => {
    res.status(200).json(genres)
})

app.post('/genres', (req,res) => {
    genres.push(req.body)
    res.status(200).json(genres)
})

app.get('/genres/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const genre : Genre = genres.find(genre => genre.id === id)
    res.status(200).json(genre)
})

app.put('/genres/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let genre : Genre = genres.find(genre => genre.id === id)
    genre.description = req.body.description,
    res.status(200).json(genre)
})

app.delete('/genres/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let genre : Genre = genres.find(genre => genre.id === id)
    genres.splice(genres.indexOf(genre),1)
    res.status(200).json(genres)
})

/********** Movies **********/
interface Movie {
  id: number;
  title: string;
  director: number;
  cast: number[];
  duration: number;
  genres: number[];
  tags: string[];
}

app.get('/movies', (req,res) => {
    res.status(200).json(movies)
})

app.post('/movies', (req,res) => {
    movies.push(req.body)
    res.status(200).json(movies)
})

app.get('/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const movie : Movie = movies.find(movie => movie.id === id)
    res.status(200).json(movie)
})

app.put('/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie : Movie = movies.find(movie => movie.id === id)
    movie.title = req.body.title,
    movie.director = req.body.director,
    movie.cast = req.body.cast,
    movie.duration = req.body.duration,
    movie.genres = req.body.genres,
    movie.tags = req.body.tags,
    res.status(200).json(movie)
})

app.delete('/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie : Movie = movies.find(movie => movie.id === id)
    archives.push(movie);
    movies.splice(movies.indexOf(movie),1)
    res.status(200).json(movies)
})


/********** Movies **********/

app.get('/archives', (req,res) => {
    res.status(200).json(archives)
})

app.delete('/archives/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie : Movie = movies.find(movie => movie.id === id)
    archives.splice(archives.indexOf(movie),1)
    res.status(200).json(archives)
})