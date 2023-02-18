import { useState } from 'react';
import { Form, Input, Divider, Select } from 'antd';

import './style.css';

const Settings: React.FC = () => {
    const [font, setFont] = useState('din');
    const changeFont = (font: string) => {
        setFont(font);

        switch(font) {
            case 'din':
                document.body.dataset.font = 'din';
                break;
            case 'oda':
                document.body.dataset.font = 'dyslexic';
                break;
            default:
                document.body.dataset.font = 'din';
        }
    }

    return <Form title='Customiser son expérience' initialValues={{
        primary: '#613d26',
        secondary: '#e5bb9e',
        info: '#e08c57',
        alert: '#614e44',
        warn: '#ad6d44'
    }}>
        <Divider>Police d'écriture</Divider>
        <div className='font-container'>
            <Select
                defaultValue={font}
                style={{ width: 200 }}
                options={[
                    { value: 'din', label: 'DIN' },
                    { value: 'oda', label: 'Open Dyslexic Alta' },
                ]}
                onChange={changeFont}
            />
        </div>

        <Divider>Palette de couleurs</Divider>
        <div>
            <Form.Item label='Primary' name='primary'>
                <Input disabled type='color' />
            </Form.Item>
            <Form.Item label='Secondary' name='secondary'>
                <Input disabled type='color' />
            </Form.Item>
            <Form.Item label='Info' name='info'>
                <Input disabled type='color' />
            </Form.Item>
            <Form.Item label='Alert' name='alert'>
                <Input disabled type='color' />
            </Form.Item>
            <Form.Item label='Warn' name='warn'>
                <Input disabled type='color' />
            </Form.Item>
        </div>


    </Form>;
};

export default Settings;
