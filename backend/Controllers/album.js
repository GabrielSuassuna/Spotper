const sql = require('mssql')

module.exports = {
    async show(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT descricao,tipo_compra, preco FROM Album`
        res.send(result.recordset)
    }
}