import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FaPrint } from "react-icons/fa";

import { 
  FacebookShareButton, 
  FacebookIcon,

  LinkedinShareButton,
  LinkedinIcon,

  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const ShareButtons = ({url, handlePrint}) => {
  return (   
    <>
      <FacebookShareButton url={url} className="share-btn">
        <FacebookIcon size={36} round />
        <p>Facebook</p>
      </FacebookShareButton>     
      <LinkedinShareButton url={url} className="share-btn">
        <LinkedinIcon size={36} round />
        <p>Linkedin</p>
      </LinkedinShareButton>
      <TwitterShareButton url={url} className="share-btn">
        <TwitterIcon size={36} round />
        <p>Twitter</p>
      </TwitterShareButton>
      <div className='recipe-card-print'>
        <Button 
          className='recipe-card-print-btn'
          onClick={handlePrint}
        >
          <FaPrint />
        </Button>         
        <p>Print</p>
      </div>
    </>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  handlePrint: PropTypes.func.isRequired,
}

export default ShareButtons;