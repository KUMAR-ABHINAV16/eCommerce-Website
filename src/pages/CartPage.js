import { useSelector } from "react-redux";

function CartPage() {
    const cartProducts = useSelector((store) => store.cart);

    return (
        <div>
            <h2>Cart Page</h2>
            <div>
                {cartProducts.map((product) => (
                    <div>
                        <img src={product.image} />
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>Quantity: {product.qty}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartPage;