import { Link } from 'react-router-dom';

import './style.css';

type Props = {
    isLink?: boolean,
    label?: string,
    icon: React.ReactNode,
    className: string,
    onClick?: () => void
};

const SicknessCard: React.FC<Props> = ({ isLink, label, icon, className, onClick }) => {
    if (isLink && label) {
        return (<div className={className}>
            <Link to={`/sickness/${label.toLowerCase()}`}>
                {icon}
                <h3>{label}</h3>
            </Link>
        </div>);
    }

    if (label) {
        return (<div className={className + (onClick ? ' clickable' : '')} onClick={onClick}>
            {icon}
            <h2>{label}</h2>
        </div>);
    }

    return <div className={className}>{icon}</div>;
};

export default SicknessCard;
