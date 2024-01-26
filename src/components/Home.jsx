import React, {useEffect, useState} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Restaurants from './Restaurants'
import { getRestaurants } from '../redux/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';


function Home() {

  const dispatch = useDispatch();

  const restaurants = useSelector((state)=>state.restaurants.data);

/*
  const[restuarant,setRestaurant] = useState({
      name : "japan sushi",
    location:"Bangalore",
    photograph:"https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
    description:"this is the restuarant in town"
  
  });
  */
  const[menu,setMenu]=useState(5);
 


  useEffect(()=>{
                  //mount
                  fetch('./restaurants.json')
                  .then((res)=>res.json())
                  .then((data) => dispatch(getRestaurants(data.restaurants)));
  } , []) //dep4ndancy array

  // const restuarant =
  // {
  //   name : "japan sushi",
  //   location:"Bangalore",
  //   photograph:"https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
  //   description:"this is the restuarant in town"
  // }

  const menuIncrement = ()=>{
    setMenu(menu+1)
  }
  const menuDecrement = ()=>{
    setMenu(menu-1)
  }
  return (
    <Container>
        <Row>

        {restaurants && (
          restaurants.map((restuarant,index) => (
            <Col className='py-3' md={3} key={index}>
            <Restaurants restuarant = {restuarant}  />
            </Col>
          ))
        )}
           

         
        </Row>
    </Container>
  )
}

export default Home