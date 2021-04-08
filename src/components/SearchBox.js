import React from 'react';

const SearchBox = ({searchfield, searchChange})=>{ 
    return (
            <div >
                <input className='pa3 ba b--green bg-lightest-blue'
                       type="text" 
                       placeholder="Search Robot"
                       onChange={searchChange}
                     />
            </div>
        )
}
export default SearchBox;