import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
type Props = {
    disclaimer: string,
    goToNextStep: () => void
}
const Experience: React.FC<Props> = ({disclaimer, goToNextStep}) => {
    return <>
    <Button 
        type="primary" 
        shape="circle" 
        icon={<PlayCircleOutlined />} 
        size="large"
        onClick={goToNextStep} />
        
        <p>{disclaimer}</p>
        
    </>;
}

export default Experience;
