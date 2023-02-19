import { useState, ChangeEventHandler } from 'react';
import { Button, Modal, Input, Form, message, Space } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
const { TextArea } = Input;

import './style.css';
import SicknessCard from '../SicknessCard';
import { SuggestionIcon } from '../Home/customIcons';

const initialValue = { name: '', content: '' };

type Props = {
  name: string,
  withFloatingButton?: boolean
};

const FeedbackModal: React.FC<Props> = ({ name, withFloatingButton }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [feedback, setFeedback] = useState(initialValue);

    const reset = () => setFeedback(initialValue);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => {
      setIsModalOpen(false);
      reset();
      messageApi.open({
        type: 'success',
        content: 'En attente d\'approbation',
      });
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      reset();
    };

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setFeedback(previous => ({...previous, name: event.target.value }));
    }

    const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setFeedback(previous => ({...previous, content: event.target.value }));
    }

    return <>
        {contextHolder}
        {withFloatingButton
          ? <Button className='feedback-button' type='primary' shape='circle' icon={<MessageOutlined />} size='large' onClick={showModal}/>
          : <SicknessCard className='suggestion'                         label='Suggestion'              icon={<SuggestionIcon />} onClick={showModal} />
        }
        <Modal
          title={`Ajouter un${name === 'suggestion' ? 'e': ''} ${name}`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width='100rem'
          style={{ height: '10rem', fontSize: '2rem' }}
        >
          <Form>
            <Space size='large' style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}>
              <Input placeholder='Votre nom' value={feedback.name} onChange={handleNameChange} />
              <TextArea rows={4} placeholder={`Votre ${name}`} value={feedback.content} onChange={handleContentChange} />
            </Space>
          </Form>
        </Modal>
    </>;
};

export default FeedbackModal;
