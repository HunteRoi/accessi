import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
type Props = {
    name: string,
    image: any,
    divClass: string
};

const SicknessCard: React.FC<Props> = ({ name, image, divClass }) => {
    return <div className={divClass}>
        <Icon component={image} width='50px' height='50px'/>
        <Link to={`/sickness/${name.toLowerCase()}`}>{name}</Link>
    </div>;
};

export default SicknessCard;
