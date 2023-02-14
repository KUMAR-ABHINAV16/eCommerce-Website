import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";

function ProductPage() {
    const params = useParams();
    const navigate = useNavigate();

    const productId = params.productId;
    const [state, setState] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => {
                console.log(response);
                setState(response.data);
                setLoading(false);
            })
    }, []);

    const handleButtonClick = () => {
        navigate("/user");
    }

    return (
        <div >
            <Navbar />
            {/* <button onClick={handleButtonClick}></button> */}
            {/* <p>Product Page</p> */}
            {isLoading ? 
                <p>Loading...</p> :
                <>
                <div style={{border: "2px solid black" , width: "600px", marginLeft: "200px", borderRadius: "8px" }} >
                   {state && <img src={state.image} style={{height: "300px" , marginLeft: "200px" , marginTop: "50px"}} alt={state.title} />}
                    <h2 style={{marginLeft: "50px"}} >{state && state.title}</h2>
                    <h5 style={{marginLeft: "50px"}}  >{state && state.description}</h5> 
                </div>
                   
                </>
            }
        </div>
    )
}

export default ProductPage;


