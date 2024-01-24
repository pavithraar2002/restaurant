import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container>
        <Row>
            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" />
      <Card.Body>
        <Card.Title>T&Co</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button as={Link} to='/details/1' variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body>
        <Card.Title>Delicia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body>
        <Card.Title>Tasty</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg" />
      <Card.Body>
        <Card.Title>Royals</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/38/10/52/360_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg" />
      <Card.Body>
        <Card.Title>Family</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://st3.depositphotos.com/1400069/37648/i/450/depositphotos_376481338-stock-photo-abstract-blurred-background-street-cafe.jpg" />
      <Card.Body>
        <Card.Title>OutWord</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg" />
      <Card.Body>
        <Card.Title>Jucie-World</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col className='py-3' md={3}>
            <Card >
      <Card.Img variant="top" src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" />
      <Card.Body>
        <Card.Title>Burger-Space</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">More Details</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Home