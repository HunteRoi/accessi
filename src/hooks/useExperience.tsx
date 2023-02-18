import Dyslexia from '../modules/dyslexia';
import TCA from '../modules/TCA';

type ModuleData = {
    experienceComponent: React.ReactNode,
    informations: string;
    stories: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useExperience(name: string): ModuleData {
    const component = {
        experienceComponent: <></>,
        informations: '',
        stories: ''
    };

    switch(name) {
        case 'TCA':
            component.experienceComponent = <TCA />;
            break;
        case 'dyslexia':
            moduleData.experienceComponent = <Dyslexia
                content="La dyslexie est un trouble d'apprentissage d'origine neurologique. Il s'agit donc d'un problème de fonctionnement dans le cerveau, et non d'un problème d'intelligence ni de stimulation. Le cerveau des personnes présentant une dyslexie a de la difficulté à percevoir et à analyser de façon précise et rapide les sons dans les mots, alors que les autres zones du cerveau fonctionnent normalement.
                Un enfant qui souffre de dyslexie a ainsi de la difficulté à reconnaître les mots écrits. En lisant, il oublie parfois des lettres, les inverse ou les remplace par d'autres sans faire exprès, ce qui nuit à la vitesse et à la précision de sa lecture.
                Certains enfants dyslexiques ne font toutefois pas d'erreurs en lisant, mais leur vitesse de lecture est très lente. Dans tous les cas, l'enfant qui souffre de dyslexie peut avoir de la difficulté à comprendre ce qu'il lit, peu importe qu'il lise lentement ou vite, qu'il fasse beaucoup d'erreurs ou non.
                Par contre, les enfants qui ont des difficultés en lecture ne présentent pas tous une dyslexie. Certains, par exemple, ont un trouble du langage oral (ex. : trouble développemental du langage autrefois appelé « dysphasie ») qui a des répercussions sur leur apprentissage du langage écrit. Par ailleurs, les enfants présentant une dyslexie n'ont pas nécessairement de difficulté à comprendre et à parler avant 5 ans, mais si c'est le cas, ces troubles sont souvent légers."
            />;
            break;
        default:
            throw new Error('Unknown experience');
    }

    return component;
}
