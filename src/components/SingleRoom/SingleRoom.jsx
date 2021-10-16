import './SingleRoom.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Banner from '../Banner/Banner';
import StyledHero from '../StyledHero/StyledHero';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const SingleRoom = () => {
    const sortedRooms = useSelector(state => state.rooms.sortedRooms);
    const params = useParams();
    const matchedRoom = sortedRooms.find(room => (
        room.fields.slug === params.slug
    ));

    if (matchedRoom) {
        const { fields: { name, price, size, capacity, pets, breakfast, extras, images, description } } = matchedRoom;
        const [main, ...otherImages] = images;
        return (
            <div className='single-room'>
                <StyledHero image={images[0].fields.file.url}>
                    <Banner title={`${name} room`} url='/rooms' urlText='BACK TO ROOMS' />
                </StyledHero>
                <div className='single-room-images'>
                    {
                        otherImages.map((img, index) => (
                            <img key={index} src={img.fields.file.url} alt={name} />
                        ))
                    }
                </div>
                <div className='single-room-details'>
                    <div className='single-room-info'>
                        <h3>Details</h3>
                        <p>{description}</p>
                        <h3 className='extras-title'>Extras</h3>
                        <ul className='extras-list'>
                            {extras.map((item, index) => (
                                <li key={index}>- {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='single-room-info'>
                        <h3>Info</h3>
                        <h5>Price : ${price}</h5>
                        <h5>Size : {size} SQFT</h5>
                        <h5>Max Capacity : {capacity} people</h5>
                        <h5>{pets ? 'Pets allowed' : 'No Pets Allowed'}</h5>
                        <h5>{breakfast ? 'Free breakfast included' : 'Breakfast not included'}</h5>
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    } else {
        return (
            <ErrorPage url='/rooms' text='No such room could be found...' urlText='BACK TO ROOMS' />
        );
    };
};


export default SingleRoom;