import React,{useState} from 'react'

import MusicCards from '../MusicCards/MusicCards'
import './FirstScreen.css'

import AlbumCard from '../AlbumCard/AlbumCard'

import Musicas from '../../metadata/playlists'
import Albuns from '../../metadata/albuns'

function FirstScreen(){

    return(
        <div>
            <section className="Headers">
                <h1> Tocadas recentemente </h1>
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
                    Albuns.map((album)=>{
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