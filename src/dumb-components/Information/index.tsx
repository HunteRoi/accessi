import { Card } from 'antd';
import './style.css'
type Props = {
    description: string,
    summary: string[]
}

const Information: React.FC <Props>  = ({ description, summary }) => (
    <div>
        <h2>Informations</h2>
        <div className='information'>
            <p>{description}</p>
            <Card title='En résumé' className='infoSummary'>
                { summary.map((s, index) => (<p key={index}>{s}</p>)) }
            </Card>
        </div>
    </div>
);

export default Information;
