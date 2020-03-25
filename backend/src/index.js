//import express
const express = require('express')
// import routes
const routes = require('./routes')
// import cors
const cors = require('cors')

//start app
const app = express()


//Without params this cors allow that all app get data from this backend
app.use(cors())

// before all request, get JSON body from insomnia and make convert it into something understandable for javascript
app.use(express.json())

/*  
    Route / Resource
*/

/* 

    Method HTTP:
    GET     --> To search a backend's information
    POST    --> To create a backend's information
    PUT     --> To update a backend's information
    DELETE  --> To delete a backend's information

*/

/*  

    Params types

    Query           --> Named params send after route "?" (filters, paginations) /  req.query
    Route           --> Params used to identify resources / req.params
    Request Body    --> Used to create or change resources / req.body

*/

/* 
    DATABASE

    SQL --> SELECT * FROM users
    Query Biulder --> table(users).select("*").where()

*/

//routes
app.use(routes)

app.listen(8000)