import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import { db } from "../../FirebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import NavbarResponsive from '../Navbar/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CartContainer = () => {

  const { productCartList, removeItem, clear, getTotalPrice } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    console.log("order", order)
    //reference order
    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then(response => {
      console.log("response", response);
      setIdOrder(response.id);
      clear();
    });
  };

  return (
    <>
      <NavbarResponsive />
      {idOrder ?
        <>
          <p>Su orden fue creado con éxito, id de la compra: {idOrder}</p>
          <Link to="/">
            Volver a la tienda
          </Link>
        </>
        :
        <>
          {productCartList.length > 0 ?
            <Container>
              <Row>
                <Col xs={12} md={8} style={styles.BorderRidge}>
                  <Row style={styles.BorderRidgeBot} className='p-1 text-center'>
                    <Col><h2>Producto</h2></Col>
                    <Col><h2>Precio</h2></Col>
                    <Col><h2>Cantidad</h2></Col>
                    <Col><h2>Subtotal</h2></Col>
                  </Row>
                  {productCartList.map(item => (
                    <Row style={styles.BorderRidgeBot} className='p-2 text-center'>
                      <Col><h4>{item.title}</h4></Col>
                      <Col><h4>${item.price}</h4></Col>
                      <Col>
                        <Row>
                          <Col><h4>{item.quantity}</h4></Col>
                          <Col><Button variant="warning" onClick={() => removeItem(item.id)}>Eliminar</Button></Col>
                        </Row>
                      </Col>
                      <Col><h4>${item.quantityPrice}</h4></Col>
                    </Row>
                  ))}
                  <Row style={styles.ClearProdContainer} >
                    <Button variant='danger' style={styles.ClearProdBtn} onClick={clear}>Vaciar Carrito</Button>
                  </Row>
                </Col>
                <Col xs={6} md={4} style={styles.BorderRidge} className='p-4'>
                  <Row className='text-center' style={styles.BorderRidgeBot} >
                    <h2>Total del Carrito</h2>
                  </Row>
                  <Row style={styles.BorderRidgeBot} className='p-2'>
                    <Col><h4>Subtotal---</h4></Col>
                    <Col>${getTotalPrice()}</Col>
                  </Row>
                  <Row style={styles.BorderRidgeBot} className='p-2'>
                    <Col><h4>Total---</h4></Col>
                    <Col>${getTotalPrice()}</Col>
                  </Row>
                  <Row>
                    <form onSubmit={sendOrder}>
                      <Container>
                        <Col className='p-4'>
                          <Row>
                            <label>Nombre</label>
                            <input type="text" />
                          </Row>
                          <Row>
                            <label>Teléfono</label>
                            <input type="text" />
                          </Row>
                          <Row>
                            <label>Correo</label>
                            <input type="email" />
                          </Row>
                          <Row className='p-2'>
                            <Button variant="success" type="submit">Enviar pedido</Button>
                          </Row>
                        </Col>
                      </Container>
                    </form>
                  </Row>
                </Col>
              </Row>
            </Container>
            :
            <>
              <p>El carrito esta vacio, agrega algún producto</p>
              <Link to="/item">
                Volver a la tienda
              </Link>
            </>
          }
        </>
      }
    </>
  )
};

const styles = {
  BorderRidge: {
    border: "ridge",
  },
  BorderRidgeBot: {
    borderBottom: "ridge",
  },
  ClearProdContainer: {
    padding: "2rem",
    justifyContent: "flex-start",
  },
  ClearProdBtn: {
    width: "12rem",
  }
};

export default CartContainer;