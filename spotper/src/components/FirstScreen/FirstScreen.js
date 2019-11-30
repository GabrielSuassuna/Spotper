import React from 'react'

import MusicCards from '../MusicCards/MusicCards'
import './FirstScreen.css'

function FirstScreen(){
    return(
        <div>
            <section className="Headers">
                <h1> Tocadas Recentemente </h1>
            </section>

            <section className="MusicBox">
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
            </section>

            <section className="Headers">
                <h1> Suas PlayLists </h1>
            </section>

            <section className="MusicBox">
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
                <section className="MusicExternalCard">
                    <MusicCards className="MusicCard"/>
                </section>
            </section>
            
            
        </div>
    )
}

export default FirstScreen