import NavBar from '../../components/NavBar/NavBar';
import HeroSection from '../../components/HeroSection/HeroSection';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';

const RoomsPage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection sectionName={'rooms-page'} title={'Our Rooms'} url={'/'} urlText={'RETURN HOME'} />
            <RoomsContainer />
        </div>
    );
};

export default RoomsPage;