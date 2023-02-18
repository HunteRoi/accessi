type ModuleData = {
    experienceComponent: React.ReactNode,
    informations: string;
    stories: string;
};

const Exp: React.FC = () => (<p>Exp works</p>);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useExperience(name: string): ModuleData {
    return {
        experienceComponent: <Exp />,
        informations: '',
        stories: ''
    };
}
