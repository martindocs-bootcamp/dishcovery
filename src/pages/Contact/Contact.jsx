import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImg from '../../assets/contact.png';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import MessageModal from '../../components/MessageModal/MessageModal';

// Contact component
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  // Functions from global context
  const{ sendEmail, showSuccessMessage, showErrorMessage, } = useGlobalContext();

  // State to manage image loading
  const [imageLoaded, setImageLoaded] = useState(false);

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Event handler to clear the form
  const handleClearForm = () => {    
    setFormData({
      senderName: '',
      senderEmail: '',
      senderMessage: '',
    });
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.senderEmail)) {
      showErrorMessage('Please enter a valid email address.');
      return;
    }
    
    // Check if name and message are provided
    if(formData.senderName === '' || formData.senderMessage === ''){
      showErrorMessage('Please provide your name and message before submitting.');
      return;
    } 
      
      //setup variables to populate the email, where %0D%0A%0D%0A is to simulate line two breaks
      let subject = `New email from ${formData.senderName}`;
      let senderEmail = formData.senderEmail;
      let senderMessage = `Name: ${formData.senderName}%0D%0A%0D%0AEmail Address: ${senderEmail}%0D%0A%0D%0AMessage: ${formData.senderMessage}%0D%0A%0D%0A`;

      //populating the email & redirect the page to open the users default browser
      window.location = `mailto:martin.tatarski@gmail.com?subject=${subject}&body=${senderMessage}`;      
            
      // sendEmail(formData);
      
      // Clear the form
      handleClearForm();
      
      // showSuccessMessage('Please press "Send" from your default email client.');
   
    };
    
    return (
    <section className='contact'>   
      {/* Display Toastify component msg */} 
      <MessageModal />
        <h2 className="contact-title text-center">Contact</h2>

        {/* Display contact image once loaded */}
        <img 
          src={contactImg} 
          className='contact-img' 
          onLoad={() => setImageLoaded(true)}  
        />

        {/* Render the form once the contact image is loaded */}
        {
          imageLoaded && 
            <Form className='contact-form' onSubmit={(e)=> e.preventDefault()}>

              {/* Name input field */}
              <Form.Group controlId="formFullName" >
                <Form.Label className='contact-form-label'>Full Name</Form.Label>
                <Form.Control   
                  className='contact-form-input'       
                  type="text"
                  placeholder="Enter your full name"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email input field */}
              <Form.Group controlId="formEmail">
                <Form.Label className='contact-form-label'>Email address</Form.Label>
                <Form.Control
                  className='contact-form-input'
                  type="email"
                  placeholder="Enter your email"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Message textarea */}
              <Form.Group controlId="formMessage">
                <Form.Label className='contact-form-label'>Message</Form.Label>
                <Form.Control
                  className='contact-form-input'
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="senderMessage"
                  value={formData.senderMessage}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Buttons for submitting and clearing the form */}
              <div className='contact-form-btn'>
                <Button 
                  type="submit" 
                  className='contact-form-btn-submit'
                  onClick={handleSubmit}
                >
                  Submit
                </Button>

                <Button    
                  type="button"          
                  className='contact-form-btn-clear'
                  onClick={handleClearForm}
                >
                  Clear
                </Button>
              </div>
              
            </Form>
        }      
      
    </section>
  );
};

export default Contact;

