import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms';


const HomePage = () => {
    return (
        <div>
            <HeroSection sectionName={'home-page'} title={'Luxurious Rooms'} text={'Deluxe Rooms Starting At $299'} url={'/rooms'} urlText={'OUR ROOMS'} />
            <Services />
            <FeaturedRooms />
        </div>
    );
};

export default HomePage;