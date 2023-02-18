import TCA from '../modules/TCA';

type ModuleData = {
    experienceComponent: React.ReactNode,
    informations: string;
    stories: string;
};

const Exp: React.FC = () => (<p>Exp works</p>);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useExperience(name: string): ModuleData {
    const component = {
        experienceComponent: <></>,
        informations: '',
        stories: ''
    };

    switch(name) {
        case 'TCA':
            component.experienceComponent = <TCA />
            break;
        default:
            throw new Error('Unknown experience');
    }

    return component;
}
