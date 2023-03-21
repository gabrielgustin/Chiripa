import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfigs/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import NavbarResponsive from "../Navbar/Navbar";

const ItemDetailContainer = () => {

    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(db, "items", productId);
            const response = await getDoc(queryRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            console.log(newItem);
            setItem(newItem)
        }
        getProducto();
    }, [productId]);
    console.log('item:', item);

    return (
        <>
            <NavbarResponsive />
            <ItemDetail item={item} />
        </>
    )
};

export default ItemDetailContainer;