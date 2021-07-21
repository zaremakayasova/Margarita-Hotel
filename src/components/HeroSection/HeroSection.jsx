import './HeroSection.css';
import Banner from '../Banner/Banner';

const HeroSection = ({ title, text, url, urlText, sectionName }) => {
    return (
        <div className={sectionName}>
            <Banner title={title} text={text} url={url} urlText={urlText} />
        </div>
    );
};

export default HeroSection;