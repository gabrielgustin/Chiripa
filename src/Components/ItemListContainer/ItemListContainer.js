import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../FirebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import NavbarResponsive from "../Navbar/Navbar";
import Row from 'react-bootstrap/Row';
import CategoryWidget from "../CategoryWidget/CategoryWidget";
import Spinner from "../spinner/spinner";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const queryRef = !categoryId ?
            collection(db, "items") :
            query(collection(db, "items"), where("category", "==", categoryId));
        getDocs(queryRef).then(result => {
            const resultados = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });
            setProductos(resultados);
            setLoading(false);
        })
    }, [categoryId]);

    if (loading === true) {
        return <Spinner />;
    }

    return (
        <>
            <div>
                <NavbarResponsive />
                <CategoryWidget />
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                <ItemList items={productos} />
            </Row>
        </>
    )
};

export default ItemListContainer;