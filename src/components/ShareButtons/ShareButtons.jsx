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
    </>   
  )
}

ShareButtons.propTypes = {
  url: PropTypes.string
}

export default ShareButtons;