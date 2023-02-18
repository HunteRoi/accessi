import { Card } from 'antd';

type Props = {
    description: string,
    summary: string[]
}

const Information: React.FC <Props>  = ({ description, summary }) => (
    <>
        <p>{description}</p>
        <Card title='En résumé'>
            { summary.map((s, index) => (<p key={index}>{s}</p>)) }
        </Card>
    </>
);

export default Information;
