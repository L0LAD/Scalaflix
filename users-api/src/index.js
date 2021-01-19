const express = require('express')
const app = express()
const users = require('./users.json')

// Middleware
app.use(express.json())

//All users
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
    const user = users.find(user => user.id === id)
    res.status(200).json(user)
})

app.put('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.name = req.body.name,
    user.email = req.body.email,
    user.age = req.body.age,
    user.playlist = req.body.playlist,
    user.suggestions = req.body.suggestions,
    res.status(200).json(user)
})

app.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    users.splice(users.indexOf(user),1)
    res.status(200).json(users)
})

//One user's playlist
app.get('/users/:id/playlist', (req,res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.status(200).json(user.playlist)
})

app.put('/users/:id/playlist', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.playlist = req.body
    res.status(200).json(user.playlist)
})

//One user's suggestions
app.get('/users/:id/suggestions', (req,res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    res.status(200).json(user.suggestions)
})

app.put('/users/:id/suggestions', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.suggestions = req.body
    res.status(200).json(user.suggestions)
})

//Lancement
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})