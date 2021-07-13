import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Row } from 'simple-flexbox';

import { Switch } from 'antd';

const styles = StyleSheet.create({
  switchStyles: {
    backgroundColor: 'white !important',
    borderWidth: 2,
    borderColor: '#f0f0f0 !important',
    borderStyle: 'solid !important',
    fontFamily: "NunitoSans",
  },
  ActiveSwitch: {
    color: '#000000',
    fontWeight: "bolder",
    fontFamily: "NunitoSans",
    transition: 'all .36s',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  NonActive: {
    color: '#b1b1b1',
    fontWeight: "bolder",
    fontFamily: "NunitoSans",
    transition: 'all .36s',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
})

function CustomSwitch({ onSelectView, state, isSubjectView }) {

  return (
    <Row alignItems="center" justifyContent={isSubjectView ? 'flex-end' : 'flex-start'}>
      <span className={css(!state ? styles.ActiveSwitch : styles.NonActive)} onClick={state ? onSelectView : console.warn(state)}>Card View &nbsp;</span>
      <Switch className={css(styles.switchStyles) + ' customSwitch'} checked={state} onChange={onSelectView} />
      <span className={css(state ? styles.ActiveSwitch : styles.NonActive)} onClick={!state ? onSelectView : console.warn(state)}> &nbsp;List View</span>
    </Row>
  )
}

export default CustomSwitch

