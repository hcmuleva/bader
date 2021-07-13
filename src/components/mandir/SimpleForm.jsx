import React, { useState } from 'react'
import { Form, Modal,Input, Button, Checkbox } from 'antd';
import { Row } from 'simple-flexbox';
import { css, StyleSheet } from 'aphrodite';
export function Simpleform(props) {
    const [form] = Form.useForm();
    const feedbackStyles = StyleSheet.create({
        customBlack: {
          backgroundColor: '#3a57e2',
          borderWidth: 1,
          borderRadius: 3,
          borderStyle: 'solid',
          borderColor: 'grey',
          color: 'white',
          padding: '5px 15px',
          marginLeft: 15
        },
        customSmallInput: {
          justifyContent: 'space-between'
        },
        feedbackText: {
          textAlign: 'center'
        },
        img: {
          textAlign: 'center'
        }
      });
      const [Visible, setVisible] = useState(false);
      
        const handleOk = (e) => {
          setVisible(false);
        };
      
        const handleCancel = (e) => {
          setVisible(false);
        };
      
      const { TextArea } = Input;
      
      const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };
      
      const tailLayout = {
        wrapperCol: { offset: 0, span: 24 },
      };
      const submitFeedback = () => {
          form.validateFields().then(values => {
              console.log("All Value", values)
           
          });
        };
          
    return(<div style={{ maxWidth: 500, padding: 24, backgroundColor: '#fff', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' }}>
      <Row alignItems={'center'} justifyContent={'space-between'} className="mb-4">
        <h1 style={{ borderBottom: '1px solid #e5e5e5', width: '100%' }}>Feedback</h1>
      </Row>
      <div className="bg-white p-5">
        <Form
          {...layout}
          name="basic"
          form={form}
        >
          <Form.Item
            label="Heading"
            name="feedback_name"
            rules={[{ required: true }]}
          >
            <Input className="w-100" placeholder="Type Here Feedback Heading..." />
          </Form.Item>
          <Form.Item
            label="Description"
            name="feedback_description"
            rules={[{ required: true}]}
          >
            <TextArea
              className="w-100"
              placeholder="Type Here Feedback Details..."
              rows={4}
            />
          </Form.Item>
          <Form.Item
            label="Mobile Number(Optional)"
            name="mobile_number"
          >
            <Input className="w-100" placeholder="Type Here Your mobile number..." />
          </Form.Item>
          <Form.Item
            label="Email(Optional)"
            name="user_email"
            rules={[  { type: 'email' }]}
          >
            <Input className="w-100" placeholder="Type Here Your email address..." />
          </Form.Item>
          <Form.Item {...tailLayout} style={{ textAlign: 'center' }}>
            <Button type="primary" onClick={()=>{
                console.log("Cancelled")
            }} ghost>
              Cancel
            </Button>
            <Button className="user-profile__primary-button ml-3" type="primary" onClick={submitFeedback}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        visible={Visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[<h1 key="footer-feedback-success-message" className={css(feedbackStyles.feedbackText)}></h1>]}
      >
        <div className={css(feedbackStyles.img)}>
          <img src={""} className="w-100" alt="feedback" />
        </div>
      </Modal>
    </div>
  );
  };
  