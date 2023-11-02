import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import styles from './Service.module.css';
import ReactStars from "react-rating-star-with-type";

export default function Service ({
    service
}) {
    return (
        <Card key={service.id} className={styles.service_card} style={{width:"295px", height:"469px"}}>
            <Card.Img variant="top" src={service.img} className={styles.service_img} />
            <Card.Body className={styles.service_body}>
                <Container>
                    <Card.Subtitle className={styles.service_category}>{service.category}</Card.Subtitle>
                    <Card.Title className={styles.service_title}>{service.title}</Card.Title>

                    <span>
                        <ReactStars 
                            value={service.rating}  
                            activeColor={"#FFC107"}
                            inactiveColor={"#D9D9D9"}
                        /> 
                    </span>
                    <div className='mt-3'>
                        <Image src={service.avatar} rounded />
                        <span className={styles.service_provider}><b>{service.provider}</b></span>
                    </div>
                    <hr />
                    <div>
                        <button className={styles.service_price}>${service.price}</button>
                    </div>
                </Container>
            </Card.Body>
        </Card>
    )

    
}