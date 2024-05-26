import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { searchProducts } from '../redux/slice/productSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Header=({insideHome})=> {
  const dispatch=useDispatch()
  return (
    <div>
      <Navbar expand="lg" className="bg-zinc-900">
      <Container fluid>
        <Navbar.Brand className='ms-4'><h1 className='bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text font-bold'> <i class="fa-solid fa-plate-wheat"></i> MunchMate</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-4 me-auto my-3 "
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            
              <div className='mx-3'><Nav.Link ><i class="fa-solid fa-house text-white"></i><Link to={'/'}> <h1 className=' text-lg font-medium inline-block text-white'>Home</h1></Link></Nav.Link></div>
              <div className='mx-3'><Nav.Link ><i class="fa-solid fa-tag text-white"></i> <h1 className='text-lg font-medium inline-block text-white'>Offers</h1></Nav.Link></div>
              <div className='mx-3'><Nav.Link disabled ><i class="fa-solid fa-cart-shopping text-white"></i> <h1 className='text-lg font-medium inline-block text-white'>Cart</h1></Nav.Link></div>
              <div className='mx-3'><Nav.Link disabled><i class="fa-solid fa-circle-user text-white"></i> <h1 className='text-lg font-medium inline-block text-white'>Help</h1></Nav.Link></div>
            
          </Nav>
         {
         insideHome && ( <Form className="d-flex">
            <Form.Control onChange={(e) =>dispatch(searchProducts(e.target.value.toLowerCase()))}
              type="search"
              placeholder="Search here..."
              className="me-2"
              aria-label="Search" 
            />
            <Button variant="outline-warning" disabled >Search</Button>
          </Form>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
