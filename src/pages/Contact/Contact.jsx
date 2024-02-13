import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImg from '../../assets/contact.png';
import { useGlobalContext } from '../../hooks/useGlobalContext'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  const{ sendEmail } = useGlobalContext();

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
      console.log('Please enter a valid email address.');
      return;
    }

    sendEmail(formData);

    handleClearForm();

    console.log('Form submitted successfully!');
  };

  return (
    <section className='contact'>
      <img src={contactImg} className='contact-img' />

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
    </section>
  );
};

export default Contact;

