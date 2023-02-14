import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import { padding } from "@mui/system";

function Product({ productObj }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(productObj));
    }

    return (
        <div style={{ width: "400px", border: "2px solid black",
                    padding: "50px", marginLeft: "50px", marginBottom: "20px", borderRadius: "8px"
        }}>
            <Link to={`/products/${productObj.id}`}>
                <div style={{ height: "280px", overflow: "hidden"  }}>
                    <img src={productObj.image} width="200px" height="200px" />
                    <h3>{productObj.title}</h3>
                    {/* <p>{productObj.description}</p> */}
                </div>
            </Link>
            <button 
                style={{ marginTop: "20px", marginBottom: "20px" }}
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
