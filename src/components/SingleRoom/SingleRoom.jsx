import './SingleRoom.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Banner from '../Banner/Banner';
import StyledHero from '../StyledHero/StyledHero';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const SingleRoom = ({ match, sortedRooms }) => {
    const matchedRoom = sortedRooms.find(room => (
        room.fields.slug === match.params.slug
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

const mapStateToProps = state => ({
    sortedRooms: state.rooms.sortedRooms
});

export default withRouter(connect(mapStateToProps)(SingleRoom));