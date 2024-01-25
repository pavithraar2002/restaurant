import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function Restaurants({details,id}) {
  

  return (
    <Card >
    <Card.Img variant="top" src={details.photograph} />
    <Card.Body>
      <Card.Title>{details.name}</Card.Title>
      <Card.Text>
       {details.description}
      </Card.Text>
      <Button as={Link} to={`/details/${id}`} variant="dark">More Details</Button>
    </Card.Body>
         </Card>
  );
}

export default Restaurants;