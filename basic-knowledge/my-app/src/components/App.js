import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// components
import { Jsx } from './①JSX';
import { Comp } from './②comp';
import { PS } from './③props&state';
import { Lifecycle } from './④lifecycles';
import { Events } from './⑤events';
import { Condition } from './⑥condition';
import { List } from './⑦list&key';
import { Form } from './⑧form';
import { Context } from './⑨context';
import { ErrorB } from './⑩errorBoundaries';
import { Refs } from './11.refs';
import { Fragments } from './12.fragments';
import { HOC } from './13.HOC';
import { Optimizing } from './14.optimizing';
import { Portals } from './15.portals';
import { InEs5 } from './16.InEs5';
import { Reconciliation } from './17.reconciliation';
import { RenderProps } from './18.renderProps';
import { TypeChecking } from './19.typeChecking';
import { Hook } from './20.hook';

function App() {
    return (
        <Router>
            <Route exact path='/jsx' component={Jsx} />
            <Route path='/components' component={Comp} />
            <Route path='/ps' component={PS} />
            <Route path='/lifecycle' component={Lifecycle} />
            <Route path='/events' component={Events} />
            <Route path='/condition' component={Condition} />
            <Route path='/list' component={List} />
            <Route path='/form' component={Form} />
            <Route path='/context' component={Context} />
            <Route path='/error' component={ErrorB} />
            <Route path='/refs' component={Refs} />
            <Route path='/fragments' component={Fragments} />
            <Route path='/hoc' component={HOC} />
            <Route path='/optimizing' component={Optimizing} />
            <Route path='/portals' component={Portals} />
            <Route path='/inEs5' component={InEs5} />
            <Route path='/reconciliation' component={Reconciliation} />
            <Route path='/renderProps' component={RenderProps} />
            <Route path='/typeChecking' component={TypeChecking} />
            <Route path='/hook' component={Hook} />
            {/* <Redirect to='/jsx' /> */}
        </Router>
    );
}

export default App;
