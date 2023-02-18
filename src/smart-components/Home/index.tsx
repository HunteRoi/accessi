import { useState } from 'react';
import { Button, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import './style.css';
import SicknessCard from '../SicknessCard';
import Settings from '../Settings';

import { ReactComponent as DaltonismeSvg } from '../../img/daltonisme.svg'
import { ReactComponent as LogoSvg } from '../../img/logo.svg'
import { ReactComponent as DyscalculieSvg } from '../../img/dyscalculie.svg'
import { ReactComponent as DyslexieSvg } from '../../img/dyslexie.svg'
import { ReactComponent as DysorthographieSvg } from '../../img/dysorthographie.svg'
import { ReactComponent as MalvoyanceSvg } from '../../img/malvoyance.svg'
import { ReactComponent as Pattern1Svg } from '../../img/pattern1.svg'
import { ReactComponent as Pattern2Svg } from '../../img/pattern2.svg'
import { ReactComponent as SchizophrenieSvg } from '../../img/schizophrenie.svg'
import { ReactComponent as SuggestionSvg } from '../../img/suggestion.svg'
import { ReactComponent as SurditeSvg } from '../../img/surdité.svg'
import { ReactComponent as TCASvg } from '../../img/TCA.svg'

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    return <>
        <div className="parent">
            <SicknessCard divClass='choisirExperience' name='Choisir une expérience' image={LogoSvg}/>
            <SicknessCard divClass='dyslexie' name='Dyslexie' image={DyslexieSvg}/>
            <SicknessCard divClass='pattern1' name='' image={Pattern1Svg}/>
            <SicknessCard divClass='schizophrenie' name='Schizophrenie' image={SchizophrenieSvg}/>
            <SicknessCard divClass='pattern2' name='' image={Pattern2Svg}/>
            <SicknessCard divClass='daltonisme' name='Daltonisme' image={DaltonismeSvg}/>
            <SicknessCard divClass='surdité' name='Surdité' image={SurditeSvg}/>
            <SicknessCard divClass='suggestion' name='Suggestion' image={SuggestionSvg}/>
            <SicknessCard divClass='tca' name='TCA' image={TCASvg}/>
            <SicknessCard divClass='dyscalculie' name='Dyscalculie' image={DyscalculieSvg}/>
            <SicknessCard divClass='malvoyance' name='Malvoyance' image={MalvoyanceSvg}/>
            <SicknessCard divClass='dysorthographie' name='Dysorthographie' image={DysorthographieSvg}/>
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
