import React from 'react';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import deleteBin from '../../assets/components/delete-bin';

const { confirm } = Modal;

export const deleteModel = (id, callback) => {
  confirm({
    title: <span> Are you sure you want to delete? </span>,
    icon: <Icon style={{ fontSize: '64px' }} component={deleteBin} />,
    okText: 'YES',
    okType: 'danger',
    cancelText: 'NO',
    onOk() {
      callback(id);
    },
    onCancel() {
      console.log('Cancel');
    }
  });
};
