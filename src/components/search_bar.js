//there is a need to include the import of react as any JSX will be converted to React.createElment in JavaScript without it there will be an error
// import React from 'react'; //*1 This is the normal version
import React, { Component } from 'react'; //This is an ES6 syntax verison

//create a search component for recieving query search terms. This is described as a 'functional component' because it is a function.
/* const SearchBar = () => {
    return <input />;
};
*/

/* This option shows one way to handle events with two methods.

//This defines a class SearchBar and provide all the functionality of React.Component class. 
//class SearchBar extends React.Component { //*1 This is the normal version
class SearchBar extends Component { //This is an ES6 syntax version
    render() { //This is how method is defined on a class. Every class needs a render method.
        //This becomes the event listener. JavaScript variables are placed in curly brackets. We can access HTML properties like 'onChange' 
        return <input onChange={this.onInputChange} />;
    }
    //This is the event handler
    onInputChange(event) {
        console.log(event.target.value);
    }
}

*/

// This option uses a arrow function for condensing code.
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

//This provides the SearchBar component to other files. It needs to be imported to files that may need it.
export default SearchBar;