import { useState } from 'react';
import { Button, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import SicknessCard from '../SicknessCard';
import Settings from '../Settings';

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    return <>
        <SicknessCard name='TCA' />
        <SicknessCard name='Schizophrenia' />
        <SicknessCard name='Dyslexia' />
        <SettingOutlined onClick={showModal}/>

        <Modal
            title='Paramètres'
            open={isModalOpen}
            onOk={handleOk}
            footer={[
                <Button key='ok' type='primary' onClick={handleOk}>OK</Button>
            ]}
        >
            <Settings />
        </Modal>
    </>;
};

export default Home;
