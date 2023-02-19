import { Button } from 'antd';
import './style.css';

type Props = {
    changeStep: () => void;
    label?:string;
};

const ChangeStepButton: React.FC<Props> = ({ changeStep, label }) => (
    <>
        <Button
            type='primary'
            shape='default'
            size='large'
            onClick={changeStep}
            className='start-experience'
        >
            {label}
        </Button>
    </>
);

export default ChangeStepButton;
