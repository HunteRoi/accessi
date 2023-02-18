import Settings from '../Settings';
import SicknessCard from '../SicknessCard';

const Home: React.FC = () => {
    return <>
        <p>Home works</p>

        <SicknessCard name='test' />
        <SicknessCard name='test' />
        <SicknessCard name='test' />
        <SicknessCard name='test' />

        <Settings />
    </>;
};

export default Home;
