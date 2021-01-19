"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(5000, '0.0.0.0', () => {
    const { port, address } = server.address();
    console.log('Server listening on:', 'http://' + address + ':' + port);
});
const users_json_1 = __importDefault(require("./users.json"));
app_1.app.get('/users', (req, res) => {
    res.status(200).json(users_json_1.default);
});
app_1.app.post('/users', (req, res) => {
    users_json_1.default.push(req.body);
    res.status(200).json(users_json_1.default);
});
//One user
app_1.app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users_json_1.default.find(user => user.id === id);
    res.status(200).json(user);
});
app_1.app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users_json_1.default.find(user => user.id === id);
    user.name = req.body.name,
        user.status = req.body.status,
        user.email = req.body.email,
        user.playlist = req.body.playlist,
        user.suggestions = req.body.suggestions,
        res.status(200).json(user);
});
app_1.app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users_json_1.default.find(user => user.id === id);
    users_json_1.default.splice(users_json_1.default.indexOf(user), 1);
    res.status(200).json(users_json_1.default);
});
//One user's playlist
app_1.app.get('/users/:id/playlist', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users_json_1.default.find(user => user.id === id);
    res.status(200).json(user.playlist);
});
app_1.app.put('/users/:id/playlist', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users_json_1.default.find(user => user.id === id);
    user.playlist = req.body;
    res.status(200).json(user.playlist);
});
//One user's suggestions
app_1.app.get('/users/:id/suggestions', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users_json_1.default.find(user => user.id === id);
    res.status(200).json(user.suggestions);
});
app_1.app.put('/users/:id/suggestions', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users_json_1.default.find(user => user.id === id);
    user.suggestions = req.body;
    res.status(200).json(user.suggestions);
});
//# sourceMappingURL=index.js.map