import { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';

import './style.css';
import { HeadsetIcon, OnIcon, OffIcon } from './customIcons';
import CleanSound from './soundclean_schizo.mp3';
import DiseaseSound from './sounds_schizo.mp3';

const Schizophrenia: React.FC = () => {
    const cleanSound = useRef(new Audio(CleanSound));
    const schizoSound = useRef(new Audio(DiseaseSound));

    const [isPlaying, setIsPlaying] = useState(false);
    const [isSchizoPlaying, setIsSchizoPlaying] = useState(false);

    const handleSchizoSoundButton = () => {
        if (isSchizoPlaying) {
            schizoSound.current.pause();
        } else{
            schizoSound.current.play();
        }
        setIsSchizoPlaying(isPlaying => !isPlaying);
    };

    const resetAudioTracks = () => {
        cleanSound.current.currentTime = 0;
        schizoSound.current.currentTime = 0;
    };

    const handleExperience = () => {
        if (isPlaying)
            cleanSound.current.pause();
        else
            cleanSound.current.play();

        setIsPlaying(isCurrentlyPlaying => !isCurrentlyPlaying);
    };

    useEffect(() => {
        return () => {
            cleanSound.current.pause();
            schizoSound.current.pause();
        };
    }, []);

    return <>
        <div className='buttons-list'>
            <Button type='primary' className='button-color option' icon={<HeadsetIcon/>} onClick={handleExperience}>{isPlaying ? 'Arrêter' : 'Démarrer'} l'expérience</Button>
            <Button type='ghost' icon={ isSchizoPlaying ? <OffIcon /> : <OnIcon />} className='option' onClick={handleSchizoSoundButton} />
            <Button type='primary' className='button-color option' onClick={resetAudioTracks} >Réinitialiser piste</Button>
        </div>
    </>
}

export default Schizophrenia;
