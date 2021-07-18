import './Services.css';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
    return (
        <div className='services'>
            <h1>Services</h1>
            <hr />
            <div className='services-container'>
                <div className='service-item'>
                    <span><FaCocktail /></span>
                    <h2>Free Cocktails</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quos harum possimus laudantium eum distinctio.</p>
                </div>
                <div className='service-item'>
                    <span><FaHiking /></span>
                    <h2>Endless Hiking</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim non recusandae nobis ad ullam?</p>
                </div>
                <div className='service-item'>
                    <span><FaShuttleVan /></span>
                    <h2>Free Shuttle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut quod cumque velit, laudantium omnis.</p>
                </div>
                <div className='service-item'>
                    <span><FaBeer /></span>
                    <h2>Strongest Beer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illum minima incidunt dolorum, qui at.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;