import { PlayCircleOutlined } from '@ant-design/icons';
import ChangeStepButton from '../ChangeStepButton';

type Props = {
    disclaimer: string,
    goToNextStep: () => void
};

const Experience: React.FC<Props> = ({ disclaimer, goToNextStep }) => (
    <>
        <ChangeStepButton 
        changeStep={goToNextStep} 
        icon={<PlayCircleOutlined/>}
        />
        <p>{disclaimer}</p>
    </>
);

export default Experience;
