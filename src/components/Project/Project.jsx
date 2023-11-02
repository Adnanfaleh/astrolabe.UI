import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import styles from './Project.module.css';
import ReactStars from "react-rating-star-with-type";

export default function Project ({
    project
}) {
    return (
        <Card key={project.id} className={styles.project_card} style={{height:"478px"}}>
            <Card.Img variant="top" src={project.img} className={styles.project_img} />
            <Card.Body className={styles.project_body}>
                <Container fluid>
                    <Card.Subtitle className={styles.project_category}>{project.category}</Card.Subtitle>
                    <Card.Title className={styles.project_title}>{project.title}</Card.Title>

                    <span>
                        <ReactStars 
                            value={project.rating}  
                            activeColor={"#FFC107"}
                            inactiveColor={"#D9D9D9"}
                        /> 
                    </span>
                    <div className='mt-3'>
                        <Image src={project.avatar} rounded />
                        <span className={styles.project_provider}><b>{project.provider}</b></span>
                    </div>
                    <hr />
                    <div>
                        <button className={styles.project_price}>${project.price}</button>
                    </div>
                </Container>
            </Card.Body>
        </Card>
    )   
}