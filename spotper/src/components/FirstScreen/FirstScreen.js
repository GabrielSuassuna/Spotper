import React from 'react'

import MusicCards from '../MusicCards/MusicCards'
import './FirstScreen.css'

function FirstScreen(){
    return(
        <div>
            <h1> Tocadas Recentemente </h1>

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