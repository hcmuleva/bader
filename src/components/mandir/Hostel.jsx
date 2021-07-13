import React from 'react';
import { Form, Input, Select,Button } from "antd";
import { Column, Row } from "simple-flexbox";

export default function Hostel(props) {
    const layout = {
        labelCol: {
            span: 12
        },
        wrapperCol: {
            span: 14
        }
    };
    const { Option } = Select;
    const onFinish = values => {
        console.log("Values ", values)
        
        props.setHosteldata(values)
        props.setLevel(3)
       
    }
    const optionSelection = (e) => {
        console.log("Selcted")
        console.log("Selected value ")
    }
    const optionData = [{ key: "yes", value: "हाँ" }, { key: "no", value: "नहीं" }]
    return (
        <>

            <Row alignItems="center" justifyContent="space-between">
                <Form
                    {...layout}
                    name="basic"
                    form={props.form}
                    onFinish={onFinish}
                    validateTrigger="onSubmit"
                >
                    <Row style={{ width: '100%' }}>
                        <Column flex="2">
                            <Form.Item
                                label="क्या धर्मशाला है?"
                                name="stay"
                                initialValues="नहीं"
                            >   
                                {/* <Select
                                    mode="tags"
                                    placeholder="यहाँ सेलेक्ट करे"
                                >
                                    <Option value="no">नहीं</Option>
                                    <Option value="yes">हाँ</Option>
                                </Select> */}
                                <Select defaultValue={optionData[1].value} style={{ width: 120 }} onChange={optionSelection}>
                                    {optionData.map(data => (
                                        <Option key={data.key}>{data.value}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Column>
                    </Row>
                    <Row style={{ width: '100%' }}>
                        <Column flex="2">
                            <Form.Item
                                label="क्या रुक सकते है?"
                                name="hostavailable"
                                initialValues="नहीं"
                            >
                                <Select defaultValue={optionData[1].value} style={{ width: 120 }} onChange={optionSelection}>
                                    {optionData.map(data => (
                                        <Option key={data.key}>{data.value}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Column>
                    </Row>

                    <Row style={{ width: '100%' }}>
                        <Column flex="2">

                            <Form.Item label="कितने सदस्यों की" name="totalmembers-stay" initialValues={0}>
                                <Input />
                            </Form.Item>
                        </Column>
                    </Row>

                    <Row style={{ width: '100%' }}>
                        <Column flex="2">
                            <Form.Item
                                label="भोजन की व्यवस्था है?"
                                name="food"
                                initialValues="नहीं"
                            >
                                <Select defaultValue={optionData[1].value} style={{ width: 120 }} onChange={optionSelection}>
                                    {optionData.map(data => (
                                        <Option key={data.key}>{data.value}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Column>
                    </Row>

                    <Row style={{ width: '100%' }}>
                        <Column flex="2">
                            <Form.Item label="कितने सदस्यों की" name="totalmembers-food" initialValues={0} >  
                                <Input />
                            </Form.Item>
                        </Column>
                    </Row>
                     <Row alignItems="center" justifyContent="space-between">             
                <Button type="primary" htmlType="submit">
                                        Next
        </Button></Row>
                </Form>
            </Row>

        </>
    )
}
