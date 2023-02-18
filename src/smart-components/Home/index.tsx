import { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';

import SicknessCard from '../SicknessCard';
import Settings from '../Settings';
import { Modal } from 'antd';

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <>
        <SicknessCard name='TCA' />
        <SicknessCard name='Dyslexia' />

        <SettingOutlined onClick={showModal}/>

        <Modal title='Paramètres' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Settings />
        </Modal>
    </>;
};

export default Home;
