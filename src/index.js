//This calls the library 'react' from the node modules folder and assigns it to variable 'React'. This manages components. 
import React from 'react';
//We use ReactDom library to do the actual rendoring to the DOM.
import ReactDOM from 'react-dom';

//imports the SearchBar component from search_bar.js. We need to add the exact folder reference using the relative path to in this case index.js. 
import SearchBar from './components/search_bar';

// Add youtube API key
const API_KEY = 'AIzaSyAiKWwTFikHPnt3CkV1XuQlRWGdVAK6h3s'; //'npm install --save youtube-api-search' installs youtube api search. '--save' means it saves to 'package.json' file with all the other packages.



// Create a new component. It should produce some HTML
// const represents a constant that never changes and is a variation on variable. It is ES6
const App = () => {
    // return <div>Hi!</div>; // This represents one version for returning a component // returnig what looks like HTML in JavaScript is JSX.
    return ( //This option can be used with parenthesis if one wants to do multi-line layout. If one wants to use multi-line layout without parenthesis then the first <div> needs to be in line with return statement or there will be an error.
        <div> 
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
// React.render contains the instance of App to be rendered and the second part refers to the reference for the rendered item appear in HTML
ReactDOM.render(<App />, document.querySelector('.container'));
