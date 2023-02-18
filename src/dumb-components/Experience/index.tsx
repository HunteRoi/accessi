import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

type Props = {
    component: React.ReactNode,
    goToNextStep: () => void
}

const Experience: React.FC<Props> = ({ component, goToNextStep }) => {
    return <>
        <h1>Experience works</h1>
        <Button 
        type="primary" 
        shape="circle" 
        icon={<InfoCircleOutlined />} 
        size="large"
        onClick={goToNextStep} />
        {component}
    </>;
}

export default Experience;
