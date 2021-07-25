import HeroSection from '../../components/HeroSection/HeroSection';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';


const RoomsPage = ({ rooms }) => {
    return (
        <div>
            <HeroSection sectionName={'rooms-page'} title={'Our Rooms'} url={'/'} urlText={'RETURN HOME'} />
            <RoomsContainer rooms={rooms} />
        </div>
    );
};

export default RoomsPage;