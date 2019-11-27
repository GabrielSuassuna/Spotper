import React from 'react'

import MusicCards from '../MusicCards/MusicCards'
import './FirstScreen.css'

function FirstScreen(){
    return(
        <div>
            <h1> Tocadas Recentemente </h1>

            <section className="MusicBox">
                <MusicCards className="MusicCard"/>
                
                <MusicCards className="MusicCard"/>
                
                <MusicCards className="MusicCard"/>
                
                <MusicCards className="MusicCard"/>
            </section>
            
        </div>
    )
}

export default FirstScreen