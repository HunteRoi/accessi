import './style.css';
import ChangeStepButton from '../ChangeStepButton';

type Props = {
    component: React.ReactNode,
    goToNextStep: () => void
}

const Experience: React.FC<Props> = ({ component, goToNextStep }) => (
    <div className='experience-container'>
        <h2>Expérience</h2>
        <ChangeStepButton
            changeStep={goToNextStep}
            label='En savoir plus'
        />
        {component}
    </div>
);

export default Experience;
