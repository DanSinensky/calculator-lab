require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/calcquery/:num1/:num2', (request, response) => {
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    const operation = request.query.operation

    if (operation === 'add'){
        response.send(`The sum is ${num1 + num2}`)
    } else if (operation === 'subtract'){
        response.send(`The difference is ${num1 - num2}`)
    } else if (operation === 'multiply'){
        response.send(`The product is ${num1 * num2}`)
    } else if (operation === 'divide'){
        response.send(`The quotient is ${num1/num2}`)
    } else if (operation === 'exponent'){
        response.send(`The exponent value is ${num1**num2}`)
    } else {
        response.send(`no operation`);
    }
})

app.listen(port, ()=> {
    console.log(`Currently listening to ${port}`)
})