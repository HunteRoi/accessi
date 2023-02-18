import { useState } from 'react';
import { StepProps, Steps } from 'antd';
import {
    useParams
  } from 'react-router-dom'

import Experience from '../../dumb-components/Experience';
import Information from '../../dumb-components/Information';
import Stories from '../../dumb-components/Stories';
import StepperDot from '../../dumb-components/StepperDot';
import './style.css';
import useExperience from '../../hooks/useExperience';
import NotFound from '../../dumb-components/NotFound';

type Step = {
    type: 'experience' | 'informations' | 'stories';
    title: string;
    getContent: (arg: any) => React.ReactNode;
};

const steps: Step[] = [
    {
        type: 'experience',
        title: 'Expérience',
        getContent: (experienceComponent: React.ReactNode): React.ReactNode => (<Experience component={experienceComponent} />)
    },
    {
        type: 'informations',
        title: 'Informations',
        getContent: () => (<Information />)
    },
    {
        type:'stories',
        title: 'Témoignages',
        getContent: () => (<Stories />)
    }
];

const Sickness: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => setCurrent(value);

    const { name } = useParams();
    if (!name) return <NotFound />;

    const { experienceComponent, informations, stories } = useExperience(name);

    let component: React.ReactNode;
    switch(steps[current].type) {
        case 'experience':
            component = steps[current].getContent(experienceComponent);
            break;
        case 'informations':
            component = steps[current].getContent(informations);
            break;
        case 'stories':
            component = steps[current].getContent(stories);
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
                onChange={onChange} />
        </div>
    );
};

export default Sickness;
