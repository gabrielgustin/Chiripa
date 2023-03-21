import React from 'react';
import { Link } from 'react-router-dom';
import catIpa from '../assets/catIpa.png';
import catBlonde from '../assets/catBlonde.png';
import catStout from '../assets/catStout.png';
import catAmbar from '../assets/catAmbar.png';
import { Container, Row, Col } from 'react-bootstrap';

const CategoryWidget = () => {
    return (
        <Container style={styles.CatNavContainer}>
            <Row style={styles.CatNavRow}>
                <Col style={styles.CatIpa} >
                    <img src={catIpa} alt='ipa' style={{ height: '15rem' }} />
                    <Link to='/item/Ipa' style={styles.NoTextDec}><p style={styles.Font}>IPA</p></Link>
                </Col>
                <Col style={styles.CatAmber}>
                    <Link to='/item/Amber' style={styles.NoTextDec}><p style={styles.Font}>AMBER</p></Link>
                    <img src={catAmbar} alt='amber' style={{ height: '15rem' }} />
                </Col>
            </Row>
            <Row style={styles.CatNavRow}>
                <Col style={styles.CatStout}>
                    <img src={catStout} alt='stout' style={{ height: '15rem' }} />
                    <Link to='/item/Stout' style={styles.NoTextDec}><p style={styles.Font}>STOUT</p></Link>
                </Col>
                <Col style={styles.CatBlonde}>
                    <Link to='/item/Blonde' style={styles.NoTextDec}><p style={styles.Font}>BLONDE</p></Link>
                    <img src={catBlonde} alt='blonde' style={{ height: '15rem' }} />
                </Col>
            </Row>
        </Container>
    )
};

export default CategoryWidget;
const styles = {
    CatNavContainer: {
        maxWidth: "100%",
        paddingRight: "0",
        paddingLeft: "0",
        marginBottom: "3rem"
    },
    CatNavRow: {
        rowGap: "0",
        height: "16rem",
        marginRight: "0",
        marginLeft: "0",
    },
    CatIpa: {
        backgroundColor: "#00a9a4",
        columnGap: "0",
        display: "flex",
        paddingRight: "0",
        paddingLeft: "0",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    CatBlonde: {
        backgroundColor: "#006fb9",
        columnGap: "0",
        display: "flex",
        paddingRight: "0",
        paddingLeft: "0",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    CatStout: {
        backgroundColor: "#e52d49",
        columnGap: "0",
        display: "flex",
        paddingRight: "0",
        paddingLeft: "0",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    CatAmber: {
        backgroundColor: "#dda848",
        columnGap: "0",
        display: "flex",
        paddingRight: "0",
        paddingLeft: "0",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    Font: {
        fontFamily: "'Alfa Slab One', cursive",
        fontSize: "61px",
        color: "black",
    },
    NoTextDec: {
        textDecoration: "none",
    }
};