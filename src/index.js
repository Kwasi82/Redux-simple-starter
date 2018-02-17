//This calls the library 'react' from the node modules folder and assigns it to variable 'React'. This manages components. 
import React from 'react';
//We use ReactDom library to do the actual rendoring to the DOM.
import ReactDOM from 'react-dom';


// Create a new component. It should produce some HTML

// const represents a constant that never changes and is a variation on variable. It is ES6
const App = function() {
    return <div>Hi!</div>; // returnig what looks like HTML in JavaScript is JSX.
}

// Take this component's generated HTML and put it on the page (in the DOM)
// React.render contains the instance of App to be rendered and the second part refers to the reference for the rendered item appear in HTML
React.render(<App />, document.querySelector('.container'));
