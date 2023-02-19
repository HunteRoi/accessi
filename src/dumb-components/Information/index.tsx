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
            {summaries && summaries.length > 0 && <Card title='En résumé' className='infoSummary'>
                { summaries.map((summary, index) => (<p key={index}>{summary}</p>)) }
            </Card>}
        </div>
    </div>
);

export default Information;
