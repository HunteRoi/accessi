import { Card } from 'antd';
import { InfoMetadata } from '../../typings';
import ChangeStepButton from '../ChangeStepButton';
import './style.css'

type Props = InfoMetadata & {
    goToNextStep: () => void
}

const Information: React.FC<Props>  = ({ title, description, bulletList, subParts, summaries, goToNextStep }) => (
    <div>
        <h2>Informations</h2>
        <ChangeStepButton
            changeStep={goToNextStep}
            label='Leurs témoignages'
        />
        <div className='information'>
            <div className='information-content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <BulletList items={bulletList} />
                {subParts && subParts.map((subpart, index) => (<SubPart key={index} info={subpart} />))}
            </div>
            {summaries && summaries.length > 0 && <Card title='En résumé' className='infoSummary'>
                { summaries.map((summary, index) => (<p key={index}>{summary}</p>)) }
            </Card>}
        </div>
    </div>
);

type SubPartsProps = {
    info: InfoMetadata
};
const SubPart: React.FC<SubPartsProps> = ({ info }) => {
    const { title, description, bulletList } = info;
    return <>
        <h4>→ {title}</h4>
        <p>{description}</p>
        <BulletList items={bulletList} />
    </>;
}

type BulletListProps = {
    items?: string[]
};
const BulletList: React.FC<BulletListProps> = ({ items}) => {
    return <>
        {items && <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>}
    </>;
};

export default Information;
