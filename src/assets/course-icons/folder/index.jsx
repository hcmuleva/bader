import React from 'react';
import Icon from '@ant-design/icons';

const FolderSvg = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="37.696" height="28.508" viewBox="0 0 37.696 28.508" {...props}>
			<g id="folder" transform="translate(0 -54.392)">
				<path
					id="Path_8290"
					data-name="Path 8290"
					d="M35.685,82.9H2.01A2,2,0,0,1,0,80.919V56.373a2,2,0,0,1,2.01-1.981h9.506a2.016,2.016,0,0,1,1.752,1.01l1.109,1.942a2.016,2.016,0,0,0,1.752,1.01H35.685a2,2,0,0,1,2.01,1.981V80.919A2,2,0,0,1,35.685,82.9Z"
					transform="translate(0 0)"
					fill="#2f6fce"
					className="icon-primary-color"
				/>
				<path
					id="Path_8291"
					data-name="Path 8291"
					d="M2.01,129.1H35.685a2,2,0,0,0,2.01-2V106.342a2,2,0,0,0-2.01-2H21.153a2.013,2.013,0,0,0-1.752,1.018l-1.109,1.959a2.013,2.013,0,0,1-1.752,1.018H2.01a2,2,0,0,0-2.01,2v16.768A2,2,0,0,0,2.01,129.1Z"
					transform="translate(0 -46.203)"
					fill="#5f95e5"
					className="icon-secondary-color"
				/>
				<path
					id="Path_8292"
					data-name="Path 8292"
					d="M38.586,106.59a1.974,1.974,0,0,1,.181.82v20.773a2,2,0,0,1-2.011,2H3.071a2.007,2.007,0,0,1-.825-.18,2.009,2.009,0,0,0,1.83,1.179H37.762a2,2,0,0,0,2.011-2V108.409A2,2,0,0,0,38.586,106.59Z"
					transform="translate(-2.077 -48.281)"
					fill="#2f6fce"
					className="icon-primary-color"
				/>
			</g>
		</svg>
	);
};

const FolderIcon = (props) => <Icon component={FolderSvg} {...props} />;

export default FolderIcon;
