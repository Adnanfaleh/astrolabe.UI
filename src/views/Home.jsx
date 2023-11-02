import MegaMenu from "../components/MegaMenu";
import { Card, Container, Row, Col } from "react-bootstrap";
import searchLogo from "../assets/search-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Service from "../components/Service/Service";
import services from "../components/Service/services.js";
import Project from "../components/Project/Project";
import projects from "../components/Project/projects";

export default function Home () {
    return (
        <>
            <MegaMenu />

            <section id='search'>
                <Container>
                <Row>
                    <Col>
                        <h1 id="search-title">The Ultimate Destination for Freelance Talent and Quality Services!</h1>
                        <p id="search-paragraph">Whether you're a business owner or a freelancer, Astrolabe is your one-stop-shop for finding or offering freelance services. Join our community today and start getting things done!</p>
                    
                        <form className="d-flex" id="search-form" role="search">
                            <div id="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                    <path d="M10.3233 0C4.63427 0 0 4.43127 0 9.87116C0 15.311 4.63427 19.7509 10.3233 19.7509C12.7533 19.7509 14.9882 18.9366 16.7544 17.5847L21.0545 21.6942C21.2715 21.8931 21.5614 22.0029 21.8619 21.9999C22.1625 21.997 22.45 21.8817 22.6627 21.6785C22.8754 21.4754 22.9964 21.2008 22.9999 20.9134C23.0034 20.626 22.8891 20.3487 22.6813 20.1409L18.3813 16.0292C19.7963 14.3377 20.6489 12.1974 20.6489 9.87116C20.6489 4.43127 16.0124 0 10.3233 0ZM10.3233 2.1941C14.7723 2.1941 18.3521 5.61706 18.3521 9.87116C18.3521 14.1253 14.7723 17.5568 10.3233 17.5568C5.87435 17.5568 2.29458 14.1253 2.29458 9.87116C2.29458 5.61706 5.87435 2.1941 10.3233 2.1941Z" fill="#B9A346"/>
                                </svg>
                            </div>
                            
                            <input id='search-input' className="form-control me-2" type="search" placeholder="What are you looking for?" />
                            <button id='search-btn' className="btn btn-success" type="submit">Search</button>
                        </form>

                        <p id="popular-search" style={{paddingTop: "70px"}}><span style={{color: "#B9A346"}}>Popular Search:</span> <span style={{color: "#004080"}}>Graphic Design  Presentation Design  Web Development</span></p>
                    </Col>

                    <Col>

                    </Col>
                </Row>
                </Container>
            </section>

            <section id="call-to-action">
                <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <button id="become-talent">
                                Become a Talent
                            </button>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <button id="find-service">
                                Find a Service/Project
                            </button>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>

            <section id="services-list">
                <Container fluid>
                    <h2 className="title"><span className="header-1">Services You</span> <span className="header-2">Might Like</span></h2>
                    <p className="subtitle">Discover our most popular service and get the job done with ease on ASTROLABE.</p>
                
                    <Row key='services'>
                        {services.map((service) => (
                            <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Service key={service.id} service={service} />
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center">
                        <button class="more-btn">
                            Explore All Services
                        </button>
                    </div>
                </Container>
            </section>

            <section id="projects-list">
                <Container fluid>
                    <h2 className="title"><span className="header-1">Projects You</span> <span className="header-2">Might Like</span></h2>
                    <p className="subtitle">Explore projects you might like or create your next project</p>
                

                    <Row key='projects'>
                        {projects.map((project) => (
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Project key={project.id} project={project} />
                            </Col>
                        ))}
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Card style={{height:"478px"}}>
                                Create a Project
                            </Card>
                        </Col>
                    </Row>

                    <div className="text-center">
                        <button class="more-btn">
                            View All Projects
                        </button>
                    </div>
                </Container>
            </section>
        </>
    )
}