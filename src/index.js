import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// first component
const App = () => { // function declaration in Modern JS

    return (
        // Renders with JSX can only return a single, top-lvl element --> make a parent/top-lvl div
        <div>
            <h1>Hello World!</h1>
                <p>UHHHHHH???</p>
        </div>
    ) // return() is a JSX thing, not JS
}
// links component to html
ReactDOM.render(<App />, document.getElementById('root')); // component name



registerServiceWorker();
