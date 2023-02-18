import CleanSound from './soundclean_schizo.mp3';
import DiseaseSound from './sounds_schizo.mp3';
import { HeadsetIcon, OnIcon, OffIcon } from './customIcons';
import { Button } from 'antd';
import { PauseCircleOutlined, PlayCircleOutlined  } from '@ant-design/icons';
import { useRef, useState } from 'react';

import './style.css';

const Schizophrenia: React.FC = () => {
    const cleanSound = useRef(new Audio(CleanSound));
    const schizoSound = useRef(new Audio(DiseaseSound));

    const [isSchizoPlaying, setIsSchizoPlaying] = useState(false);

    const handleSchizoSoundButton = () => {
        if (isSchizoPlaying) {
            schizoSound.current.pause();
        } else{
            schizoSound.current.play();
        }
        setIsSchizoPlaying(isPlaying => !isPlaying);
    }

    const resetAudioTracks = () => {
        cleanSound.current.currentTime = 0;
        schizoSound.current.currentTime = 0;
    }

    const startExperience = () => {
        cleanSound.current.play();
    }

    return <div>
        <div>
            <Button
                className='start-button'
                type="default" 
                icon={<HeadsetIcon />}
                onClick={startExperience}
            >
                Start experience
            </Button>
        </div>

       <div>
        <Button 
                className='switch-button'
                type="default"
                icon={ isSchizoPlaying ? <OffIcon /> : <OnIcon />}
                onClick={handleSchizoSoundButton}
            />
       </div>

        <div>
            <Button
                onClick={resetAudioTracks}
            >
                Réinitialiser piste audio
            </Button>
        </div>
    </div>
}

export default Schizophrenia;
