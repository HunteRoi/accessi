import { Avatar, List } from 'antd';
import { Story } from '../../typings';

type Props = {
    stories: Story[];
};
const Stories: React.FC<Props> = ({stories}) => {
    return <>
        <h1>Témoignage</h1>
        <List
            itemLayout='horizontal'
            dataSource={stories}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                        title={item.name}
                        description={item.content}
                    />
                </List.Item>
            )}
        />
    </>;
};

export default Stories;
