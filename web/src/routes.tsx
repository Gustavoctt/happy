import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/ophanagesMap';
import Orphanages from './pages/orphanage';
import OrphanagesCreate from './pages/createOrphanage';

import Success from './pages/success';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OrphanagesMap}/>

                <Route path="/orphanages/create" component={OrphanagesCreate}/>
                <Route path="/orphanages/:id" component={Orphanages}/>

                <Route path="/success" component={Success}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;