import CleanSound from './soundclean_schizo.mp3';
import DiseaseSound from './sounds_schizo.mp3';

import { FloatButton } from 'antd';
import { SoundOutlined  } from '@ant-design/icons';
import { useState } from 'react';

const Schizophrenia: React.FC = () => {
    const cleanSound = new Audio(CleanSound);
    const schizoSound = new Audio(DiseaseSound);
    const [isPlaying, setPlaying] = useState(false);

    const playSound = (sound: HTMLAudioElement) => {
        console.log('Playing sound');
        sound.play();
        setPlaying(true);
    }

    const pauseSound = (sound: HTMLAudioElement) => {
        console.log('Paused sound');
        sound.pause();
        setPlaying(false);
        // sound.
    }

    return <div>
        <button onClick={()=>playSound(schizoSound)}>Play 2</button>
        <button onClick={()=>pauseSound(schizoSound)}>Stop 2</button>

        <FloatButton
            shape="circle"
            type={ isPlaying ? 'primary' : 'default' }
            style={{ right: 24 }}
            icon={<SoundOutlined />}
        />
    </div>
}

export default Schizophrenia;
