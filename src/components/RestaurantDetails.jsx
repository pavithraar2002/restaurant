import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'

function RestaurantDetails() {
  return (
    <Container>
        <Row>
            <Col md={8} className='pt-3'>
            <Card>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" />
      <Card.Body>
        <Card.Title>T&Co</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col md={4} className='pt-3'>
                <Row>Time of opening and closing  </Row>
                <Row>  Monday -- 9:00am-9:00pm</Row>
                <Row>  Tuesday -- 9:00am-9:00pm </Row>
                <Row> Wednesday -- 9:00am-9:00pm </Row>
                <Row> Thursday -- 9:00am-9:00pm </Row>
                <Row> Friday -- 9:00am-9:00pm </Row>
                <Row>Saturday & Sunday NOT OPENING  </Row>
               
            </Col>
        </Row>

        

        
    </Container>
  )
}

export default RestaurantDetails