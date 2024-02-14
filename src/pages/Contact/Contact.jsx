import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImg from '../../assets/contact.png';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 
import MessageModal from '../../components/MessageModal/MessageModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  const{ sendEmail, showSuccessMessage, showErrorMessage, } = useGlobalContext();

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleClearForm = () => {    
    setFormData({
      senderName: '',
      senderEmail: '',
      senderMessage: '',
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.senderEmail)) {
      showErrorMessage('Please enter a valid email address.');
      return;
    }

    //setup variables to populate the email
    let subject = `Email from ${formData.senderName}`;
    let senderEmail = formData.senderEmail;
    let senderMessage = `Name: ${formData.senderName}
      Email Address: ${senderEmail}
      Message: ${formData.senderMessage}`;

    //populating the email & redirect the page to open the users default browser
    window.location = `mailto:contactme@email.com?subject=${subject}&body=${senderMessage}`;

    // sendEmail(formData); //fix original from Marcin

    handleClearForm
    
    // sendEmail(formData);

    handleClearForm();

    showSuccessMessage('Form submitted successfully!');
  };

  return (
    <section className='contact'>    
      <MessageModal />
        <img 
          src={contactImg} 
          className='contact-img' 
          onLoad={() => setImageLoaded(true)}  
        />
        {
          imageLoaded && 
            <Form className='contact-form' onSubmit={(e)=> e.preventDefault()}>
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

