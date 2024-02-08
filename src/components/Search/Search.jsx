import { useGlobalContext } from '../../hooks/useGlobalContext'; 
const Search = () => {  
  const { search, handleInput } = useGlobalContext();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleInput({name, value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch the data from API
    if(search !== ''){
      // fetchData(search);
    }
  }
 
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search" className='search-label'>Search</label>
      <input 
        type="text" 
        name="search"
        placeholder="Search..."
        value={search}
        id="search"
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Search;