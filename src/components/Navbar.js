import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo2.svg';

function Navbar() {
    const cartProducts = useSelector((store) => store.cart);

    let nCartItems = 0;
    cartProducts.map((productObj) => {
        nCartItems += productObj.qty;
    });

    return (
        <div style={{ display: "flex" }}>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <div style={{ marginLeft: "1100px" }}>
                <Link to="/products">
                    <h1 style={{color: 'blue'}} >Product</h1>
                </Link>
            </div>
            <div style={{ marginLeft: "30px" }}>
                <Link to='/cart'>
                    <h1 style={{color: 'blue' , height: "50px"}} >Cart ({nCartItems})</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;

