import React,{useState,useEffect} from 'react'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


import './DiskListening.css'

import Musica from '../../metadata/AM'

import API from '../../API/API'

function DiskListening(props){

    const [data,setData] = useState([])

    useEffect(()=>{
      async function getData(){
        let params = props.history.location.pathname
        const id = params.slice(7)
        const res = await API.get('/showplaylisttrack/'+id)
        setData(res.data)
      }
      getData()
    })
    
    async function updateListened(musica){
        let params = props.history.location.pathname
        const codplay = params.slice(7)
        const cod_album = musica.cod_album
        const num_faixa = musica.num_faixa
        const res = await API.post('/updatetocadas/'+codplay+'/'+num_faixa+'/'+cod_album)
        alert('Dar f5 pode ou não ser necessario para renderizar mudanças')
        return res
    }

    async function deleteTrack(musica){
        let params = props.history.location.pathname
        const codplay = params.slice(7)
        const cod_album = musica.cod_album
        const num_faixa = musica.num_faixa
        const res = await API.post('/deletetrack/'+cod_album+'/'+num_faixa+'/'+codplay)
        alert('Dar f5 pode ou não ser necessario para renderizar mudanças')
        return res
    }

    return(
        <>
            <section className="container">
                <img className="item" src="https://i.scdn.co/image/b93eac6763ccb68ba8f9a7658b4555a40d382128" />
            </section>

            <section className="musicItemBox">
                {data.map((musica)=>{
                    return(
                        <section className="musicItem">
                            <section className="musicItemContainer">
                                <PlayArrowIcon onClick={()=>updateListened(musica)} className="playButton"/>
                                <DeleteOutlineIcon onClick={()=>deleteTrack(musica)}className="playButton"/>
                                <section className="musicInfo">
                                    <section className="musicItemTitle"> <p> {musica.descricao} </p></section>
                                    <section className="musicItemAutor"> <p> Nº: {musica.num_faixa} Nº tocadas: {musica.vezes_tocada} </p></section>
                                </section>
                                <section className="tempo">
                                    <p> Tempo: {musica.tempo} </p>
                                </section>
                            </section>     
                        </section>
    
                    )
                })}
            </section>
        </>
    )
}

export default DiskListening