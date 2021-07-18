import HeroSection from "../../components/HeroSection/HeroSection";

const ErrorPage = () => {
    return (
        <div>
            <HeroSection title={404} text={'Page Not Found'} url={'/'} urlText={'RETURN HOME'} />
        </div>
    );
};

export default ErrorPage;