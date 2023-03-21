import { useState, useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato) => {
        setContador(dato)
        addItem(item, dato)
    };

    return (
        <>
            <Container fluid style={styles.ItemContainer}>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img style={styles.ImgSize} src={item.imgSrc} alt={item.title} />
                    </Col>
                    <Col className='mx-4'>
                        <h1>{item.title}</h1>
                        <h4>{item.description}</h4>
                        <Container className='text-center'>
                            <Row>
                                <Col><h3>Alcohol</h3></Col>
                                <Col><h3>IBU</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        {item.alcohol}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </h3>
                                </Col>
                                <Col>
                                    <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        {item.ibu}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </h3>
                                </Col>
                            </Row>
                            <Row className="mt-5 d-flex justify-content-center align-items-center">
                                <Col xs={6} md={4} className="text-align-start">
                                    <h4>$ {item.price}</h4>
                                </Col>
                                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                            </Row>

                            {
                                contador > 0 &&
                                <Link to="/cart">
                                    <Button variant="primary" size="lg">
                                        Ir al Carrito
                                    </Button>
                                </Link>
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

const styles = {
    ItemContainer: {
        display: "flex",
        height: "80vh",
        alignItems: "center",
    },
    ImgSize: {
        height: "75vh"
    }
};