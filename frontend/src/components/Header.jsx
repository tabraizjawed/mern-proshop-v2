import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaCartShopping, FaUser } from 'react-icons/fa6'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>

                <Container>
                    <Navbar.Brand href="/">Proshop</Navbar.Brand>
                    <Navbar.Toggle aria-aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' />
                    <Nav className='me-auto '>
                        <Nav.Link href='/cart'> <FaCartShopping /> Cart  </Nav.Link>
                        <Nav.Link href='/log in'> <FaUser /> Sign In  </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>

    )
} 
export default Header;