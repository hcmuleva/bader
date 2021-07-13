import React, { useEffect, useState, useRef } from 'react';

import { Menu } from 'antd';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

// import Logo from '../../../../assets/components/icon-logo';

import { useHistory } from 'react-router-dom';
import getMenus, { commonMenus } from './../../../../assets/menus';

//mport { GET_MY_SCHOOL_SETTING } from '../../../../graphql/school/query/getMySchoolSetting';
//import { useQuery } from '@apollo/react-hooks';

const styles = StyleSheet.create({
	burgerIcon: {
		cursor: 'pointer',
		position: 'absolute',
		left: 24,
		top: 22
	},
	container: {
		width: 225,
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	logoContainer: {
		paddingLeft: 32,
		paddingRight: 32,
		marginTop: 13,
		display: 'flex',
		justifyContent: 'center'
	},
	containerMobile: {
		transition: 'left 0.5s, right 0.5s',
		position: 'absolute',
		width: 225,
		height: '100vh',
		zIndex: 901,
		backgroundColor: 'rgb(17, 25, 69)'
	},
	mainContainer: {
		// height: '100%',
		height: '100vh',
		backgroundColor: '#111945',
		position: 'sticky',
		top: 0,
	},
	mainContainerMobile: {
		position: 'absolute',
		top: 0,
		left: 0
	},
	mainContainerExpanded: {
		width: '100%',
		minWidth: '100vh'
	},
	menuItemList: {
		marginTop: 52,
		overflowY: 'auto',
		flex: 1,
	},
	outsideLayer: {
		position: 'absolute',
		width: '100vw',
		minWidth: '100%',
		height: '100%',
		backgroundColor: '#F7F8FC',
		zIndex: 900
	},
	separator: {
		borderTop: '1px solid #DFE0EB',
		marginTop: 16,
		marginBottom: 16,
		opacity: 0.06
	},
	hide: {
		left: -225
	},
	show: {
		left: 0
	},
	lowerPart: {
		paddingBottom: 40,
	}
});

const currentActive = (pathname) => {
	let path = 'manage-family';
	if (pathname === '/manage-users') {
		path = 'manage-users';
	} else if (pathname === '/teacher') {
		path = 'teacher';
	} else if (pathname === '/student') {
		path = 'student';
	} else if (pathname === '/schools') {
		path = 'schools';
	} else if (pathname === '/notice-board') {
		path = 'notice-board';
	} else if (pathname === '/calendar') {
		path = 'calendar';
	} else if (pathname === '/feedback') {
		path = 'feedback';
	} else if (pathname === '/help-section') {
		path = 'help-section';
	} else if (pathname === '/messages') {
		path = 'messages';
	}

	return path;
}

const VerticalNavbar = ({ selectedRole }) => {
	
	console.log("Selected ROle ", selectedRole)
	const history = useHistory();

	const [item, setItem] = useState(currentActive(history.location.pathname));

	//const { loading: schoolLoading, data: school } = useQuery(GET_MY_SCHOOL_SETTING);

	const input1 = useRef(null);

	useEffect(() => {
		setItem(currentActive(history.location.pathname))
	}, [history.location.pathname])

	const onSelectMenu = (param) => {
		setItem(param.key);
		history.push(`/${param.key}`);
	}

	let menus = [...getMenus(selectedRole), ...commonMenus];
	console.log("menus  ", menus)
	menus = menus.sort((a, b) => (a.order - b.order))

	//const schoolLogo = !schoolLoading && school.getSchoolSetting.sub_group_logo !== '' ? school.getSchoolSetting.sub_group_logo : undefined;

	return (
		<div style={{ position: 'relative', backgroundColor: 'rgb(17, 25, 69)' }}>
			<Row
				componentRef={(element) => (input1.current = element)}
				className={css(styles.mainContainer)}
				breakpoints={{
					768: css(styles.mainContainerMobile)
				}}
			>
				<Column
					className={css(styles.container)}
					breakpoints={{
						768: css(styles.containerMobile, styles.hide)
					}}
				>
					{/* <div className={css(styles.logoContainer)}>
						<span className="cursor-pointer" onClick={() => {
							history.push("/schools");
							setItem('schools')
						}}>
							{schoolLogo ?
								<img className="school-logo-vertical" src={schoolLogo} width="138" alt="" />
								:
								<div className="school-logo-vertical" />
							}
						</span>
					</div> */}
					{ <div className={css(styles.menuItemList)}>
						<Menu
							selectedKeys={[item]}
							mode="inline"
							className="header-menu verticle"
							onClick={onSelectMenu}
						>
							{menus.map(menu => {
								console.log("MENU in vertical ", menu)
								return (
									<Menu.Item id={`${menu.key}-menu`} key={menu.key} link={menu.link} icon={<menu.icon fill="#fff" />}>
										{menu.name}
									</Menu.Item>
								)
							})}
						</Menu>
					</div> }
					<div className={css(styles.lowerPart)}>
						<Menu
							selectedKeys={[item]}
							mode="inline"
							className="header-menu verticle"
							onClick={onSelectMenu}
						>
							{/* <Menu.Item key="messages" icon={<span role="img" className="anticon"><IconOverview fill="#fff" /></span>}>
								Messages
							</Menu.Item>
							<Menu.Item key="help-section" icon={<span role="img" className="anticon"><IconTickets fill="#fff" /></span>}>
								Help Section
							</Menu.Item> */}
						</Menu>
					</div> 
				</Column>
			</Row>
		</div>
	);
}

export default VerticalNavbar;
