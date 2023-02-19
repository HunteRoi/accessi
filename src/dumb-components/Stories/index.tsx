import { List } from 'antd';

import { Story } from '../../typings';
import './style.css'

type Props = {
    stories: Story[];
};

const Stories: React.FC<Props> = ({ stories }) => {
    return <>
        <h2>Témoignages</h2>
        <List
            itemLayout='vertical'
            size='large'
            dataSource={stories}
            renderItem={(item) => (
                <List.Item style={{ borderBlockEnd: 'none' }}>
                    <List.Item.Meta
                        title={item.name ?? 'Anonyme'}
                        description={item.content}
                        className='story'
                        style={{
                            backgroundColor: item.color,
                        }}
                    />
                </List.Item>
            )}
        />
    </>;
};

export default Stories;
