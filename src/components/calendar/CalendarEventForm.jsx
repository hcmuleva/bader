import React, { useState } from "react";

import { Form, Input, Switch, DatePicker, TimePicker, Select } from "antd";

const { Option } = Select;

const formLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 20
  }
};

const CalendarEventForm = ({ form, eventType = false, groupData }) => {
  const [isChecked, setIsChecked] = useState(eventType === 'Public' ? true : false);

  return (
    <Form
      {...formLayout}
      form={form}
      name="event-form"
      hideRequiredMark
    >
      <Form.Item
        label="Title"
        name="calendar_event_name"
        rules={[
          { required: true, message: "Please input title" }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="calendar_event_date"
        rules={[
          { required: true, message: "Please input title" }
        ]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="From" name="calendar_event_valid_from">
        <TimePicker format="HH:mm" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="To" name="calendar_event_valid_to">
        <TimePicker format="HH:mm" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Description" name="calendar_event_description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Type" name="calendar_event_type" valuePropName="checked">
        <Switch
          checkedChildren="Public"
          unCheckedChildren="Personal"
          onChange={checked => {
            setIsChecked(checked);
            form.setFieldsValue({ calendar_event_type: checked })
          }}
        />
      </Form.Item>

      {isChecked &&
        <Form.Item
          wrapperCol={{ span: 24 }}
          name="assigned_info"
          label="Send to"
          rules={[
            () => ({
              validator(rule, value) {
                const currentSelected = value || [];
                if (currentSelected.length >= 1) {
                  return Promise.resolve();
                }
                return Promise.reject('Please select atleast one user group!');
              },
            })
          ]}
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
          >
            {groupData.map(item => (
              <Option key={item.user_group_id} value={item.user_group_id}>
                {item.user_group_name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      }

    </Form>
  );
};

export default CalendarEventForm;