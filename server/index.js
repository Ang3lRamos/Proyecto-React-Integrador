const express = require('express')
const app = express()
const mongo;
const cors = require('cors')

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})

const db = mongo.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: ""
})

app.post("/register", (req, res) => {
    const sentEmail = req.body.Email
    const sentUsername = req.body.Username
    const sentPassword = req.body.Password 

    const MONGO = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)"

    const Values = [sentEmail, sentUsername, sentPassword]

    db.query(MONGO,Values,(err, results) => {
        if(err){
            res.send(err)
        }
        else{
            console.log("User inserted succesfully")
            res.send({message: "User added"})
        }
    })
})

app.post("./login",(req, res) => {
    const sentloginUserName = req.body.UserName
    const sentloginPassword = req.body.Password

    const MONGO = "SELECT * FROM users WHERE username = ? && password = ?"
    const Values = [sentloginUserName, sentloginPassword]

    db.query(MONGO,Values,(err, results) => {
        if(err){
            res.send({error: err})
        }
        if(results.lenght > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials don't match`})
        }
    })
})