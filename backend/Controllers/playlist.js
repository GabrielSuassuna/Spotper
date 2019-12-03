const sql = require('mssql')

module.exports = {
    async show(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`SELECT * from Playlist`
        res.send(result.recordset)
    },

    async showTrack(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`select f.descricao, f.tempo, f.num_faixa, f.cod_album,fp.vezes_tocada from Faixa as f, Playlist as p, Faixa_Playlist as fp
        where f.num_faixa=fp.num_faixa and f.cod_album=fp.cod_album and fp.cod_playlist=${req.params.id}
        GROUP BY f.descricao, f.tempo, f.num_faixa, f.cod_album,fp.vezes_tocada
`
        res.send(result.recordset)
    },

    async deleteTrack(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')
        const result = await sql.query`
        delete from Faixa_Playlist where cod_album = ${req.params.cod_album} and num_faixa = ${req.params.num_faixa} 
        and cod_playlist = ${req.params.cod_play}`
        
        res.send(result.recordset)
    },

    async showAllMusics(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`
        select * from Faixa`
        res.send(result.recordset)
    },

    async addMusic(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`
        insert into Faixa_Playlist values (${cod_play},${num_faixa}, ${cod_album}, 0, default)`
        res.send(result.recordset)
    },

    async createPlayList(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`
        insert into Playlist values ((select max(cod)+1 from Playlist),${req.params.nome}, default, null)`
        res.send(result.recordset)
    },

    async updateTocadas(req,res){
        
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`
        
    update Faixa_Playlist set vezes_tocada = (vezes_tocada+1) where cod_playlist = ${req.params.cod_play} and num_faixa=${req.params.num_faixa} and cod_album = ${req.params.cod_album}
        `
        res.send(result.recordset)
    },

    async getBySearch(req,res){
        await sql.connect('mssql://SA:Pvoc8783@localhost/BDSpotPer')

        const result = await sql.query`
        select * from Faixa where descricao like '%'+${req.params.search}+'%'`
        res.send(result.recordset)
    }
}