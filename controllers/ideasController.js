const express = require('express')
const Idea = require('../db/models/Idea')
const router = express.Router()

router.get('/', async (req, res) => {
    try { 
        const ideas = await Idea.find({})
        res.json(ideas)
    } catch(error) {
        console.log(error)
}
})

router.post('/', async (req, res) => {
    try {
        const newIdea = await Idea.create({})
        res.json(newIdea)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router