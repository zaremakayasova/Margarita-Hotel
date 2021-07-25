import HeroSection from '../../components/HeroSection/HeroSection';

const ErrorPage = ({ text, urlText, url }) => {
    return (
        <div>
            <HeroSection sectionName={'error-page'} title={404} text={text} url={url} urlText={urlText} />
        </div>
    );
};

export default ErrorPage;