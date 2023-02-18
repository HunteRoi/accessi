import { Avatar, List } from 'antd';
type Props = {
    stories: {
        name:string
        content:string,
        type:string
    }[];
};
const Stories: React.FC<Props> = ({stories}) => {
    return <>
        <h1>Témoignage</h1>
        <List
            itemLayout="horizontal"
            dataSource={stories}
            renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.name}
                description={item.content}
                />
            </List.Item>
            )}
        />
    </>;
};

export default Stories;
