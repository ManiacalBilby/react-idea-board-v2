require('dotenv').config()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
const Idea = require('./models/Idea')

const mars = new Idea({
    title: 'Fly to Mars',
    description: "Earth isn't read enough. Let's move to a new planet"
})

const tesla = new Idea({
    title: 'Build a Car',
    description: "Gas is too expensive. I'm gonna build a car that doesn't need"
})

Idea.remove({})
.then(() => mars.save())
.then(() => tesla.save())
.then(() => console.log('Successful Save!!!'))
.then(() => mongoose.connection.close())
