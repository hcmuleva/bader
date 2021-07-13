import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Import Component
import { Table, Spin } from 'antd';

const styles = StyleSheet.create({
	parent: {
		width: '100%',
		overflow: 'auto'
	}
});

const MandirTable = ({ column, data, loading, rowKey = 'id', scroll }) => {
  console.log("DATA in table ", data, " Columns ", column)
	return (
		<Spin spinning={loading}>
			<div className={css(styles.parent) + ' bg-white'}>
				<Table tableLayout="fixed" columns={column} pagination={false} dataSource={data} rowKey={rowKey} scroll={scroll} />
			</div>
		</Spin>
	);
};

export default MandirTable;
