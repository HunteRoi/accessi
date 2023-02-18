import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

type Props = {
    component: React.ReactNode,
    goToInformation: () => void
}

const Experience: React.FC<Props> = ({ component, goToInformation }) => {
    return <>
        <h1>Experience works</h1>
        <Button 
        type="primary" 
        shape="circle" 
        icon={<InfoCircleOutlined />} 
        size="large"
        onClick={()=>goToInformation()} />
        {component}
    </>;
}

export default Experience;
