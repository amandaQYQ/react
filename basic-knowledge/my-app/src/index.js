import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './utils/serviceWorker';

const { lazy, Suspense } = React;
const MyApp = lazy(() => import('./components/App'));


class MyApps extends React.Component {
    fallback = () => {
        return (
            <div>Loading...</div>
        );
    }
    render() {
        return (
            <div>
                <Suspense fallback={this.fallback()}>
                    
                    <MyApp />
                </Suspense>
            </div>
        );
    }
}
ReactDOM.render(<MyApps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
