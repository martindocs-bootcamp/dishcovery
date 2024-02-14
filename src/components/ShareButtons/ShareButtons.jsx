import PropTypes from 'prop-types';

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

const ShareButtons = ({url}) => {
  return (   
    <section className='no-print'>
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
    </section>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ShareButtons;