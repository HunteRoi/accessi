import { useState } from 'react';
import { Button, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import './style.css';
import SicknessCard from '../SicknessCard';
import Settings from '../Settings';
import {
    DaltonismeIcon,
    LogoIcon,
    DyscalculieIcon,
    DyslexieIcon,
    DysorthographieIcon,
    MalvoyanceIcon,
    Pattern1Icon,
    Pattern2Icon,
    SchizophrenieIcon,
    SuggestionIcon,
    SurditeIcon,
    TCAIcon
} from './customIcons';

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    return <>
        <div className='parent'>
            <SicknessCard className='choisirExperience'                  label='Choisir une expérience'  icon={<LogoIcon />} />
            <SicknessCard className='dyslexie'           isLink          label='Dyslexie'                icon={<DyslexieIcon />} />
            <SicknessCard className='pattern1'                                                           icon={<Pattern1Icon />} />
            <SicknessCard className='schizophrenie'      isLink          label='Schizophrénie'           icon={<SchizophrenieIcon />} />
            <SicknessCard className='pattern2'                                                           icon={<Pattern2Icon />} />
            <SicknessCard className='daltonisme'                         label='Daltonisme'              icon={<DaltonismeIcon />} />
            <SicknessCard className='surdite'                            label='Surdité'                 icon={<SurditeIcon />} />
            <SicknessCard className='suggestion'         isLink          label='Suggestion'              icon={<SuggestionIcon />} />
            <SicknessCard className='tca'                isLink          label='TCA'                     icon={<TCAIcon />} />
            <SicknessCard className='dyscalculie'                        label='Dyscalculie'             icon={<DyscalculieIcon />} />
            <SicknessCard className='malvoyance'                         label='Malvoyance'              icon={<MalvoyanceIcon />} />
            <SicknessCard className='dysorthographie'                    label='Dysorthographie'         icon={<DysorthographieIcon />} />
        </div> 
        

        <SettingOutlined onClick={showModal}/>

        <Modal
            title='Paramètres'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key='ok' type='primary' onClick={handleOk}>OK</Button>
            ]}
        >
            <Settings />
        </Modal>
    </>;
};

export default Home;
