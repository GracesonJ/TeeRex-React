import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container >
      <Navbar className="bg-body-tertiary mb-2">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top fs-2"
            />{' '}
            TeeRex
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-end'>
        <Form inline >
        <Row className='mx-5'>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant="outline-secondary" type="submit"><i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i></Button>
          </Col>
        </Row>
      </Form>
          <Nav className='m-3'>
          <Button onClick={()=>navigate('/cart')} variant="outline-secondary"> <i class="fa-solid fa-cart-shopping"></i> {' '} CART 
            {/* <sup className='bg-secondary text-white rounded m-2 p-1 text-center'>3</sup>  */}
          </Button>
          </Nav>
          <Nav className='m-3'>
          <Button onClick={()=>navigate("/wishlist")} className='btn' variant="outline-secondary"> <i class="fa-solid fa-heart"></i> {' '} Wishlist</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header