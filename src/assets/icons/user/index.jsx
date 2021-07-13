import React from 'react';
import Icon from "@ant-design/icons";

const UserSvg = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="prefix__user"
			width="11.167"
			height="13.279"
			viewBox="0 0 11.167 13.279"
			{...props}
		>
			<path
				id="prefix__Path_8203"
				fill={props.fill || '#fff'}
				d="M13.707 6.937a4.012 4.012 0 1 0-5.473 0 6.818 6.818 0 0 0-2.848 5.753v.588h11.168v-.588a6.817 6.817 0 0 0-2.847-5.753zM8.135 4.012a2.836 2.836 0 1 1 2.836 2.836 2.839 2.839 0 0 1-2.836-2.836zM6.584 12.1a5.677 5.677 0 0 1 2.434-4.286l.092-.08a4.648 4.648 0 0 0 3.722 0l.092.08a5.677 5.677 0 0 1 2.434 4.286H6.584z"
				data-name="Path 8203"
				transform="translate(-5.387)"
			/>
		</svg>
	);
};

const UserIcon = props => <Icon component={UserSvg} {...props} />;

export default UserIcon;
