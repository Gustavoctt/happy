import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import OrphanatesMap from './pages/ophanatesMap';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OrphanatesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;