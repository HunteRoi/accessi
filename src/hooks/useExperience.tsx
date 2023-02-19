import Schizophrenia from '../modules/Schizophrenia';
import Dyslexia from '../modules/dyslexia';
import TCA from '../modules/TCA';
import { InfoMetadata, Story } from '../typings';

type ModuleData = {
    disclaimer?: string,
    name?: string,
    experienceComponent: React.ReactNode,
    informations: InfoMetadata;
    stories: Story[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useExperience(disabilityName: string): ModuleData {
    const component: ModuleData = {
        disclaimer: '',
        name: disabilityName,
        experienceComponent: <></>,
        informations: {
            description : '',
            summaries: []
        },
        stories: []
    };

    switch(disabilityName) {
        case 'tca':
            component.experienceComponent = <TCA />;
            component.disclaimer = 'Ca pèse lourd...';
            component.informations = {
                description: `Un trouble du comportement alimentaire (TCA) est une pratique alimentaire «
                    anormale »
                    associée à une grande souffrance psychique, qui s'installe durablement et dont les
                    conséquences pour la santé de l'individu peuvent être graves. Dans ce type de maladie
                    mentale, les attitudes face à son corps, à son poids et à la nourriture sont perturbées.
                    Le fonctionnement psychosocial et la qualité de vie y sont également très altérés.
                    Il existe quatre types de troubles alimentaires médicalement définis : l'anorexie
                    mentale, la boulimie mentale, l'hyperphagie boulimique (aussi appelée frénésie
                    alimentaire) et les troubles alimentaires non spécifiés
                    > L'anorexie mentale
                    Il s'agit d'une restriction alimentaire visant une perte de poids significative. L'anorexie
                    mentale se caractérise par une peur intense de devenir gros, malgré une maigreur
                    apparente et un poids en dessous de la normale (établi à partir de l'IMC). On retrouve
                    aussi des conduites interférant avec la prise de poids, alors que celui-ci est
                    significativement bas.
                    > La boulimie
                    La crise boulimique correspond à l'ingestion d'un volume alimentaire largement
                    supérieur à la normale en un temps limité, de moins de 2 heures en général, de
                    manière compulsive ou ritualisée. La survenue de ces crises est associée à des
                    sentiments de honte, de culpabilité et de perte de contrôle.
                    > L'hyperphagie boulimique
                    L'hyperphagie boulimique, ou accès d'hyperphagie, se présente sous la forme
                    de crises de boulimie incontrôlées et récurrentes, sans comportements
                    compensatoires. Généralement, une certaine restriction est observable, ce qui renforce
                    les pulsions alimentaires. L'absence de comportements compensatoires est ce qui
                    différencie l'hyperphagie de la boulimie.
                    > Le trouble des conduites alimentaires non spécifié
                    Le trouble des conduites alimentaires non spécifié est un diagnostic du DSM-5 utilisé
                    pour qualifier toutes les problématiques qui ne répondent pas précisément aux critères
                    txt hackaton 8
                    des troubles du comportement alimentaire spécifiques, tels que l'anorexie mentale, la
                    boulimie et l'accès hyperphagique. Les médecins peuvent l'utiliser par exemple
                    lorsqu'ils ne disposent pas de toutes les informations nécessaires pour évoquer un
                    diagnostic précis de TCA.
                    > Le mérycisme
                    Il s'agit d'une régurgitation ou d'une re-mastication des aliments qui peut durer des
                    heures. Ceux-ci sont à nouveau mastiqués, ruminés, puis généralement ravalés, en
                    l'absence de nausées ou de sentiment de dégoût. Cette pratique, qui « remplace »
                    l'alimentation adaptée, a pour objectif de tromper la frustration de faim, et survient après
                    un repas.
                    > L'hyperphagie nocturne
                    Il s'agit d'une prise alimentaire non contrôlée, excessive, pendant la nuit. L'individu
                    se réveille pour aller manger copieusement. Il va ainsi manger rapidement, de manière
                    compulsive, sans être capable de refréner cette envie.
                    > Le pica
                    Ce trouble repose sur l'ingestion répétée de substances dont les qualités nutritives
                    sont nulles, mais aussi non comestibles (papier, éponges, savon, peinture, métal,
                    argile, etc.). Le type et la nature des substances varie en fonction de l'âge. Cette
                    conduite doit être répétée dans le temps et jugée grave et ne correspond pas « à une
                    pratique culturellement ou socialement admise ». Il est plus fréquent chez les enfants
                    ayant un handicap intellectuel sévère.`,
                summaries: [

                ]
            };
            component.stories = [
                {
                    type: disabilityName,
                    color:'#613d26',
                    content: `Bac en poche et une fois arrivée en classes préparatoires, j'ai pris une pilule
                    pour limiter mon acné qui m'a fait prendre du poids. J'ai été affolée par cette prise de
                    poids qui me renvoyait à mes moments traumatisants du collège. J'ai replongé dans
                    un régime, cette fois ci beaucoup plus drastique… J'allais petit à petit vers l'anorexie
                    en me restreignant de plus en plus mais « l'apogée » de tout ça est allé de pair avec
                    mon arrivée en école de commerce. Je me suis mise en couple avec un garçon, j'ai très
                    mal vécu notre rupture que j'ai vécu comme un réel abandon… Décidée à le récupérer
                    txt hackaton 9
                    et sachant qu'il n'aimait pas "les filles grosses", j'ai décidé de devenir "la fille la plus
                    mince de l'école".
                    C'est cette volonté qui m'a plongée dans l'anorexie. Pendant les deux années qui ont
                    suivi cette maladie a fait partie intégrante de ma vie…`
                },
                {
                    type: disabilityName,
                    color:'#e08c57',
                    content: `L'hyperphagie et alimentation troublée (14 ans à 18 ans) - Le début de mes troubles
                    remonte à ma classe de troisième, à ce moment-là en plein dans la puberté, j'avais un
                    très léger surpoids. Malgré le caractère très léger de ce surpoids, mes camarades
                    n'ont pas manqué de me répéter jour après jour que j'étais « trop grosse ». Les
                    moqueries répétées ont fait que je me suis réfugiée dans la nourriture et que j'ai
                    développé de l'hyperphagie.`
                },
            ];
            break;
        case 'dyslexie':
            component.experienceComponent = <Dyslexia />;
            component.disclaimer = 'Les lettres dansent la salsa!';
            component.informations = {
                description: `La dyslexie est un trouble d'apprentissage d'origine neurologique, et plusieurs
                    études suggèrent qu'elle est héréditaire. Les enfants présentant une dyslexie ont de la
                    difficulté à décoder les mots écrits. Certaines mesures peuvent être mises en place
                    pour faciliter l'apprentissage de la lecture malgré la dyslexie.
                    elle se manifestent par des confusions et inversions de sons et de lettres, des
                    fautes d'orthographe, voire une écriture lente et illisible.`,
                summaries: ['Trouble d\'apprentissage d\'origine neurologique', 'Confusions, inversions de sons & lettres', 'Fautes d\'orthographe', 'Écriture lente et illisible']
            };
            component.stories = [
                {
                    type: disabilityName,
                    name: 'Timothée',
                    color:'#ad6d44',
                    content: `Je m'appelle Timothée et j'ai 23 ans. J'ai grandi dans une famille de dyslexiques : ma
                    soeur et mon frère sont dyslexiques et comme je suis le dernier, mes parents étaient
                    sensibilisés sur le sujet. Le diagnostic a été tardif, en 5e je crois, grâce à mon
                    professeur de français. J'ai été suivi par une orthophoniste qui m'a évidemment
                    beaucoup aidé mais qui était un peu maladroite. Elle m'a laissé sous-entendre qu'on
                    ne pouvait rien faire pour ma dyslexie et que j'avais la mémoire d'un enfant de 5 ans, un
                    peu dur à encaisser pour un jeune garçon !`
                },
                {
                    type: disabilityName,
                    name: 'Zaïa',
                    color:'#e08c57',
                    content: `A 26 ans, je ne savais ni lire ni écrire. J'étais terrifiée à l'idée que les gens le
                    découvrent. J'ignorais souffrir de dyslexie, une difficulté à associer des sons à des
                    lettres, qui perturbe l'apprentissage de la lecture et de l'écriture. J'ai grandi en me
                    battant contre cet ennemi invisible, qui a fait de ma scolarité un chemin de croix. Au CP,
                    l'alphabet ne veut pas s'ordonner dans ma tête. Cette succession de lettres dans un
                    mot, pour quoi faire ? Si l'on me dit " voiture ", je la vois en 3D, mais le mot écrit n'a
                    aucun sens pour moi.
                    Au CE 1, il m'est impossible d'écrire des phrases de quatre mots sur mon ardoise
                    comme de traduire en sons les lettres tracées au tableau. Combien de fois ai-je voulu
                    crier que ce n'était que gribouillis incompréhensibles ?`
                }
            ];
            break;
        case 'schizophrénie':
            component.experienceComponent = <Schizophrenia />
            component.disclaimer = 'Pour une meilleure expérience, pensez à utiliser un casque audio !';
            component.informations = {
                description: `La schizophrénie est un trouble psychotique chronique qui peut affecter la
                compréhension du monde de la personne atteinte et sa façon d'interagir avec les
                autres
                La schizophrénie est une maladie du cerveau qui affecte la pensée, les sentiments et
                les émotions, tout comme les perceptions et les comportements des personnes qui en
                sont atteintes. Toutes ces fonctions ne sont cependant pas perturbées au même
                moment et dans la même mesure. De nombreuses personnes souffrant de
                schizophrénie peuvent avoir un comportement parfaitement normal pendant de longues
                périodes. Quelques symptômes :
                \n→ Éprouver des difficultés à établir un contact avec son entourage,
                \n→ Être envahie par des idées et des impressions étranges,
                \n→ Avoir l'impression d'entendre des voix qui, bien que n'existant pas réellement, font partie de sa réalité,
                \n→ Être prisonnière de ses hallucinations et de son délire,
                \n→ Avoir une perception de soi partiellement, voire totalement altérée,
                \n→ Avoir beaucoup de difficultés à distinguer ce qui est réel de ce qui ne l'est pas,
                \n→ Avoir la conviction que certaines personnes lui veulent du mal,
                \n→ Se replier sur elle-même et se comporter d'une façon bizarre ou imprévisible,
                \n→ Se désintéresser de nombreuses choses : habillement, ménage, hygiène corporelle,
                \n→ Avoir des réactions émotionnelles étranges et incongrues,
                \n→ Percevoir son entourage comme hostile,
                \n→ Ressentir une insécurité permanente`,
                summaries: []
            };
            component.stories = [
                {
                    type: disabilityName,
                    name: 'Maman de Charles',
                    color:'#613d26',
                    content: `Chez Charles, son trouble se manifeste par des hallucinations visuelles : parfois, il voit
                        des taches noires, des mouches et des vaisseaux spatiaux, comme des lumières dans
                        le ciel. Il peut avoir des comportements incongrus, des petites bizarreries qui font partie
                        de ma vie, comme supporter une petite laine alors qu'il fait une chaleur étouffante. Il
                        n'est jamais violent physiquement, mais parfois il l'est verbalement. Il peut interpréter
                        des regards, des attitudes, peut être un peu paranoïaque.
                        Un épisode m'a particulièrement marqué. Charles rentre à la maison, il était à son cours
                        de tennis. Il claque précipitamment la porte derrière lui et me dit : "Ils sont en train de
                        me suivre." Il a l'air angoissé, alors je lui demande de qui il parle. "Les Chinois", me
                        répond-il. Son stress est très important et j'ai compris avec le temps qu'il est le noyau
                        de ses troubles. Je sais que l'enjeu est d'empêcher l'augmentation du stress, et ne pas
                        y rajouter mon angoisse. Dans ces situations, il ne faut pas lui dire que c'est dans sa
                        tête, mais plutôt proposer des solutions pour le rassurer. Alors je verrouille la porte, je le
                        rejoins dans sa chambre. Je lui propose d'appeler la police. Il s'apaise rapidement, et,
                        sous le choc, s'interroge tout haut : "Je suis parti en vrille ! J'ai complètement déliré". Il
                        se rend compte de la situation, et passe à autre chose.`,
                },
                {
                    type: disabilityName,
                    color:'#e08c57',
                    content: `Deux de mes camarades me comparaient à Elliot dans la série Mr. Robot. Mes
                        malaises, particulièrement visuels, étant devenus permanents, mon réflexe a été d'aller
                        voir un ophtalmologue. Mais rien d'anormal à signaler. J'étais persuadé que j'avais un
                        souci au niveau des yeux. J'ai donc consulté un second ophtalmologue. Toujours rien.
                        Je me revois retourner en cours après cette consultation, le coeur lourd. Je ne pouvais
                        me résoudre à croire que tout ça était "dans ma tête".
                        À peu près au même moment, je me suis tourné vers mon médecin généraliste, qui y a
                        vu une utilisation des écrans trop poussée et m'a quand même orienté vers une
                        psychanalyste avec qui je n'ai malheureusement pas accroché. J'étais censé parler de
                        moi sans dialogue, pourtant j'avais besoin de ce dialogue. J'ai alors vu une autre
                        psychologue. Cette fois le contact est passé, mais elle m'a annoncé au bout de
                        quelques séances qu'elle ne pourrait pas me guérir, uniquement m'aider à accepter les
                        symptômes. J'étais dos au mur : personne ne me comprenait. J'avais beau expliquer à
                        mon entourage mes symptômes, j'étais seul dans mon malheur. On me disait que
                        c'était normal, ou alors sans doute une crise d'hypoglycémie.`
                }
            ];
            break;
        default:
            throw new Error('Unknown experience');
    }

    return component;
}
