import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FaPrint } from "react-icons/fa";

import { 
  EmailShareButton,
  EmailIcon,

  FacebookShareButton, 
  FacebookIcon,

  TwitterShareButton,
  TwitterIcon,

  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

const ShareButtons = ({url, handlePrint}) => {
  return (   
    <>
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
      <PinterestShareButton url={url} className="share-btn">
        <PinterestIcon size={36} round />
        <p>Pin it</p>
      </PinterestShareButton>   

      <div className='recipe-card-print'>
        <Button 
          className='recipe-card-print-btn'
          onClick={handlePrint}
        >
          <FaPrint />
        </Button>         
        <p>Print it</p>
      </div>   
    </>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  handlePrint: PropTypes.func.isRequired,
}

export default ShareButtons;