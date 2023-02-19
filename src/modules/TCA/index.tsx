import TCA_Hidden from './TCA_hidden.jpg';
import TCA_Revealed from './TCA_revealed.jpg';
import ReactCompareImage from 'react-compare-image';

const TCA: React.FC = () => {
    return <ReactCompareImage
        sliderPositionPercentage={0}
        leftImage={TCA_Revealed}
        rightImage={TCA_Hidden}
    />;
}

export default TCA;
