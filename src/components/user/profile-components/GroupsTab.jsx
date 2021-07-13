import React, { useState } from 'react';

import { Table, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { myProfileGroupColumn } from '../../../assets/data/row-table';
import GroupInfoModal from './GroupInfoModal';

const GroupsTab = ({ groups, isLoading }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupDetail, setGroupDetail] = useState(undefined);

  const handleOpenModal = (record) => {
    setGroupDetail(record);
    setIsModalVisible(true);
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setGroupDetail(undefined);
  }

  const columns = [
    ...myProfileGroupColumn,
    {
      title: 'ACTIONS',
      key: 'action',
      render: (text, record) => (
        <Button
          onClick={() => handleOpenModal(record)}
          type="primary"
        >
          View Details <ArrowRightOutlined />
        </Button>
      )
    }
  ]

  return (
    <React.Fragment>
      <Table rowKey="user_group_id" style={{ flex: 1 }} tableLayout="fixed" columns={columns} pagination={false} dataSource={groups} scroll={{ y: "calc(100vh - 260px)" }} />
      <GroupInfoModal groupDetail={groupDetail} visible={isModalVisible} handleOk={handleCloseModal} handleCancel={handleCloseModal} />
    </React.Fragment>
  )
}

export default GroupsTab;
