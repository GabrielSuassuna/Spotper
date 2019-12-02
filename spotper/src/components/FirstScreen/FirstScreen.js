import React,{useState,useEffect} from 'react'

import MusicCards from '../MusicCards/MusicCards'
import './FirstScreen.css'

import AlbumCard from '../AlbumCard/AlbumCard'

import Musicas from '../../metadata/playlists'
import Albuns from '../../metadata/albuns'

import API from '../../API/API'

function FirstScreen(){
    const [data,setData] = useState([])

    useEffect(()=>{
        async function getData(){
            const res = await API.get('/nomealbum')
            setData(res.data)
        }
        getData()
    },[])

    

    
    return(
        <div>
            <section className="Headers">
                <button onClick={()=>console.log(data)}><h1> Tocadas recentemente </h1></button>
            </section>

            <section className="MusicBox">
                {
                    Musicas.map((music)=>{
                        return(
                        <section className="MusicExternalCard">
                            <MusicCards className="MusicCard" 
                            info = {music}/>
                        </section>
                    )}
                    )
                    
                }
                
            </section>

            <section className="Headers">
                <h1> Álbuns disponíveis </h1>
            </section>

            <section className="MusicBox">
                {
                    data.map((album)=>{
                        return(
                        <section className="MusicExternalCard">
                            <AlbumCard 
                            info = {album}/>
                        </section>
                    )}
                    )
                    
                }  
            </section>
            
            
        </div>
    )
}

export default FirstScreen