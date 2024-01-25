import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function Restaurants({restuarant,id}) {
  

  return (
    <Card >
    <Card.Img variant="top" src={restuarant.photograph} />
    <Card.Body>
      <Card.Title>{restuarant.name}</Card.Title>
      <Card.Text>
       {restuarant.address}
      </Card.Text>
      <Button as={Link} to={`/details/${restuarant.id}`} variant="dark">More Details</Button>
    </Card.Body>
         </Card>
  );
}

export default Restaurants;