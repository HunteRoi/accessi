import { Card } from 'antd';
import './style.css'
type Props = {
    description: string,
    summaries: string[]
}

const Information: React.FC <Props>  = ({ description, summaries }) => (
    <div>
        <h2>Informations</h2>
        <div className='information'>
            <p>{description}</p>
            <Card title='En résumé' className='infoSummary'>
                <ul>
                    { summaries.map((summary, index) => (<li key={index}>{summary}</li>)) }
                </ul>
            </Card>
        </div>
    </div>
);

export default Information;
