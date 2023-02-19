import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';

import './style.css';

type Props = {
    isLink?: boolean,
    label?: string,
    icon: React.ReactNode,
    className: string
};

const SicknessCard: React.FC<Props> = ({ isLink, label, icon, className }) => {
    if (isLink && label) {
        return (<div className={className}>
            <Link to={`/sickness/${label.toLowerCase()}`}>
                {icon}
                <h3>{label}</h3>
            </Link>
        </div>);
    }

    if (label) {
        return (<div className={className}>
            {icon}
            <h2>{label}</h2>
        </div>);
    }

    return <div className={className}>{icon}</div>;
};

export default SicknessCard;
