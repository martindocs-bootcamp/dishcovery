import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import Form from 'react-bootstrap/Form';

const Search = () => {    
  
  const { search, handleInput, fetchEdamamRecipes } = useGlobalContext();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleInput({name, value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch the data from API
    if(search !== ''){    
      fetchEdamamRecipes(); 
    }
  }
 
  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <Form.Label htmlFor="search" className='search-label'>Search</Form.Label>
      <Form.Control 
        type="text" 
        name="search"
        placeholder="Search..."
        value={search}
        id="search"
        onChange={handleInputChange}
      />
    </Form>
  )
}

export default Search;