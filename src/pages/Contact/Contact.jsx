import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.senderEmail)) {
      console.log('Please enter a valid email address.');
      return;
    }

    // Clear the form after submission
    setFormData({
      senderName: '',
      senderEmail: '',
      senderMessage: '',
    });

    console.log('Form submitted successfully!');
  };

  return (
    <Form onSubmit={handleSubmit} className='contact'>
      <Form.Group controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control          
          type="text"
          placeholder="Enter your full name"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="senderMessage"
          value={formData.senderMessage}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;

