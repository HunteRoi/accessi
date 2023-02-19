import { MessageOutlined } from '@ant-design/icons';
import { Button, Modal, Input, Form, message } from 'antd';
import { useState, ChangeEventHandler } from 'react';
import './style.css';
const { TextArea } = Input;

const initialValue = { name: '', content: '' };

const FeedbackModal: React.FC = () => {
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
        <Button className='feedback-button' type='primary' shape='circle' icon={<MessageOutlined />} size='large' onClick={showModal}/>
        <Modal title='Ajouter un feedback' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form>
                <Input placeholder='Votre nom' value={feedback.name} onChange={handleNameChange} />
                <TextArea rows={4} placeholder='Votre feedback' value={feedback.content} onChange={handleContentChange} />
            </Form>
        </Modal>
    </>;
};

export default FeedbackModal;
