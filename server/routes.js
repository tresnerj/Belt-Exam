const controller = require('./controller');


module.exports = (app)=>{
    app.get('/api/allpets', controller.pets)
    app.get('/api/pet/:id', controller.view)
    app.post('/api/pet/new', controller.new)
    app.put('/api/pet/:id', controller.update)
    app.delete('/api/pet/:id', controller.destroy)

}