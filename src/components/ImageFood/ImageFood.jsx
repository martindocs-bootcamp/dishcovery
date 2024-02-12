function ImageFood({ image }) {
  return (
    // Render the image with its URL as 'src' and set the width
    <img className="imageFood" src={image} alt="Food" />
  );
}

export default ImageFood;
