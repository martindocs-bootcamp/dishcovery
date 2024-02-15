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

const ShareButtons = ({url, addToLocalStorage, handlePrint, title, image, id}) => {

  return (   
    <section className='share no-print'>
      <EmailShareButton url={url} className="share-btn">
        <EmailIcon size={36} round />
        <p>Email</p>
      </EmailShareButton>
      <FacebookShareButton url={url} className="share-btn">
        <FacebookIcon size={36} round />
        <p>Share</p>
      </FacebookShareButton>     
      <TwitterShareButton url={url} className="share-btn">
        <TwitterIcon size={36} round />
        <p>Tweet</p>
      </TwitterShareButton>            

      <div className='share-print no-print'>
        <Button 
          className='share-print-btn'
          onClick={handlePrint}
        >
          <FaPrint />
        </Button>    
        <p>Print</p>     
      </div>       

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
}

export default ShareButtons;