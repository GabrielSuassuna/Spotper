const express = require('express')

const routes = express.Router()

const AlbumController = require('./Controllers/album')
const PlaylistController = require('./Controllers/playlist')

routes.get('/nomealbum',AlbumController.show);
routes.get('/allplaylist',PlaylistController.show)
routes.get('/showplaylisttrack/:id',PlaylistController.showTrack)
routes.post('/deletetrack/:cod_album/:num_faixa/:cod_play',PlaylistController.deleteTrack)
routes.get('/showallmusic',PlaylistController.showAllMusics)
routes.post('/addmusic/:cod_play/:num_faixa/:cod_album',PlaylistController.addMusic)
routes.post('/createplaylist/:nome', PlaylistController.createPlayList)
routes.post('/updatetocadas/:cod_play/:num_faixa/:cod_album',PlaylistController.updateTocadas)
routes.get('/getbysearch/:search',PlaylistController.getBySearch)

module.exports = routes