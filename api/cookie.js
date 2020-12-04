const express = require('express');
const morgan = require('morgan');
const fortuneCookie = require('fortune-cookie');
const randNum = () => Math.round(Math.random()*fortuneCookie.length)

module.exports = (req,res) => {

    const app = express()
    app.use(morgan('combined'))
    app.get('/api/cookie', (req, res) => {

        const count = parseInt(req.query['count']) || 1

        res.status(200);
        res.type('application/json')
        if(count == 1){
            res.json( {'cookie': fortuneCookie[randNum()] })
        }
        else{
            let c = []
            for(let i = 0; i < count; i++){
                c.push(fortuneCookie[randNum()])
            }
            res.json( {'cookie': c })

        }

    } )


    app(req,res)

}