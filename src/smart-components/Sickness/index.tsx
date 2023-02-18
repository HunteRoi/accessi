import React, { useState } from 'react';
import { Steps } from 'antd';
import Experience from '../../dumb-components/Experience';
import Information from '../../dumb-components/Information';
import Story from '../../dumb-components/Story';
import StepperDot from '../../dumb-components/StepperDot';
import './style.css';

const steps = [
    {
        title: 'Expérience',
        content: <Experience/>
    },
    {
        title: 'Informations',
        content: <Information/>
    },
    {
        title: 'Témoignages',
        content: <Story/>
    }
];

export default function Sickness() {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => setCurrent(value);

    return (
        <div>
            { steps[current].content }
            <Steps
                type='inline'
                progressDot={StepperDot}
                current={current}
                items={steps}
                onChange={onChange} />
        </div>
    );
}

