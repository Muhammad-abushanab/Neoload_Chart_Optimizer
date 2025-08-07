import {
    Container,
    Navbar,
    Nav,
    Form,
    Button,
    Dropdown,
    Image
} from 'react-bootstrap';
import {
    FiUpload,
    FiSettings,
    FiUser,
    FiHelpCircle,
    FiLogOut
} from 'react-icons/fi';

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <Image
                        src="https://via.placeholder.com/40x40" // Replace with your logo
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2 rounded"
                        alt="NeoLoad logo"
                    />
                    <span className="text-light fs-4 fw-bold">NeoLoad Charts</span>
                    <span className="text-primary ms-1 fs-4 fw-bold">Optimizer</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="#" className="text-light mx-2">Dashboard</Nav.Link>
                        <Nav.Link href="#" className="text-light mx-2">Reports</Nav.Link>
                        <Nav.Link href="#" className="text-light mx-2">Analytics</Nav.Link>
                    </Nav>

                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">
                            <FiUpload className="me-1" /> Import
                        </Button>
                    </Form>

                    <div className="d-flex align-items-center">
                        <Button variant="link" className="text-light me-2">
                            <FiHelpCircle size={20} />
                        </Button>

                        <Dropdown align="end">
                            <Dropdown.Toggle variant="dark" id="dropdown-user" className="d-flex align-items-center">
                                <div className="me-2 d-none d-sm-block">
                                    <div className="text-light small">John Doe</div>
                                    <div className="text-muted x-small">Admin</div>
                                </div>
                                <div className="bg-primary rounded-circle p-2">
                                    <FiUser size={18} className="text-light" />
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-end shadow">
                                <Dropdown.Item href="#">
                                    <FiUser className="me-2" /> Profile
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <FiSettings className="me-2" /> Settings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">
                                    <FiLogOut className="me-2" /> Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;