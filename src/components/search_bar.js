//there is a need to include the import of react as any JSX will be converted to React.createElment in JavaScript without it there will be an error
import React from 'react';

//create a search component for recieving query search terms.
const SearchBar = () => {
    return <input />;
};

//This provides the SearchBar component to other files. It needs to be imported to files that may need it.
export default SearchBar;