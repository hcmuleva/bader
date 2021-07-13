import React, { useState, useEffect } from 'react';

import { Calendar, Checkbox, Row as AntRow, Col, Button, Space, Modal, Form, Spin, Divider, Tag } from 'antd';
import { LeftOutlined, RightOutlined, EyeOutlined } from '@ant-design/icons';
import { Column, Row } from 'simple-flexbox';

import moment from 'moment';
import { StyleSheet, css } from 'aphrodite';

import CalendarEventForm from './../calendar/CalendarEventForm';
import ViewCalendarEvent from './../calendar/ViewCalendarEvent';

// import { useMutation, useQuery } from '@apollo/react-hooks';
// import { CREATE_CALENDAR_EVENT } from '../../graphql/calendar/mutation/createCalendarEvent';
// import { UPDATE_CALENDAR_EVENT } from '../../graphql/calendar/mutation/updateCalendarEvent';
// import { DELETE_CALENDAR_EVENT } from '../../graphql/calendar/mutation/deleteCalendarEvent';
// import { GET_ALL_CALENDAR_EVENT } from '../../graphql/calendar/query/getAllCalenderEvent';
// import { GET_ALL_GROUP } from '../../graphql/group/query/getAllGroups';

import { deleteModel } from './../shared/deleteModel';
import openNotificationWithIcon from './../shared/notification/index';
import messages from './../../assets/enums/messages';

// TODO: We should probably make it globally in some parent components like index.js
moment.updateLocale('en', { weekdaysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] });

const styles = StyleSheet.create({
  content: {
    // marginTop: 80
  },
  calendar: {
    backgroundColor: 'transparent'
  },
  calendarHeader: {
    backgroundColor: 'transparent',
    marginBottom: '1rem'
  },
  calendarHeaderValue: {
    fontWeight: '700'
  },
  calendarHeaderButton: {
    height: 40,
    border: '1px solid #ccc',
    borderRadius: 0
  },
  calendarHeaderButtonSelected: {
    backgroundColor: '#A7A7A7',
    borderColor: '#A7A7A7',
    color: '#FFFFFF'
  },
  calendarDateCellEventsList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  calendarDateCellEventsListItem: {
    marginBottom: 4
  },
  calendarDateCellEvent: {
    backgroundColor: '#ffffff',
    border: '1px solid #dcd9d9',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    fontSize: 12,
    cursor: 'pointer',
    width: '100%'
  },
  calendar_public_event: {
    backgroundColor: 'rgb(255, 110, 105)',
    color: '#fff',
    borderColor: 'rgb(255, 110, 105)',
  },
  calendar_personal_event: {
    backgroundColor: 'rgb(255, 203, 92)',
    color: '#000',
    borderColor: 'rgb(255, 203, 92)',
  },
  sidebar: {
    width: 300,
    flexShrink: 0,
    marginLeft: '1rem'
  },
  sidebarBlock: {
    marginTop: '1rem'
  },
  sidebarBlockTitle: {
    fontSize: '1rem',
    lineHeight: '22px',
    margin: 0
  },
  sidebarBlockFilterTitle: {
    fontSize: '0.8rem',
    lineHeight: '22px',
  },
  sidebarBlockList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }
});

const EVENT_FORM_INITIAL_VALUES = {
  calendar_event_name: '',
  calendar_event_date: '',
  calendar_event_valid_from: '',
  calendar_event_valid_to: '',
  calendar_event_description: '',
  calendar_event_type: false,
  assigned_info: [],
};

