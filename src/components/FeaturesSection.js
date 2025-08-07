import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { FiZap, FiPieChart, FiLock, FiTrendingUp, FiCode, FiBarChart2 } from 'react-icons/fi';

export default function FeaturesSection() {
    return (
        <Row className="g-4 mt-5">
            <Col md={4}>
                <Card className="h-100 border-0 shadow-hover" style={{ transition: 'all 0.3s ease', borderRadius: '12px' }}>
                    <Card.Body className="p-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-4">
                            <FiTrendingUp className="text-primary" size={24} />
                        </div>
                        <Card.Title as="h3" className="h5 mb-3 fw-semibold">Instant Data Visualization</Card.Title>
                        <Card.Text className="text-muted">
                            Transform raw CSV test results into insightful visualizations with a single upload
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="h-100 border-0 shadow-hover" style={{ transition: 'all 0.3s ease', borderRadius: '12px' }}>
                    <Card.Body className="p-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-4">
                            <FiBarChart2 className="text-primary" size={24} />
                        </div>
                        <Card.Title as="h3" className="h5 mb-3 fw-semibold">Performance Analytics</Card.Title>
                        <Card.Text className="text-muted">
                            Multiple chart types optimized for performance test results and metrics
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="h-100 border-0 shadow-hover" style={{ transition: 'all 0.3s ease', borderRadius: '12px' }}>
                    <Card.Body className="p-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-4">
                            <FiCode className="text-primary" size={24} />
                        </div>
                        <Card.Title as="h3" className="h5 mb-3 fw-semibold">Developer-Focused</Card.Title>
                        <Card.Text className="text-muted">
                            Intuitive interface designed specifically for test engineers and developers
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}