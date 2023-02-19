import { Card } from 'antd';
import ChangeStepButton from '../ChangeStepButton';
import './style.css'
type Props = {
    description: string,
    summaries: string[]
    goToNextStep: () => void
}

const Information: React.FC <Props>  = ({ description, summaries, goToNextStep }) => (
    <div>
        <h2>Informations</h2>
        <ChangeStepButton 
            changeStep={goToNextStep}
            label='Leurs témoignages'
        />
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
