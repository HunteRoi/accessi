import { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';

import './style.css';
import { HeadsetIcon, OnIcon, OffIcon } from './customIcons';
import CleanSound from './soundclean_schizo.mp3';
import DiseaseSound from './sounds_schizo.mp3';

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

    useEffect(() => {
        return () => {
            cleanSound.current.pause();
            schizoSound.current.pause();
        };
    }, []);

    return <>
        <Button
            className='start-button'
            type='default'
            icon={<HeadsetIcon />}
            onClick={startExperience}
        >
            Start experience
        </Button>

        <Button
            className='switch-button'
            type='default'
            icon={ isSchizoPlaying ? <OffIcon /> : <OnIcon />}
            onClick={handleSchizoSoundButton}
        />

        <Button onClick={resetAudioTracks}>Réinitialiser piste audio</Button>
    </>
}

export default Schizophrenia;
