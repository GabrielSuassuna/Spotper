import React from 'react'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import './DiskListening.css'

import Musica from '../../metadata/AM'

function DiskListening(){
    return(
        <>
            <section className="container">
                <img className="item" src="https://i.scdn.co/image/b93eac6763ccb68ba8f9a7658b4555a40d382128" />
            </section>

            <section className="musicItemBox">
                {Musica.map((musica)=>{
                    return(
                        <section className="musicItem">
                            <section className="musicItemContainer">
                                <PlayArrowIcon className="playButton"/>
                                <section className="musicInfo">
                                    <section className="musicItemTitle"> <p> {musica.nome} </p></section>
                                    <section className="musicItemAutor"> <p> {musica.autor} </p></section>
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