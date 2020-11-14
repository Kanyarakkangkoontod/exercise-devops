const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let items = [{id:60160219,name:'Kanyarak Kangkoontod'},{id:60160032,name:'Chanakan'}]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/items', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app