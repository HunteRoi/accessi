/* eslint-disable @typescript-eslint/no-empty-function */

import { useState } from 'react';
import { StepProps, Steps } from 'antd';
import { useParams } from 'react-router-dom'

import './style.css';
import Experience from '../../dumb-components/Experience';
import Information from '../../dumb-components/Information';
import Stories from '../../dumb-components/Stories';
import StarterExperience from '../../dumb-components/StarterExperience';
import StepperDot from '../../dumb-components/StepperDot';
import useExperience from '../../hooks/useExperience';
import NotFound from '../../dumb-components/NotFound';
import FeedbackModal from '../FeedbackModal';
import { InfoMetadata, Story } from '../../typings';

type Step = {
    type: 'experience' | 'informations' | 'stories' | 'starter';
    title: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getContent: (arg: any, callback: () => void) => React.ReactNode;
};

const steps: Step[] = [
    {
        type: 'starter',
        title: 'Démarrer l\'expérience',
        getContent: (disclaimer: string, goToNextStep): React.ReactNode => (
            <StarterExperience disclaimer={disclaimer} goToNextStep={goToNextStep} />
        )
    },
    {
        type: 'experience',
        title: 'Expérience',
        getContent: (experienceComponent: React.ReactNode, goToNextStep): React.ReactNode => (
            <Experience component={experienceComponent} goToNextStep={goToNextStep} />
        )
    },
    {
        type: 'informations',
        title: 'Informations',
        getContent: (infoMetadata: InfoMetadata): React.ReactNode => (
            <Information description={infoMetadata.description} summary={infoMetadata.summary} />
        )
    },
    {
        type:'stories',
        title: 'Témoignages',
        getContent: (stories: Story[]): React.ReactNode => (
            <Stories stories={stories} />
        )
    }
];

const Sickness: React.FC = () => {
    const { name } = useParams();
    if (!name) return <NotFound />;

    const { experienceComponent, informations, stories, disclaimer } = useExperience(name);
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => setCurrent(value);
    const goToNext = () => onChange(current + 1);

    let component: React.ReactNode;
    switch(steps[current].type) {
        case 'starter':
            component = steps[current].getContent(disclaimer, goToNext);
            break;
        case 'experience':
            component = steps[current].getContent(experienceComponent, goToNext);
            break;
        case 'informations':
            component = steps[current].getContent(informations, () => {});            
            break;
        case 'stories':
            component = steps[current].getContent(stories, () => {});
            break;
        default: throw new Error('Type not found');
    }

    const items: StepProps[] = steps.map(s => ({ title: s.title }));

    return (
        <div>
            { component }
            { name }
            <Steps
                type='inline'
                progressDot={StepperDot}
                current={current}
                items={items}
                onChange={onChange}
            />
            <FeedbackModal />
        </div>
    );
};

export default Sickness;
