import React from "react";

import { Typography, Tooltip, Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { Column, Row } from "simple-flexbox";

import moment from 'moment';

const { Text } = Typography;

const ViewCalendarEvent = ({ event, deleteEvent, isVisible }) => {
  if (!event) {
    return null;
  }

  return (
    <div>
      {isVisible &&
        <div className="d-flex justify-content-end mb-2">
          <Tooltip title="Delete">
            <Button danger className="d-flex justify-content-center align-items-center" icon={<DeleteOutlined />} onClick={deleteEvent}>Delete</Button>
          </Tooltip>
        </div>
      }
      <Row>
        <Column flex="1">
          <Text strong>Title</Text>
        </Column>

        <Column flex="3">
          <Text>{event.calendar_event_name}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>Created by</Text>
        </Column>

        <Column flex="3">
          <Text>{event.user_first_name} {event.user_last_name}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>Date</Text>
        </Column>

        <Column flex="3">
          <Text>{event.calendar_event_date && event.calendar_event_date !== '' && moment(event.calendar_event_date).format("DD/MM/YYYY")}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>From</Text>
        </Column>

        <Column flex="3">
          <Text>{event.calendar_event_valid_from && event.calendar_event_valid_from !== '' && moment(event.calendar_event_valid_from).format("HH:mm")}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>To</Text>
        </Column>

        <Column flex="3">
          <Text>{event.calendar_event_valid_to && event.calendar_event_valid_to !== '' && moment(event.calendar_event_valid_to).format("HH:mm")}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>Type</Text>
        </Column>

        <Column flex="3">
          <Text>{event.calendar_event_type === 'Public' ? 'Public' : 'Personal'}</Text>
        </Column>
      </Row>

      <Row>
        <Column flex="1">
          <Text strong>Description</Text>
        </Column>
        <Column flex="3">
          <Text>{event.calendar_event_description}</Text>
        </Column>
      </Row>

      {event.calendar_event_type === 'Public' &&
        <Row>
          <Column flex="1">
            <Text strong>Sent to</Text>
          </Column>
          <Column flex="3">
            <Text>{[...event.Assigned_Calendar_Event.map(x => x.User_Group.user_group_name)].join(', ')}</Text>
          </Column>
        </Row>
      }
    </div>
  );
};

export default ViewCalendarEvent;