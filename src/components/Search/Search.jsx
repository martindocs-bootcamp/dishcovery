import { useState } from 'react';

const Search = () => {
  const[searchInput, setInputSearch] = useState('');
 
  return (
    <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
      <label htmlFor="search" className='search-label'>Search</label>
      <input 
        type="text" 
        name="search"
        placeholder="Search..."
        value={searchInput}
        onChange={(e)=> setInputSearch(e.target.value)}
      />
    </form>
  )
}

export default Search;