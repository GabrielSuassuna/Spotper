import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import FirstScreen from '../FirstScreen/FirstScreen'

function Roteador(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={FirstScreen}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Roteador;