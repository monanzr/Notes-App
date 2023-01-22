import { MdSearch } from 'react-icons/md'

import './Search.css'
const Search = (props) => {
    const searchNoteHandler = (event) => {
        props.onSearchNote(event.target.value)
    }

    return (
      <div className="search">
        <MdSearch className='search__icon' size="1.3em"/>
        <input onChange={searchNoteHandler} type='text' placeholder='Type to search...'/>
      </div>
    );
  }
  
  export default Search;
  