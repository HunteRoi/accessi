import Schizophrenia from '../modules/Schizophrenia';
import Dyslexia from '../modules/dyslexia';
import TCA from '../modules/TCA';
import { InfoMetadata, Story } from '../typings';

type ModuleData = {
    disclaimer: string,
    name: string,
    experienceComponent: React.ReactNode,
    informations: InfoMetadata;
    stories: Story[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useExperience(disabilityName: string): ModuleData {
    const component = {
        disclaimer:'Attention, les images qui vont suivre vont vous brûler la rétine!',
        name: disabilityName,
        experienceComponent: <></>,
        informations: {
            description : 'Forme la plus fréquente de la dyschromatopsie (trouble de la vision des couleurs), le daltonisme est une anomalie de la vue qui se caractérise par l\'absence de perception des couleurs, ou par une incapacité à différencier certaines teintes ou couleurs il existe 3 types : Protanopie : absence des récepteurs rétinaux du rouge ; cette couleur est indétectable par le sujet. Protanomalie : présence d\'une mutation du pigment de la vision du rouge ; la sensibilité à cette couleur est diminuée. Tritanopie : absence des récepteurs rétinaux du bleu ; cette couleur est indétectable par le sujet.',
            summary: ['Trouble de la vision', 'Difficulté à percevoir les couleurs']
        },
        stories: [
            {
                name: 'Jérôme',
                content: `Je vous écris car pour ma part, je distingue très nettement les couleurs. Toutefois, j'ai
                    une petite faiblesse avec le vert clair que je confond parfois avec le gris clair.Aussi lors
                    que je passe les tests, je ne peux nullement voir, ou quasiment pas voir les chiffres ou
                    symboles se trouvant dans les cercles. Je ne vois que des ronds de différentes
                    couleurs. Aussi je sais que je suis daltonien. Je ne sais pas s'il existe réellement
                    plusieurs degrés de daltonisme, mais en tout les cas, je viens d'être recalé à une
                    embauche à cause de ça. (contrôleur SNCF).
                    J'ai parfois l'impression d'être dingue. Car voir clairement toutes les couleurs et ne pas
                    réussir c'est tests, je trouve cela très frustrants`,
                type: disabilityName
            },
            {
                name: 'Jérôme',
                content: `Je vous écris car pour ma part, je distingue très nettement les couleurs. Toutefois, j'ai
                    une petite faiblesse avec le vert clair que je confond parfois avec le gris clair.Aussi lors
                    que je passe les tests, je ne peux nullement voir, ou quasiment pas voir les chiffres ou
                    symboles se trouvant dans les cercles. Je ne vois que des ronds de différentes
                    couleurs. Aussi je sais que je suis daltonien. Je ne sais pas s'il existe réellement
                    plusieurs degrés de daltonisme, mais en tout les cas, je viens d'être recalé à une
                    embauche à cause de ça. (contrôleur SNCF).
                    J'ai parfois l'impression d'être dingue. Car voir clairement toutes les couleurs et ne pas
                    réussir c'est tests, je trouve cela très frustrants`,
                type: disabilityName
            }
        ]
    };

    switch(disabilityName) {
        case 'tca':
            component.experienceComponent = <TCA />;
            break;
        case 'dyslexia':
            component.experienceComponent = <Dyslexia />;
            break;
        case 'schizophrenia':
            component.experienceComponent = <Schizophrenia />
            break;
        default:
            throw new Error('Unknown experience');
    }

    return component;
}
