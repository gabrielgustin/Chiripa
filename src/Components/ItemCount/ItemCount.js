import { useState } from 'react';
import { Col, Button } from 'react-bootstrap';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const decrementar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    return (
        <>
            <Col style={styles.BtnContainer}>
                <Button variant="outline-secondary" disabled={stock === 0} onClick={decrementar} style={styles.CountBtn}>
                    <div>-</div>
                </Button>
            </Col>
            <Col style={styles.BtnContainer}>
                <p className='d-flex justify-content-center align-items-center'>{count}</p>
            </Col>
            <Col style={styles.BtnContainer}>
                <Button variant="outline-secondary" disabled={stock === 0} onClick={incrementar} style={styles.CountBtn}>
                    <div>+</div>
                </Button>
            </Col>
            <Col style={styles.BtnContainer}>
                <Button variant="success" disabled={stock === 0} style={styles.AddToCartBtn} onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </Col>
        </>
    )
};

const styles = {
    BtnContainer: {
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    CountBtn: {
        width: "30px",
        height: "30px",
        fontSize: "20px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    AddToCartBtn: {
        padding: "10px",
        borderRadius: "5px",
        width: "100%",
        margin: "10px 0",
    }
};