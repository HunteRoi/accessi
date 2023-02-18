/* eslint-disable @typescript-eslint/no-empty-function */

import { useState } from 'react';
import { StepProps, Steps,Button } from 'antd';
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
import { MessageOutlined } from '@ant-design/icons';

type Step = {
    type: 'experience' | 'informations' | 'stories';
    title: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getContent: (arg: any, callback: () => void) => React.ReactNode;
};

const steps: Step[] = [
    {
        type: 'experience',
        title: 'Expérience',
        getContent: (experienceComponent: React.ReactNode, goToInformation: () => void): React.ReactNode => {
            return <Experience component={experienceComponent} goToInformation={goToInformation} />;
        }
    },
    {
        type: 'informations',
        title: 'Informations',
        getContent: (infoMetadata): React.ReactNode => {
            return <Information description={infoMetadata.description} summary={infoMetadata.summary} />;
        }
    },
    {
        type:'stories',
        title: 'Témoignages',
        getContent: (stories): React.ReactNode => {
            return <Stories stories={stories}/>;
        }    
    }
];

const Sickness: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => setCurrent(value);
    const goToInformation = () => onChange(1);
    const { name } = useParams();
    if (!name) return <NotFound />;

    const { experienceComponent, informations, stories } = useExperience(name);
    
    let component: React.ReactNode;
    switch(steps[current].type) {
        case 'experience':
            component = steps[current].getContent(experienceComponent, goToInformation);
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
                onChange={onChange} />
            <Button type="primary" shape="circle" icon={<MessageOutlined />} size="large" />
        </div>
    );
};

export default Sickness;
