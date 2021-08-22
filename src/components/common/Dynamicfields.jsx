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
  const mycomponent =props.COMPONENT
  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
                {mycomponent}
            ))}
            <Divider />
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add {props.fieldType}
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

export default DynamicField;
