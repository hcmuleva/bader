import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Select, Input } from "antd";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

function DynamicField(props) {
  const children = []
  const dateFormat = 'YYYY';
  function handleChange(value) {
    
  }

  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>Education Detail- {index + 1}</Divider>
                <Form.Item
                  label="Type"
                  name={[index, "type"]}
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Select.Option value="highersecondary">HigherSecondary</Select.Option>
                    <Select.Option value="diploma">Diploma</Select.Option>
                    <Select.Option value="ug">UnderGraduate</Select.Option>
                    <Select.Option value="pg">PostGraduate</Select.Option>
                    <Select.Option value="phd">pHD</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="MajorSubject"
                  name={[index, "major_subject"]}
                  
                >
                  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Passing Year"
                  name={[index, "passing_year"]}
                >
                  <DatePicker picker="year" />
                </Form.Item>
                <Form.Item
                  label="Achievements"
                  name={[index, "achievements"]}
        
                >
                  <TextArea rows={2} />
                </Form.Item>
                <Form.Item
                  label="School/Univercity Name"
                  name={[index, "institute_name"]}

                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="School/Univercity Pincode"
                  name={[index, "institute_pincode"]}

                >
                  <Input />
                </Form.Item>
                {fields.length > 1 ? (
                  <Button
                    type="danger"
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    icon={<MinusCircleOutlined />}
                  >
                    Remove Above Field
                  </Button>
                ) : null}
              </div>
            ))}
            <Divider />
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add field
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

export default DynamicField;
