import React from 'react';
import Contact from '../Contact';
import Settings from '../Settings';
import Sickness from '../Sickness';

export default function Home() {
    return <div>
        <p>Home works</p>

        <Sickness />
        <Settings />
        <Contact />
    </div>;
}
