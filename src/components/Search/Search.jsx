import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Search = () => {    
  
  const { search, handleInput, fetchEdamamRecipes } = useGlobalContext();  
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleInput({name, value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch the data from API
    if(search.trim() !== ''){    
      fetchEdamamRecipes(); 
      navigate('/recipe');
    }
  }
 
  return (
    <Form className="search" onSubmit={handleSubmit}>
      <Form.Label htmlFor="search" className='search-label'>Search</Form.Label>
      <Form.Control 
        type="text" 
        name="search"
        placeholder="Explore the world..."
        value={search}
        id="search"
        onChange={handleInputChange}
      />
    </Form>
  )
}

export default Search;