import NavBar from '../../components/NavBar/NavBar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';


const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection title={'Luxurious Rooms'} text={'Deluxe Rooms Starting At $299'} url={'/rooms'} urlText={'OUR ROOMS'} />
            <Services />
        </div>
    );
};

export default HomePage;