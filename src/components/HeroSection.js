import React from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    Image
} from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';

function HeroSection() {
    return (
        <div className="py-5 py-lg-8 position-relative bg-cover"
            style={{
                backgroundImage: 'url(/images/gradient_hero.jpg)',
                paddingTop: '5rem',
                paddingBottom: '5rem'
            }}>
            <Container>
                <Row className="align-items-center g-5 mb-8">
                    <Col xs={12} lg={6} className="order-lg-2">
                        <div className="text-center text-lg-end">
                            <Image
                                src="images/Neoload-Charts.png"
                                alt="Modern web app illustration"
                                fluid
                                className="mw-100"
                                style={{ maxWidth: '600px' }}
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="order-lg-1">
                        <h1 className="display-4 fw-bold mb-4" style={{
                            lineHeight: '1.2',
                            letterSpacing: '-0.5px'
                        }}>
                            Modern Charts<br />
                            shipped faster
                        </h1>

                        <ListGroup as="ul" variant="flush" className="mb-5">
                            <ListGroup.Item as="li" className="d-flex align-items-center border-0 ps-0 py-2" style={{backgroundColor:"transparent"}}>
                                <FiCheckCircle className="me-3 text-success" size={20} />
                                <span className="fs-5">Simple to use, beautiful UI design</span>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex align-items-center border-0 ps-0 py-2" style={{backgroundColor:"transparent"}}>
                                <FiCheckCircle className="me-3 text-success" size={20} />
                                <span className="fs-5">Clear visual reporting for performance analysis and debugging</span>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex align-items-center border-0 ps-0 py-2" style={{backgroundColor:"transparent"}}>
                                <FiCheckCircle className="me-3 text-success" size={20} />
                                <span className="fs-5">Transform raw CSV data into insightful visualizations instantly</span>
                            </ListGroup.Item>
                        </ListGroup>

                        <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-4 py-3 fw-semibold"
                            >
                                Scroll Down To See Magic....
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;