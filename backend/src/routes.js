const express = require('express');
const PostController = require('./controllers/PostController'); 

const routes = express.Router();

routes.post('/post', PostController.store);
routes.get('/post', PostController.index);
routes.put('/post', PostController.update);
routes.delete('/post', PostController.destroy);


module.exports = routes;