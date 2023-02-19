import './style.css';
import ChangeStepButton from '../ChangeStepButton';

type Props = {
    disclaimer: string,
    goToNextStep: () => void
};

const Experience: React.FC<Props> = ({ disclaimer, goToNextStep }) => (
    <div className='starter-container'>
        <ChangeStepButton
            changeStep={goToNextStep}
            label="Débuter l'expérience"
        />
        <p>{disclaimer}</p>
    </div>
);

export default Experience;
