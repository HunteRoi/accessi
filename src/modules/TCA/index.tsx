import TCA_Hidden from './TCA_hidden.png';
import TCA_Revealed from './TCA_revealed.png';
import ReactCompareImage from 'react-compare-image';

const TCA: React.FC = () => {
    return <>
        <ReactCompareImage sliderPositionPercentage={0} leftImage={TCA_Revealed} rightImage={TCA_Hidden} />;
    </>
}

export default TCA;