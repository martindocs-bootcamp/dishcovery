import PropTypes from 'prop-types';

import { 
  FacebookShareButton, 
  FacebookIcon,

  LinkedinShareButton,
  LinkedinIcon,

  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const ShareButtons = ({url}) => {
  return (   
    <>
      <FacebookShareButton url={url} className="share-btn">
        <FacebookIcon size={32} round />
      </FacebookShareButton>     
      <LinkedinShareButton url={url} className="share-btn">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url} className="share-btn">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string
}

export default ShareButtons;