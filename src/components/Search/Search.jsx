import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

// Search input 
const Search = () => {    
  // Destructure properties and functions from global context
  const { search, handleInput, fetchEdamamRecipes } = useGlobalContext();  
  const navigate = useNavigate(); 

  // Handle input change in the search field
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Call handleInput function to update the search state
    handleInput({name, value});
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch data from the Edamam API if the search is not empty
    if(search.trim() !== ''){    
      fetchEdamamRecipes(); 

      // Navigate to the '/recipe' route
      navigate('/recipe');
    }
  }
 
  return (
    <Form className="search" onSubmit={handleSubmit}>
      <Form.Label htmlFor="search" className='search-label'>Search</Form.Label>

      {/* Search input field */}
      <Form.Control 
        type="text" 
        name="search"
        placeholder="Search for recipes..."
        value={search}
        id="search"
        onChange={handleInputChange}
      />
    </Form>
  )
}

export default Search;