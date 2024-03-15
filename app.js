const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//My sql
const pool =mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user:'root',
    password:'',
    database:'bdd'
})

// Get all services
app.get('/service',(req,res) => {
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query('SELECT * FROM service',(err,rows) =>{
            connection.release()

            if(!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
            }
        )
    })
})

// Get all service by ID
app.get('/service/:id',(req,res) => {
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query('SELECT * FROM service WHERE id=?',[req.params.id],(err,rows) =>{
            connection.release()

            if(!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
            }
        )
    })
})

// Delete a rercord/service
app.delete('/service/:id',(req,res) => {
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query('DELETE FROM service WHERE id=?',[req.params.id],(err,rows) =>{
            connection.release()

            if(!err) {
                res.send(`Service with ID:${[req.params.id]} has been removed.`)
            }else{
                console.log(err)
            }
            }
        )
    })
})

// Add a rercord/service
app.post('/service',(req,res) => {
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        const params = req.body

        connection.query('INSERT INTO service SET ?',params,(err,rows) =>{
            connection.release()

            if(!err) {
                res.send(`Service with ID:${[params.nom]} has been added.`)
            }else{
                console.log(err)
            }
            }
        )
    })
})

// Update a record/service
app.put('/service',(req,res) => {
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {id, nom, description, image} = req.body


        connection.query('UPDATE service SET nom = ?, description = ?,image = ? WHERE id = ?',[nom,description,image,id],(err,rows) =>{
            connection.release()

            if(!err) {
                res.send(`Service with ID:${[nom]} has been updated.`)
            }else{
                console.log(err)
            }
            }
        )
    })
})



//export this router to use in our index.js
module.exports = app;



// Listen on environment port or 5000
app.listen(port,() => console.log(`Listen on port ${port}`))








