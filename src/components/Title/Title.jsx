import { PropTypes } from 'prop-types';
function Title({ title }) {  
 
  return (   
      <h2 className="title">{title}</h2>   
  );
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title;
