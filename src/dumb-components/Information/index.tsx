import { Card } from 'antd';

type Props = {
    description: string,
    summary: string[]
}
const Information: React.FC <Props>  = ({description, summary}) => {
    const summaryList = summary.map((s) => 
    (<p>{s}</p>))
    
    return <>
        <p>{description}</p>
        <Card title="En résumé">
            {summaryList}
        </Card>    
    </>;
};

export default Information;
