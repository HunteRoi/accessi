import { Button } from 'antd';
import './style.css';

type Props = {
    changeStep: () => void;
    label?:string;
};

const ChangeStepButton: React.FC<Props> = ({ changeStep, label }) => (
    <Button
        type='primary'
        shape='default'
        size='large'
        onClick={changeStep}
        className='change-step'
    >
        {label}
    </Button>
);

export default ChangeStepButton;
