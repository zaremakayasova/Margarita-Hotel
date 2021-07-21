import HeroSection from '../../components/HeroSection/HeroSection';
import NavBar from '../../components/NavBar/NavBar';

const ErrorPage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection sectionName={'error-page'} title={404} text={'Page Not Found'} url={'/'} urlText={'RETURN HOME'} />
        </div>
    );
};

export default ErrorPage;