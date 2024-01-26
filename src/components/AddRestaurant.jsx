import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function AddRestaurant() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    
        
      };

        const [restaurantname, setRestuarantName]= useState('');
        const handleRestaurantName = (e)=>{
            setRestuarantName(e.target.value);
        }
        const [restaurantaddress, setRestuarantAddress]= useState('');
        const handleRestaurantAddress = (e)=>{
            setRestuarantAddress(e.target.value);
        }
        console.log("restaurantname--------->",restaurantname);
        console.log("restaurantaddress--------->",restaurantaddress);


  return (
    <Container>
        <Row>
            <Col className='mt-3 mb-3'>
            <h4>Add Restaurant Details</h4>
             </Col>
        </Row>

        <Row>
            <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Restaurant Name</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant name" required onKeyUp={handleRestaurantName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Restaurant Address</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant address" required onKeyUp={handleRestaurantAddress} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Neighborhood</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant address" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridState" required>
          <Form.Label>Cuisine Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>asian</option>
            <option>Chinese</option>
            <option>Pizza</option>
            <option>American</option>
            <option>Mexican</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Restaurant Photograh</Form.Label>
        <Form.Control type="file"  />
      </Form.Group>
      <Button  className='bg-dark mb-3' type="submit">Add Restaurant</Button>

    </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddRestaurant