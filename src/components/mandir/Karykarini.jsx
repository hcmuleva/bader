import React, { useState } from 'react'
import { DatePicker, Form, Input, Select, Card, Button } from "antd";
import { Column, Row } from "simple-flexbox";
import { dataUploadS3File, uploadS3File } from '../shared/s3/upload';

export default function Karykarini(props) {
    const [memberPhoto, setMemberPhoto] = useState('');
    const [memberPhotoList, setMemberPhotoList] = useState([]);
    const [memberList,setMemberList]=useState([])

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 14
        }
    };
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const onFinish = values => {
        console.log("Values are ",values, " on ADD")
        values['url']=memberPhoto
        props.setKaryanidata(values)
        setMemberPhoto('')
        //props.setKaryanidata(values)   
        props.form.resetFields()
        

    }
    
    const postOptions = [
        { "key": "president", "value": "अध्यक्ष" },
        { "key": "vicepresident", "value": "उपाध्यक्ष" },
        { "key": "secretary", "value": "सचिव" },
        { "key": "vicesecretary", "value": "सहसचिव" },
        { "key": "treasurer", "value": "कोषाध्यक्ष" },
        { "key": "trusty", "value": "ट्रस्टी" },
        { "key": "other", "value": "अन्य" }

    ]
    return (
        <>
            <h1>KaryKarini</h1>
            <Row alignItems="center" justifyContent="space-between">
                <Form
                    {...layout}
                    name="basic"
                    form={props.form}
                    onFinish={onFinish}
                    validateTrigger="onSubmit"
                >
                    <Row style={{ width: '100%' }}>
                        <Column flex="1">
                            <Form.Item
                                label="सदस्य का नाम"
                                name="member"

                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="सदस्य का पद"
                                name="post"
                                initialValues="अध्यक्ष"
                            >
                                <Select defaultValue={postOptions[0].value} style={{ width: 120 }}>
                                    {postOptions.map(data => (
                                        <Option key={data.key}>{data.value}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Column>
                        <Column flex="1">
                            <Form.Item label="कब से पदभार है" name="from">
                                <DatePicker disabled={false} />
                            </Form.Item>
                            <Form.Item label="कब तक" name="to">
                                <DatePicker disabled={false} />
                            </Form.Item>

                        </Column>
                    </Row>

                    <Row style={{ width: '100%' }}>
                        <Column flex="1">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="" src={memberPhoto} />}
                            >
                                {memberPhoto ? "" : <Button >Upload photo</Button>}
                                {memberPhoto ? "" : <input
                                    type="file"
                                    name="profile-upload"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        console.log("Event ", e)
                                        if (e.target.files.length > 0) {
                                            const file = e.target.files[0]
                                            const fileName = file.name
                                            const res = await uploadS3File(file, fileName, "seervi")
                                            setMemberPhoto(res)
                                            //setMemberPhotoList.push(res)
                                        }

                                    }}
                                />}
                            </Card>,
                        </Column>
                    </Row>
                    <Row alignItems="center" justifyContent="space-between">
                        <Button type="success" htmlType="submit" >Add More</Button> 
                        <Button type="primary"  onClick={() => {
                            
                            console.log("\n*****From Karykarni*****\n")
                            console.log("Mandir Data ",props.mandirdata, " ::  Hostel Data", props.hosteldata, " karyanidata" ,props.karyanidata)
                            console.log("\n*****From Karykarni*****\n")
                            props.setLevel(4)
                            props.setVisible(false)
                            
                            }}>Submit </Button>
                    </Row>


                </Form>
               
            </Row>
        </>
    )
}
