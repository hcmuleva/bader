import React, { useEffect } from 'react'

import { Modal, Form, Input } from 'antd';
import { Column, Row } from 'simple-flexbox';

import { css } from 'aphrodite';
import { commonStyles } from './../../../styles/common';
import { groupStyles } from './../group/style';
//import AvatarUpload from '../bulk-create/AvatarUpload';

const { TextArea } = Input;

const GroupInfoModal = ({ groupDetail, handleOk, handleCancel, visible }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && groupDetail) {
      form.setFieldsValue(groupDetail);
    }
  }, [visible, groupDetail, form])

  const isDisable = true;

  return (
    <Modal
      destroyOnClose
      width={994}
      title={<div className={css(commonStyles.title)}>User Group</div>}
      visible={visible}
      onOk={handleCancel}
      onCancel={handleCancel}
      okButtonProps={{
        style: {
          display: 'none'
        }
      }}
      cancelText="Ok"
      zIndex={1010}
    >
      {/* {groupDetail &&
        <Row>
          <Column>
            <div className="group-avatar">
              {groupDetail.user_group_logo &&
                <AvatarUpload existingImage={groupDetail.user_group_logo} disabled={isDisable} />
              }
            </div>
          </Column>
          <Column className={css(groupStyles.grpFormMain)} >
            <Form
              layout="vertical"
              name="group_form"
              form={form}
              className="group_form"
            >
              <Form.Item
                wrapperCol={{ span: 24 }}
                name="user_group_name"
                label="Group Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input Group Name!'
                  }
                ]}
              >
                <Input disabled={isDisable} />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 24 }}
                name="user_group_description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'Please input Description!'
                  }
                ]}
              >
                <TextArea disabled={isDisable} autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
            </Form>
          </Column>
        </Row>
      } */}
    </Modal>
  )
}

export default GroupInfoModal;
