import { Item } from "../Item/Item"

export const ItemList = ({ items }) => {

    return (
        <>
            {items.map(producto => (<Item key={producto.id} item={producto} />))}
        </>
    );
};