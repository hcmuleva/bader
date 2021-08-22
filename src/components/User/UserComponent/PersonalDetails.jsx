



import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import ImageUploader from '../../common/ImageUploader';
import Avatar from '../../common/Avtar';

export function Personaldetails(props) {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [imgUrl,setImageUrl]=useState("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png")
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    return (
        <>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{
                    layout: formLayout,
                }}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="Form Layout" name="layout">
                    {imgUrl?<ImageUploader setImageUrl={setImageUrl}/>:<Avatar setImageUrl={setImageUrl}/>}
                   
                </Form.Item>
                <Form.Item label="Field A">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">Submit</Button>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" onClick={()=>{
                        props.setIsDisplay(true)
                    }}>Cancel</Button>
                </Form.Item>
            </Form>
        </>
    );
};