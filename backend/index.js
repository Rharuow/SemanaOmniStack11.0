//import express
const express = require('express')

//start app
const app = express()

//routes
app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11,0',
        aluno: "Harysson Soares",
    })
})

app.listen(8000)