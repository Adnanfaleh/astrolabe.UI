import React from 'react';
import { Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';

export default function MegaMenu () {
    return (
      <Container>
        <Row>
          <Col className="mega-menu">
            <Nav>
              <Nav.Item className="mega-dropdown">
                <Nav.Link style={{display:'grid', padding:"0px 26px 0px 26px"}}>Business</Nav.Link>
                <div className="mega-dropdown-content">
                  <Row>
                  <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                  <Row>
                  <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                </div>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="mega-menu">
            <Nav>
              <Nav.Item className="mega-dropdown">
                <Nav.Link style={{textAlign: "center", padding: "0px, 26px, 0px, 26px"}}>Technology</Nav.Link>
                <div className="mega-dropdown-content">
                <Row>
                <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                  <Row>
                  <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                </div>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="mega-menu">
            <Nav>
              <Nav.Item className="mega-dropdown">
                <Nav.Link style={{textAlign: "center"}}>Architecture</Nav.Link>
                <div className="mega-dropdown-content">
                <Row>
                <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                  <Row>
                  <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>A</Nav.Link>
                      <Nav.Link>B</Nav.Link>
                      <Nav.Link>C</Nav.Link>
                    </Col>
                    <h1>Test</h1>
                    <Col className='category-content-styles'>
                      <Nav.Link>D</Nav.Link>
                      <Nav.Link>E</Nav.Link>
                      <Nav.Link>F</Nav.Link>
                    </Col>
                  </Row>
                </div>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        </Container>
    )
}