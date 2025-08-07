import React from "react";
import Chart from "react-apexcharts";
import {
    Card,
    Form,
    InputGroup,
    Spinner,
    Container,
    Row,
    Col,
    Button,
    Alert
} from 'react-bootstrap';
import { FiUpload, FiBarChart2, FiPieChart, FiActivity } from 'react-icons/fi';

export default function FileUploadCard({
    handleFileUpload,
    fileName,
    chartType,
    setChartType,
    isProcessing,
    chartData
}) {
    return (
        <Card className="border-0 shadow-lg" style={{ borderRadius: '12px' }}>
            <Card.Header className="bg-white border-0 py-4">
                <h2 className="h4 mb-0 fw-semibold text-primary">Data Visualization Dashboard</h2>
                <p className="text-muted mb-0 small">Upload and analyze your data in real-time</p>
            </Card.Header>
            <Card.Body className="px-4 py-4">
                <Row className="g-4 mb-4">
                    <Col md={8}>
                        <Form.Group controlId="file-upload">
                            <Form.Label className="fw-medium mb-2">Upload CSV File</Form.Label>
                            <div className="d-flex gap-3 align-items-center">
                                <label className="btn btn-primary px-4 py-2 rounded-pill cursor-pointer mb-0">
                                    <FiUpload className="me-2" />
                                    Choose File
                                    <input
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileUpload}
                                        className="d-none"
                                    />
                                </label>
                                {fileName && (
                                    <Alert variant="light" className="mb-0 py-2 flex-grow-1">
                                        <span className="text-truncate d-inline-block" style={{ maxWidth: '200px' }}>
                                            {fileName}
                                        </span>
                                    </Alert>
                                )}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="chart-type">
                            <Form.Label className="fw-medium mb-2">Visualization Type</Form.Label>
                            <div className="btn-group w-100" role="group">
                                <Button
                                    variant={chartType === 'line' ? 'primary' : 'outline-primary'}
                                    onClick={() => setChartType('line')}
                                    size="sm"
                                    className="d-flex align-items-center gap-1"
                                >
                                    <FiActivity size={16} />
                                    <span className="d-none d-md-inline">Line</span>
                                </Button>
                                <Button
                                    variant={chartType === 'bar' ? 'primary' : 'outline-primary'}
                                    onClick={() => setChartType('bar')}
                                    size="sm"
                                    className="d-flex align-items-center gap-1"
                                >
                                    <FiBarChart2 size={16} />
                                    <span className="d-none d-md-inline">Bar</span>
                                </Button>
                                <Button
                                    variant={chartType === 'area' ? 'primary' : 'outline-primary'}
                                    onClick={() => setChartType('area')}
                                    size="sm"
                                    className="d-flex align-items-center gap-1"
                                >
                                    <FiPieChart size={16} />
                                    <span className="d-none d-md-inline">Area</span>
                                </Button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                {isProcessing && (
                    <div className="d-flex flex-column align-items-center justify-content-center py-5 my-4">
                        <Spinner animation="border" variant="primary" className="mb-3" style={{ width: '3rem', height: '3rem' }} />
                        <h4 className="h5 mb-2">Processing your data</h4>
                        <p className="text-muted small">This may take a moment...</p>
                    </div>
                )}

                {chartData ? (
                    <div className="border-0 rounded-3 p-3 bg-white shadow-sm mt-3">
                        <Chart
                            options={{
                                ...chartData.options,
                                chart: {
                                    ...chartData.options.chart,
                                    toolbar: {
                                        show: true,
                                        tools: {
                                            download: true,
                                            selection: true,
                                            zoom: true,
                                            zoomin: true,
                                            zoomout: true,
                                            pan: true,
                                            reset: true
                                        },
                                        autoSelected: 'zoom'
                                    },
                                },
                                theme: {
                                    mode: 'light',
                                    palette: 'palette1'
                                }
                            }}
                            series={chartData.series}
                            type={chartType}
                            height={600}
                            width="100%"
                        />
                    </div>
                ) : (
                    <div className="text-center py-5 my-4 border-2 border-dashed rounded-3 bg-light bg-opacity-50">
                        <div className="mb-3">
                            <FiUpload size={48} className="text-primary opacity-50" />
                        </div>
                        <h3 className="h5 mb-2">No data to visualize</h3>
                        <p className="text-muted mb-3">Upload a CSV file to begin analysis</p>
                        <Button variant="outline-primary" size="sm">
                            How to format your data
                        </Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}