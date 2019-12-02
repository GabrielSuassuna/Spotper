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
        //console.log(props.history.location.pathname)
        let params = props.history.location.pathname
        const id = params.slice(7)
        const res = await API.get('/showplaylisttrack/'+id)
        setData(res.data)
      }
      getData()
    })
    
    

    async function deleteTrack(){
        const res = await API.post('/deletetrack/2/1/1')
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
                                <PlayArrowIcon className="playButton"/>
                                <DeleteOutlineIcon onClick={()=> deleteTrack()}className="playButton"/>
                                <section className="musicInfo">
                                    <section className="musicItemTitle"> <p> {musica.descricao} </p></section>
                                    <section className="musicItemAutor"> <p> {musica.num_faixa} </p></section>
                                </section>
                                <section className="tempo">
                                    <p> {musica.tempo} </p>
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