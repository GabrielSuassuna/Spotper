import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import FirstScreen from '../FirstScreen/FirstScreen'
import Search from '../TrackSearch/TrackSearch'
import DiskListening from '../DiskListening/DiskListening'

function Roteador(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={FirstScreen}/>
                <Route path = "/search" component={Search}/>
                <Route path= "/album" component={DiskListening}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Roteador;