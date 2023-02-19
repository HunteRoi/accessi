import { Card } from 'antd';

type Props = {
    description: string,
    summary: string[]
}

const Information: React.FC <Props>  = ({ description, summary }) => (
    <>
        <h2>Informations</h2>
        <p>{description}</p>
        <Card title='En résumé'>
            { summary.map((s, index) => (<p key={index}>{s}</p>)) }
        </Card>
    </>
);

export default Information;
