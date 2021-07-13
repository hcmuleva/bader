import React from 'react';
import Icon from "@ant-design/icons";

const ClassSvg = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="prefix__class"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			{...props}
		>
			<g id="prefix__Group_4194" data-name="Group 4194" transform="translate(3.516)">
				<g id="prefix__Group_4193" data-name="Group 4193">
					<path
						id="prefix__Path_8220"
						d="M77.813 0A2.85 2.85 0 0 0 75 2.859a2.813 2.813 0 0 0 5.625 0A2.851 2.851 0 0 0 77.813 0zm0 4.266a1.408 1.408 0 0 1-1.406-1.406 1.407 1.407 0 1 1 2.813 0 1.408 1.408 0 0 1-1.407 1.406z"
						style={{ fill: props.fill || '#fff' }}
						data-name="Path 8220"
						transform="translate(-75)"
					/>
				</g>
			</g>
			<g id="prefix__Group_4196" data-name="Group 4196">
				<g id="prefix__Group_4195" data-name="Group 4195">
					<path
						id="prefix__Path_8221"
						d="M21.891 0h-9.938a2.112 2.112 0 0 0-2.109 2.109v4.8l-.618-.619a2.1 2.1 0 0 0-1.491-.618H3.516A3.52 3.52 0 0 0 0 9.188v4.219A2.11 2.11 0 0 0 2.813 15.4v6.5a2.108 2.108 0 0 0 3.516 1.571A2.108 2.108 0 0 0 9.845 21.9v-9.317a2.117 2.117 0 0 0 1.647-.1l2.366-1.183h8.033A2.112 2.112 0 0 0 24 9.188V2.109A2.112 2.112 0 0 0 21.891 0zm-8.217 9.817l-2.812 1.406a.7.7 0 0 1-.812-.132l-.412-.412a.7.7 0 0 0-1.2.495v10.717a.7.7 0 0 1-1.406 0v-7.078a.7.7 0 0 0-1.406 0v7.078a.7.7 0 0 1-1.406 0V9.188a.7.7 0 0 0-1.406 0v4.219a.7.7 0 0 1-1.406 0V9.188a2.112 2.112 0 0 1 2.108-2.11h4.218a.7.7 0 0 1 .5.206l2.1 2.1a.7.7 0 0 0 .812.132l1.906-.953a.7.7 0 0 1 .629 1.258zm8.92-.629a.7.7 0 0 1-.7.7h-6.546l.013-.036a2.1 2.1 0 0 0 .093-.928L19.3 7a.7.7 0 1 0-.629-1.258l-3.846 1.927a2.108 2.108 0 0 0-2.409-.369l-1.166.583V2.109a.7.7 0 0 1 .7-.7h9.938a.7.7 0 0 1 .7.7z"
						style={{ fill: props.fill || '#fff' }}
						data-name="Path 8221"
					/>
				</g>
			</g>
		</svg>
	);
};

const ClassIcon = props => <Icon component={ClassSvg} {...props} />;

export default ClassIcon;
