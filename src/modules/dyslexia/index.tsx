import { useEffect } from 'react';
import useDyslexia from './useDyslexia';

type Props = {
    content: string
};

const Dyslexia: React.FC<Props> = ({ content }) => {
    useEffect(() => {
        const pid = useDyslexia('p, h1, h2, h3, h4, h5, h6, blockquote, cite, q');
        return () => clearInterval(pid);
    }, []);

    return <>
        <h1>Title</h1>
        <p>{content}</p>
    </>;
};

export default Dyslexia;
