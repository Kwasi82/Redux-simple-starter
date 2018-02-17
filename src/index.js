//This calls the library 'react' from the node modules folder and assigns it to variable 'React'
import React from 'react';

// Create a new component. It should produce some HTML

// const represents a constant that never changes and is a variation on variable. It is ES6
const App = function() {
    return <div>Hi!</div>; // returnig what looks like HTML in JavaScript is JSX.
}

// Take this component's generated HTML and put it on the page (in the DOM)
React.render(App);
