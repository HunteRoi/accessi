import ChangeStepButton from '../ChangeStepButton';

type Props = {
    component: React.ReactNode,
    goToNextStep: () => void
}

const Experience: React.FC<Props> = ({ component, goToNextStep }) => {
    return <>
        <h2>Experience</h2>
        <ChangeStepButton 
            changeStep={goToNextStep}
            label='En savoir plus'
        />
        {component}
    </>;
}

export default Experience;
