import PropTypes from 'prop-types';
import { FaHeart, FaPrint } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

import { 
  EmailShareButton,
  EmailIcon,

  FacebookShareButton, 
  FacebookIcon,

  TwitterShareButton,
  TwitterIcon,
  
} from 'react-share';

// ShareButtons component for all social buttons
const ShareButtons = ({url, addToLocalStorage, handlePrint, title, image, id}) => {

  return (   
    <section className='share no-print'>

      {/* Email share button */}
      <EmailShareButton url={url} className="share-btn">
        <EmailIcon size={36} round />
        <p>Email</p>
      </EmailShareButton>

      {/* Facebook share button */}
      <FacebookShareButton url={url} className="share-btn">
        <FacebookIcon size={36} round />
        <p>Share</p>
      </FacebookShareButton>   

      {/* Twitter/X share button */}  
      <TwitterShareButton url={url} className="share-btn">
        <TwitterIcon size={36} round />
        <p>Tweet</p>
      </TwitterShareButton>            

     {/* Print button */}
      <div className='share-print no-print'>
        <Button 
          className='share-print-btn'
          onClick={handlePrint}
        >
          <FaPrint />
        </Button>    
        <p>Print</p>     
      </div>       

      {/* Save to favorites button */}
      <div className='share-heart'>
        <Button 
          className='share-heart-btn'
          onClick={()=> addToLocalStorage({title, image, id})}
        >
          <FaHeart />
        </Button>         
        <p>Save</p>
      </div>      
    </section>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  addToLocalStorage: PropTypes.func.isRequired,
  handlePrint: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired
}

export default ShareButtons;