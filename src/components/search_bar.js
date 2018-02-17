//there is a need to include the import of react as any JSX will be converted to React.createElment in JavaScript without it there will be an error
import React from 'react';

//create a search component for recieving query search terms. This is described as a 'functional component' because it is a function.
/* const SearchBar = () => {
    return <input />;
};
*/

//This defines a class SearchBar and provide all the functionality of React.Component class. 
class SearchBar extends React.Component {

}

//This provides the SearchBar component to other files. It needs to be imported to files that may need it.
export default SearchBar;