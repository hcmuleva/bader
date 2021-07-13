import React from 'react';
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  dropdown: {
    fontFamily: 'NunitoSans',
    color: '#000000'
  }
});

const defaultMenu = (
  <Menu>
    <Menu.Item>
      <span className="cursor-pointer">
        Test 1
      </span>
    </Menu.Item>
    <Menu.Item>
      <span className="cursor-pointer">
        Test 2
      </span>
    </Menu.Item>
  </Menu>
);

const SortbyComp = ({ menu, disabled = false }) => (
  <Dropdown overlay={menu || defaultMenu} className={css(styles.dropdown)} disabled={disabled}>
    <span className="cursor-pointer user-select ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      Sort By   <CaretDownOutlined style={{ color: '#e2d9d9' }} />
    </span>
  </Dropdown>
);

export default SortbyComp;
