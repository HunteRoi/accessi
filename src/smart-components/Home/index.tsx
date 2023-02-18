import { useState } from 'react';
import { Button, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import './style.css';
import SicknessCard from '../SicknessCard';
import Settings from '../Settings';

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    return <>
        <div className="parent">
            <div className="div1">Choisir une expérience</div>
            <div className="div2">
                <SicknessCard name='Dyslexie' />
            </div>
            <div className="div3">Truc 1</div>
            <div className="div4">Schizo</div>
            <div className="div5">Truc 2</div>
            <div className="div6">Daltonisme</div>
            <div className="div7">Surdité</div>
            <div className="div8">Suggestions</div>
            <div className="div9">
                <SicknessCard name='TCA' />
            </div>
            <div className="div10">Dyscalculie</div>
            <div className="div11">Malvoyant</div>
            <div className="div12">Dysorthographie </div>
        </div> 
        

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