const initialFilters = { calendar_event_type: ['Public', 'Personal'] };

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [eventFormModalVisible, setEventFormModalVisible] = useState(false);
  const [eventViewModalVisible, setEventViewModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [changeOfState, setChangeOfState] = useState(false);
  const [editData, setEditData] = useState(undefined);
  const [groupData, setGroupData] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [dates, setDates] = useState({
    startDate: new Date(moment().startOf('month').format('YYYY-MM-DD hh:mm')),
    endDate: new Date(moment().endOf('month').format('YYYY-MM-DD hh:mm'))
  });

  const [eventForm] = Form.useForm();
  const [eventEditForm] = Form.useForm();

  // const [createCalendarEvent] = useMutation(CREATE_CALENDAR_EVENT);
  // const [updateCalendarEvent] = useMutation(UPDATE_CALENDAR_EVENT);
  // const [deleteCalendarEvent] = useMutation(DELETE_CALENDAR_EVENT);
  // const { refetch: refetchGroups } = useQuery(GET_ALL_GROUP);

  // useEffect(() => {
  //   refetchGroups().then(res => setGroupData(res.data.getAllUserGroup))
  // }, [setGroupData, refetchGroups]);

  //const { loading, refetch } = useQuery(GET_ALL_CALENDAR_EVENT, { skip: true });

  // useEffect(() => {
  //   refetch({
  //     start_date: dates.startDate,
  //     end_date: dates.endDate,
  //     calendar_event_type: filters.calendar_event_type
  //   }).then(res => setEvents(res.data.calendarEvents))
  // }, [dates, refetch, changeOfState, filters]);

  const loading=false
  const onFinish = (values) => {
    setEventFormModalVisible(false);
    setEditData(undefined);
  };

  const toggleEventFormModal = () => setEventFormModalVisible(!eventFormModalVisible);

  const handleEventFormModalCancel = () => {
    eventForm.setFieldsValue(EVENT_FORM_INITIAL_VALUES);
    eventEditForm.setFieldsValue(EVENT_FORM_INITIAL_VALUES);
    setEventFormModalVisible(false);
    setEditData(undefined);
  };

  const onPanelChange = (value, mode) => {
    console.log('onPanelChange: ', { value, mode });
    setDates({
      startDate: new Date(value.startOf('month').format('YYYY-MM-DD hh:mm')),
      endDate: new Date(value.endOf('month').format('YYYY-MM-DD hh:mm'))
    })

    return;
  };

  const onSelect = (value) => {
    if (moment(dates.startDate).isSame(value, 'month')) {
      eventForm.setFieldsValue({
        ...EVENT_FORM_INITIAL_VALUES,
        calendar_event_date: value
      });

      toggleEventFormModal();
    }
  };

  const handleChangeFilter = (values, type) => {
    setFilters(prevFilter => ({
      ...prevFilter,
      [type]: values
    }))
  }

  function dateCellRender(value) {
    const dateEvents = events.filter((event) => moment(event.calendar_event_date).isSame(value, 'day'));

    return (
      <ul className={css(styles.calendarDateCellEventsList)}>
        {dateEvents.map((event) => (
          <li key={event.calendar_event_name} className={css(styles.calendarDateCellEventsListItem)}>
            <button
              type="button"
              className={css(styles.calendarDateCellEvent, event.calendar_event_type === 'Public' ? styles.calendar_public_event : styles.calendar_personal_event)}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEvent(event);
                setEventViewModalVisible(true);
              }}
              title={event.calendar_event_name}
            >
              <EyeOutlined /> <span className="single-line-webkit" style={{ flex: 1, textAlign: 'center', paddingLeft: 3 }}>{event.calendar_event_name}</span>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  const handleDeleteEvent = id => {
    setEventViewModalVisible(false);
    // deleteModel(id, () =>
    //   deleteCalendarEvent({ variables: { calendar_event_id: id } }).then(res => {
    //     openNotificationWithIcon('success', messages.success.calendar.delete);
    //     setChangeOfState(toggle => !toggle);
    //   })
    // )
  }

  const fromStorage = localStorage.getItem('userProfile');
  const user = fromStorage ? JSON.parse(fromStorage) : undefined;

  console.log('user', user);

  return (
    <React.Fragment>
      <Row className={css(styles.content)}>
        <Column>
          <Spin spinning={loading}>
            <Calendar
              onSelect={onSelect}
              onPanelChange={onPanelChange}
              dateCellRender={dateCellRender}
              headerRender={({ value, type, onChange, onTypeChange }) => {
                const month = value.month();

                return (
                  <div className={css(styles.calendarHeader)}>
                    <Row justifyContent="space-between">
                      <Space>
                        <Button
                          className={css(styles.calendarHeaderButton)}
                          disabled={month - 1 < 0}
                          onClick={() => {
                            if (month - 1 < 0) {
                              return;
                            }

                            const previousMonth = value.clone();
                            previousMonth.month(month - 1);
                            console.log('previousMonth', previousMonth)
                            onChange(previousMonth);
                          }}
                        >
                          <LeftOutlined />
                        </Button>
                        <Button
                          className={css(styles.calendarHeaderButton)}
                          disabled={month + 1 === 12}
                          onClick={() => {
                            if (month + 1 === 12) {
                              return;
                            }

                            const nextMonth = value.clone();
                            nextMonth.month(month + 1);
                            onChange(nextMonth);
                          }}
                        >
                          <RightOutlined />
                        </Button>
                        <span className={css(styles.calendarHeaderValue)}>
                          {value.format('MMMM YYYY')}
                        </span>
                      </Space>

                      <div>
                        <Space>
                          <div>
                            {/* <Button
                              className={css(
                                styles.calendarHeaderButton,
                                type === 'week' && styles.calendarHeaderButtonSelected
                              )}
                              onClick={() => onTypeChange('week')}
                            >
                              Week
                            </Button> */}
                            <Button
                              className={css(
                                styles.calendarHeaderButton,
                                type === 'month' && styles.calendarHeaderButtonSelected
                              )}
                              onClick={() => onTypeChange('month')}
                            >
                              Month
                            </Button>
                            {/* <Button
                              className={css(
                                styles.calendarHeaderButton,
                                type === 'agenda' && styles.calendarHeaderButtonSelected
                              )}
                              onClick={() => onTypeChange('agenda')}
                            >
                              Agenda
                            </Button> */}
                          </div>

                          <Button
                            className={css(
                              styles.calendarHeaderButton,
                              styles.calendarAddNewButton
                            )}
                            onClick={() => toggleEventFormModal()}
                          >
                            + Add New
                          </Button>
                        </Space>
                      </div>
                    </Row>
                  </div>
                );
              }}
              className={css(styles.calendar)}
            />
          </Spin>
        </Column>

        <Column className={css(styles.sidebar)}>
          <Calendar fullscreen={false} />

          <div className={css(styles.sidebarBlock)}>
            <h4 className={css(styles.sidebarBlockTitle)}>Filters</h4>
            <Divider style={{ margin: '12px 0' }} />
            <h5 className={css(styles.sidebarBlockFilterTitle)}>Event Type</h5>
            <Checkbox.Group style={{ width: '100%' }} value={filters.calendar_event_type} onChange={(checked) => handleChangeFilter(checked, 'calendar_event_type')}>
              <AntRow>
                <Col span={24}>
                  <div className="d-flex align-items-center">
                    <Checkbox value="Public">Public</Checkbox>
                    <Tag className="p-2" color="#FF6E69"></Tag>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="d-flex align-items-center mt-2">
                    <Checkbox value="Personal">Personal</Checkbox>
                    <Tag className="p-2" color="#FFCB5C"></Tag>
                  </div>
                </Col>
              </AntRow>
            </Checkbox.Group>
          </div>

          {/* <div className={css(styles.sidebarBlock)}>
            <h4 className={css(styles.sidebarBlockTitle)}>Calendars</h4>

            <ul className={css(styles.sidebarBlockList)}>
              <li className={css(styles.sidebarBlockListItem)}>
                <Badge status="default" text="Maths" />
              </li>
              <li className={css(styles.sidebarBlockListItem)}>
                <Badge status="warning" text="Demo" />
              </li>
              <li className={css(styles.sidebarBlockListItem)}>
                <Badge status="processing" text="Event 2" />
              </li>
            </ul>
          </div>

          <div className={css(styles.sidebarBlock)}>
            <h4 className={css(styles.sidebarBlockTitle)}>Undated</h4>

            <ul className={css(styles.sidebarBlockList)}>
              <li className={css(styles.sidebarBlockListItem)}>Simple Quiz</li>
              <li className={css(styles.sidebarBlockListItem)}>Sample Assignment</li>
            </ul>
          </div>

          <div className={css(styles.sidebarBlock)}>
            <a href="#calendar-feed">Calendar Feed</a>
          </div> */}
        </Column>
      </Row>

      <Modal
        title="Create Event"
        visible={eventFormModalVisible}
        okText="Save"
        cancelText="Cancel"
        onOk={() => {
          eventForm.validateFields().then((values) => {
            // createCalendarEvent({
            //   variables: {
            //     calendar_event_name: values.calendar_event_name,
            //     calendar_event_description: values.calendar_event_description,
            //     calendar_event_date: new Date(values.calendar_event_date.format('YYYY-MM-DD')),
            //     calendar_event_type: values.calendar_event_type ? 'Public' : 'Personal',
            //     calendar_event_valid_from: values.calendar_event_valid_from === '' ? null : values.calendar_event_valid_from,
            //     calendar_event_valid_to: values.calendar_event_valid_to === '' ? null : values.calendar_event_valid_to,
            //     assigned_info: JSON.stringify({ "Add_User_Groups": values.assigned_info || [], "Remove_User_Groups": [], "user_ids": [] })
            //   }
            // }).then(res => {
            //   openNotificationWithIcon('success', messages.success.calendar.create);
            //   setChangeOfState(toggle => !toggle);
            //   eventForm.resetFields();
            //   onFinish(values);
            // })
          })
            .catch((info) => {
              console.error('validation failed: ', info);
            });
        }}
        onCancel={handleEventFormModalCancel}
      >
        <CalendarEventForm form={eventForm} groupData={groupData} eventType={false} />
      </Modal>

      <Modal
        title="Edit Event"
        visible={editData ? true : false}
        okText="Save"
        cancelText="Cancel"
        onOk={() => {
          eventEditForm.validateFields().then((values) => {
            const currentSelectedGroups = selectedEvent.Assigned_Calendar_Event.map(x => x.user_group_id);
            const newSelectedGroups = values.assigned_info ? [...values.assigned_info] : [];
            const newEditedGroups = values.calendar_event_type ? newSelectedGroups.filter(x => !currentSelectedGroups.includes(x)) : [];
            const newRemovedGroups = values.calendar_event_type ? currentSelectedGroups.filter(x => !newSelectedGroups.includes(x)) : [];

            // updateCalendarEvent({
            //   variables: {
            //     calendar_event_id: editData.calendar_event_id,
            //     calendar_event_name: values.calendar_event_name,
            //     calendar_event_description: values.calendar_event_description,
            //     calendar_event_date: new Date(values.calendar_event_date.format('YYYY-MM-DD')),
            //     calendar_event_type: values.calendar_event_type ? 'Public' : 'Personal',
            //     calendar_event_valid_from: values.calendar_event_valid_from === '' ? null : values.calendar_event_valid_from,
            //     calendar_event_valid_to: values.calendar_event_valid_to === '' ? null : values.calendar_event_valid_to,
            //     assigned_info: JSON.stringify({ "Add_User_Groups": newEditedGroups, "Remove_User_Groups": newRemovedGroups, "user_ids": [] })
            //   }
            // }).then(res => {
            //   openNotificationWithIcon('success', messages.success.calendar.update);
            //   setChangeOfState(toggle => !toggle);
            //   eventEditForm.resetFields();
            //   onFinish(values);
            // })
          })
            .catch((info) => {
              console.error('validation failed: ', info);
            });
        }}
        onCancel={handleEventFormModalCancel}
      >
        {editData && <CalendarEventForm form={eventEditForm} eventType={selectedEvent.calendar_event_type} groupData={groupData} />}
      </Modal>

      <Modal
        title="Event"
        visible={eventViewModalVisible}
        okText="Edit Event"
        cancelText="Close"
        onOk={() => {
          eventEditForm.setFieldsValue({
            ...selectedEvent,
            calendar_event_date: moment(selectedEvent.calendar_event_date),
            calendar_event_type: selectedEvent.calendar_event_type === 'Public',
            calendar_event_valid_from: selectedEvent.calendar_event_valid_from && selectedEvent.calendar_event_valid_from !== '' ? moment(selectedEvent.calendar_event_valid_from) : null,
            calendar_event_valid_to: selectedEvent.calendar_event_valid_to && selectedEvent.calendar_event_valid_to !== '' ? moment(selectedEvent.calendar_event_valid_to) : null,
            assigned_info: selectedEvent.Assigned_Calendar_Event.map(x => x.user_group_id)
          })
          setEditData(selectedEvent);
          setEventViewModalVisible(false);
        }}
        okButtonProps={{
          style: {
            display: user && selectedEvent && user.user_id === selectedEvent.calendar_event_created_by ? 'inline-block' : 'none'
          }
        }}
        onCancel={() => setEventViewModalVisible(false)}
      >
        <ViewCalendarEvent event={selectedEvent} isVisible={user && selectedEvent && user.user_id === selectedEvent.calendar_event_created_by} deleteEvent={() => handleDeleteEvent(selectedEvent.calendar_event_id)} />
      </Modal>
    </React.Fragment>
  );
};

export default CalendarPage;
