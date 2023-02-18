import { Link } from 'react-router-dom';

type Props = {
    name: string
};

const SicknessCard: React.FC<Props> = ({ name }) => {
    return <div>
        <Link to={`/sickness/${name}`}>Sickness card</Link>
    </div>;
};

export default SicknessCard;
