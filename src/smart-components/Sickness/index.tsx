/* eslint-disable @typescript-eslint/no-empty-function */

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StepProps, Steps, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

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
        getContent: (infoMetadata: InfoMetadata, goToNextStep): React.ReactNode => (
            <Information description={infoMetadata.description} summary={infoMetadata.summaries} goToNextStep={goToNextStep} />
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
    const navigate = useNavigate();

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
            component = steps[current].getContent(informations, goToNext);            
            break;
        case 'stories':
            component = steps[current].getContent(stories, () => {});
            break;
        default: throw new Error('Type not found');
    }

    const items: StepProps[] = steps.map(s => ({ title: s.title }));

    return (
        <>
            <h1>{ name }</h1>
            <Button
                className='backToHome'
                type='primary'
                shape='circle'
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate('/')}
            />
            { component }
            <Steps
                className='stepper'
                type='inline'
                progressDot={StepperDot}
                current={current}
                items={items}
                onChange={onChange}
            />
            <FeedbackModal />
        </>
    );
};

export default Sickness;
