import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export function WorkExperienceComponent(props) {
    console.log("props ",props)
    const [isModalVisible, setIsModalVisible] = useState(props.isDisplay);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>ExperienceDialogSome contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> 
        </>
    )
}
