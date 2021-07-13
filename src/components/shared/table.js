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

const CustomTable = ({ column, data, loading, rowKey = 'id', scroll }) => {
	return (
		<Spin spinning={loading}>
			<div className={css(styles.parent) + ' bg-white'}>
				<Table tableLayout="fixed" columns={column} pagination={false} dataSource={data} rowKey={rowKey} scroll={scroll} />
			</div>
		</Spin>
	);
};

export default CustomTable;
