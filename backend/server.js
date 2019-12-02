const express = require('express')
const app = express()

app.get('/',async function(req,res){

    const sql = require('mssql')

    await sql.connect('mssql://teste:teste@localhost/database')
    const result = await sql.query`select * from mytable`
    console.dir(result)
})

app.listen(3333)
