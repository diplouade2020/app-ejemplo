
const express = require('express')

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, () => {
    console.log('Server up & running en puerto 2'+PORT)
})