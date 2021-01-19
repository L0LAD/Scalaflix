import {app} from './app'
import {AddressInfo} from 'net'
const server = app.listen(5000, '0.0.0.0', () => {
    const {port, address} = server.address() as AddressInfo;
    console.log('Server listening on:','http://' + address + ':'+port);
});

import users from './users.json'

//All users
interface User {
  id: number;
  name: string;
  status: string;
  email: string;
  playlist: string[];
  suggestions: string[];
}

interface Playlist {
  name: string;
}

interface Suggestion {
  name: string;
}

app.get('/users', (req,res) => {
    res.status(200).json(users)
})

app.post('/users', (req,res) => {
    users.push(req.body)
    res.status(200).json(users)
})

//One user
app.get('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user : User = users.find(user => user.id === id)
    res.status(200).json(user)
})

app.put('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user : User = users.find(user => user.id === id)
    user.name = req.body.name,
    user.status = req.body.status,
    user.email = req.body.email,
    user.playlist = req.body.playlist,
    user.suggestions = req.body.suggestions,
    res.status(200).json(user)
})

app.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user : User = users.find(user => user.id === id)
    users.splice(users.indexOf(user),1)
    res.status(200).json(users)
})

//One user's playlist
app.get('/users/:id/playlist', (req,res) => {
    const id = parseInt(req.params.id)
    const user : User = users.find(user => user.id === id)
    res.status(200).json(user.playlist)
})

app.put('/users/:id/playlist', (req,res) => {
    const id = parseInt(req.params.id)
    let user : User = users.find(user => user.id === id)
    user.playlist = req.body
    res.status(200).json(user.playlist)
})

//One user's suggestions
app.get('/users/:id/suggestions', (req,res) => {
    const id = parseInt(req.params.id)
    const user : User = users.find(user => user.id === id)
    res.status(200).json(user.suggestions)
})

app.put('/users/:id/suggestions', (req,res) => {
    const id = parseInt(req.params.id)
    let user : User = users.find(user => user.id === id)
    user.suggestions = req.body
    res.status(200).json(user.suggestions)
})