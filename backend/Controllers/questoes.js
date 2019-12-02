const sql = require('mssql')

module.exports = {
    async q1(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT a.cod FROM album a WHERE a.preco > (SELECT AVG(preco) FROM album)`
        res.send(result.recordset)
    },
    async q2(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT descricao,tipo_compra, preco FROM Album`
        res.send(result.recordset)
    },
    async q3(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT descricao,tipo_compra, preco FROM Album`
        res.send(result.recordset)
    },
    async q4(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT descricao,tipo_compra, preco FROM Album`
        res.send(result.recordset)
    }
}