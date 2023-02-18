import Settings from '../Settings';
import SicknessCard from '../SicknessCard';

const Home: React.FC = () => {
    return <>
        <p>Home works</p>

        <SicknessCard name='TCA' />
        <SicknessCard name='dyslexia' />
        <SicknessCard name='test' />

        <Settings />
    </>;
};

export default Home;
