
import Navbar from '../components/Navbar';

function HomePage() {
    return (
        <>
        <div>
            <Navbar />
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""  height= "658px" style={ {width :"1600px"} } />
            
        </div>
       
        {/* <div className="card-img-overlay p-5  ">

        <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-secondary">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 text-secondary">CHECK OUT ALL THE TRENDS</p>
           
        </div>
        </div> */}
        </>
    )
};

export default HomePage;
