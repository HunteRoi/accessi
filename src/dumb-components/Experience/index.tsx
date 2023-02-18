import { InfoCircleOutlined } from '@ant-design/icons';
import ChangeStepButton from '../ChangeStepButton';

type Props = {
    component: React.ReactNode,
    goToNextStep: () => void
}

const Experience: React.FC<Props> = ({ component, goToNextStep }) => {
    return <>
        <h1>Experience works</h1>
        <ChangeStepButton 
        changeStep={goToNextStep} 
        icon={<InfoCircleOutlined/>}
        />
        {component}
    </>;
}

export default Experience;
