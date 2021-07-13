import React, { useState } from 'react';

// import { Input, Tabs, Button, Menu } from 'antd';
// import { PlusOutlined, FilterOutlined, SearchOutlined, AppstoreOutlined, MenuOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
// import { Column, Row } from 'simple-flexbox';

// import Sortby from '../atoms/SortbyComp';

// import Group from './group';
// import Student from './student';
// import Teacher from './teacher';
// import Parent from './parent';
// import Admin from './admin';

// import { css } from 'aphrodite';
// import { userStyles } from './style';

// import { userLinks, STUDENT, TEACHER, PARENT, ADMIN } from '../../assets/enums/common';

// import BulkUpload from './bulk-create/bulkUpload';
// import InviteMail from './bulk-create/inviteMail';
// import StudentFormCreate from './bulk-create/studentForm';
// import TeacherFormCreate from './bulk-create/teacherForm';
// import ParentFormCreate from './bulk-create/parentForm';
// import AdminFormCreate from './bulk-create/adminForm';

// import CreateStudent from './student/create';
// import StudentFilter from './student/filter';

// import CreateTeacher from './teacher/create';
// import TeacherFilter from './teacher/filter';

// import CreateParent from './parent/create';
// import ParentFilter from './parent/filter';

// import CreateAdmin from './admin/create';
// import AdminFilter from './admin/filter';

// import CreateGroup from './group/new';
// import GroupFilter from './group/card/filter';

// // import { useHistory } from 'react-router-dom';

// const { TabPane } = Tabs;

// const initialStudentsFilter = { grade: [], section: [], status: undefined };
// const initialTeachersFilter = { status: undefined };
// const initialGroupsFilter = { color: [] };

// const Users = () => {
// 	const [changeView, setChangeView] = useState(false);
// 	const [activeTab, setActiveTab] = useState(userLinks[0]);
// 	const [currentActiveModal, setCurrentActiveModal] = useState('');
// 	const [currentActiveFilter, setCurrentActiveFilter] = useState('');

// 	const [studentSearchText, setStudentSearchText] = useState('');
// 	const [studentsFilter, setStudentsFilter] = useState(initialStudentsFilter);
// 	const [updateStudentList, setUpdateStudentList] = useState(true);

// 	const [teacherSearchText, setTeacherSearchText] = useState('');
// 	const [teachersFilter, setTeachersFilter] = useState(initialTeachersFilter);
// 	const [updateTeacherList, setUpdateTeacherList] = useState(true);

// 	const [parentSearchText, setParentSearchText] = useState('');
// 	const [parentsFilter, setParentsFilter] = useState(initialTeachersFilter);
// 	const [updateParentList, setUpdateParentList] = useState(true);

// 	const [adminSearchText, setAdminSearchText] = useState('');
// 	const [adminsFilter, setAdminsFilter] = useState(initialTeachersFilter);
// 	const [updateAdminList, setUpdateAdminList] = useState(true);

// 	const [groupSearchText, setGroupSearchText] = useState('');
// 	const [groupsFilter, setGroupsFilter] = useState(initialGroupsFilter);

// 	const [groupSortBy, setGroupSortBy] = useState(undefined);
// 	const [groupSortOrder, setGroupSortOrder] = useState(undefined);

// 	const [createUserType, setCreateUserType] = useState('');
// 	const [createType, setCreateType] = useState('');

// 	// const history = useHistory();

// 	const handleChangeGroupSortBy = name => {
// 		setGroupSortBy(name);
// 		if (name === 'user_group_created_at') {
// 			setGroupSortOrder(groupSortOrder => !groupSortOrder ? 'desc' : groupSortOrder === 'asc' ? 'desc' : 'asc');
// 		} else {
// 			setGroupSortOrder(groupSortOrder => !groupSortOrder ? 'asc' : groupSortOrder === 'asc' ? 'desc' : 'asc');
// 		}
// 	}

// 	const handleChangeView = () => {
// 		setChangeView(toggle => !toggle);
// 	};

// 	const handleChangeGroupFilter = (values, type) => {
// 		setGroupsFilter(filters => ({
// 			...filters,
// 			[type]: values
// 		}))
// 	}

// 	const handleChangeStudentFilter = (values, type) => {
// 		setStudentsFilter(filters => ({
// 			...filters,
// 			[type]: values
// 		}))
// 	}

// 	const handleChangeTeacherFilter = (values, type) => {
// 		setTeachersFilter(filters => ({
// 			...filters,
// 			[type]: values
// 		}))
// 	}

// 	const handleChangeParentFilter = (values, type) => {
// 		setParentsFilter(filters => ({
// 			...filters,
// 			[type]: values
// 		}))
// 	}

// 	const handleChangeAdminFilter = (values, type) => {
// 		setAdminsFilter(filters => ({
// 			...filters,
// 			[type]: values
// 		}))
// 	}

// 	const groupSortMenu = (
// 		<Menu>
// 			{/* <Menu.Item>
// 				<span className="cursor-pointer w-100 h-100" onClick={() => handleChangeGroupSortBy('user_group_name')}>
// 					Name {groupSortBy === 'user_group_name' ? groupSortOrder === 'asc' ? <SortAscendingOutlined /> : groupSortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
// 				</span>
// 			</Menu.Item>
// 			<Menu.Item>
// 				<span className="cursor-pointer w-100 h-100" onClick={() => handleChangeGroupSortBy('user_group_created_at')}>
// 					Created Date {groupSortBy === 'user_group_created_at' ? groupSortOrder === 'asc' ? <SortAscendingOutlined /> : groupSortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
// 				</span>
// 			</Menu.Item>
// 			<Menu.Item>
// 				<span className="cursor-pointer w-100 h-100" onClick={() => handleChangeGroupSortBy('users_count')}>
// 					Total Members {groupSortBy === 'users_count' ? groupSortOrder === 'asc' ? <SortAscendingOutlined /> : groupSortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
// 				</span>
// 			</Menu.Item>
// 			<Menu.Item>
// 				<span className="cursor-pointer w-100 h-100" onClick={() => handleChangeGroupSortBy('user_group_color')}>
// 					Color {groupSortBy === 'user_group_color' ? groupSortOrder === 'asc' ? <SortAscendingOutlined /> : groupSortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
// 				</span>
// 			</Menu.Item> */}
// 		</Menu>
// 	);

// 	const extraContent = (
// 		<Row alignItems="center" justifyContent="space-between">
// 			{!changeView && activeTab.name === 'Groups' &&
// 				<Column alignItems="center" className=" border-right">
// 					<Sortby menu={groupSortMenu} />
// 				</Column>
// 			}
// 			<Column alignItems="center" className={`${css(userStyles.filterBySpacing)} ${activeTab.id === '4' ? 'border-right' : ''}`}>
// 				{/* {activeTab.name === 'Student' ?
// 					<Button type="primary" icon={<FilterOutlined />} onClick={() => currentActiveFilter === 'student' ? setCurrentActiveFilter('') : setCurrentActiveFilter('student')} ghost={currentActiveFilter !== 'student'}>
// 						Filters
// 					</Button>
// 					:
// 					activeTab.name === 'Teachers' ?
// 						<Button type="primary" icon={<FilterOutlined />} onClick={() => currentActiveFilter === 'teacher' ? setCurrentActiveFilter('') : setCurrentActiveFilter('teacher')} ghost={currentActiveFilter !== 'teacher'}>
// 							Filters
// 						</Button>
// 						:
// 						activeTab.name === 'Parents' ?
// 							<Button type="primary" icon={<FilterOutlined />} onClick={() => currentActiveFilter === 'parent' ? setCurrentActiveFilter('') : setCurrentActiveFilter('parent')} ghost={currentActiveFilter !== 'parent'}>
// 								Filters
// 							</Button>
// 							:
// 							activeTab.name === 'Admin' ?
// 								<Button type="primary" icon={<FilterOutlined />} onClick={() => currentActiveFilter === 'admin' ? setCurrentActiveFilter('') : setCurrentActiveFilter('admin')} ghost={currentActiveFilter !== 'admin'}>
// 									Filters
// 								</Button>
// 								:
// 								activeTab.name === 'Groups' &&
// 								<Button type="primary" icon={<FilterOutlined />} onClick={() => currentActiveFilter === 'groups' ? setCurrentActiveFilter('') : setCurrentActiveFilter('groups')} ghost={currentActiveFilter !== 'groups'}>
// 									Filters
// 								</Button>
// 				} */}
// 			</Column>
// 			{/* {activeTab.id === '4' && (
// 				<Column alignItems="center" className={css(userStyles.filterBySpacing)}>
// 					{!changeView ?
// 						<Button
// 							type="primary"
// 							icon={<AppstoreOutlined style={{ fontSize: 26 }} />}
// 							onClick={handleChangeView}
// 							ghost
// 						/>
// 						:
// 						<Button
// 							type="primary"
// 							icon={<MenuOutlined style={{ fontSize: 26 }} />}
// 							onClick={handleChangeView}
// 							ghost
// 						/>
// 					}
// 				</Column>
// 			)} */}
// 		</Row>
// 	);

// 	const handleToggleSelectCreateType = (userType, createType = '') => {
// 		setCreateUserType(userType);
// 		setCreateType(createType);
// 		setCurrentActiveModal('');
// 	}

// 	return (
// 		<React.Fragment>
// 			<Row alignItems="center" justifyContent="space-between" className={css(userStyles.mobileView)}>
// 				<Column>
// 					{/* <Row alignItems="center">
// 						<Column>
// 							<Button className="mb-2" type="primary" icon={<ArrowLeftOutlined />} onClick={() => history.push('/manage-class')} ghost>
// 								Back
// 							</Button>
// 						</Column>
// 					</Row> */}
// 					<Row alignItems="center">
// 						<Column>
// 							{activeTab.name === 'Student' ?
// 								<Input
// 									style={{ maxWidth: 250 }}
// 									placeholder={`Search Student`}
// 									value={studentSearchText}
// 									onChange={e => setStudentSearchText(e.target.value)}
// 									suffix={<SearchOutlined />}
// 								/>
// 								:
// 								activeTab.name === 'Groups' ?
// 									<Input
// 										style={{ maxWidth: 250 }}
// 										placeholder={`Search Groups`}
// 										value={groupSearchText}
// 										onChange={e => setGroupSearchText(e.target.value)}
// 										suffix={<SearchOutlined />}
// 									/>
// 									:
// 									activeTab.name === 'Teachers' ?
// 										<Input
// 											style={{ maxWidth: 250 }}
// 											placeholder={`Search Teachers`}
// 											value={teacherSearchText}
// 											onChange={e => setTeacherSearchText(e.target.value)}
// 											suffix={<SearchOutlined />}
// 										/>
// 										:
// 										activeTab.name === 'Parents' ?
// 											<Input
// 												style={{ maxWidth: 250 }}
// 												placeholder={`Search Parents`}
// 												value={parentSearchText}
// 												onChange={e => setParentSearchText(e.target.value)}
// 												suffix={<SearchOutlined />}
// 											/>
// 											:
// 											activeTab.name === 'Admin' ?
// 												<Input
// 													style={{ maxWidth: 250 }}
// 													placeholder={`Search Admins`}
// 													value={adminSearchText}
// 													onChange={e => setAdminSearchText(e.target.value)}
// 													suffix={<SearchOutlined />}
// 												/>
// 												:
// 												<Input style={{ maxWidth: 250 }} placeholder={`Search ${activeTab.name}`} suffix={<SearchOutlined />} />
// 							}
// 						</Column>
// 						<Column>
// 							{activeTab.id !== '4' ?
// 								activeTab.id === '0' || activeTab.id === '1' || activeTab.id === '2' || activeTab.id === '3' ?
// 									<div className="ml-3">
// 										<button id={activeTab.idKey} className={css(userStyles.addNewClass) + ' btn'} onClick={() => setCurrentActiveModal(activeTab.id === '0' ? 'student' : activeTab.id === '1' ? 'teacher' : activeTab.id === '2' ? 'parent' : 'admin')}>
// 											<span className={css(userStyles.plusIcon)}>
// 												<PlusOutlined />
// 											</span>
// 											<span className={css(userStyles.mobileHide)}>
// 												{`Create ${activeTab.name}`}
// 											</span>
// 										</button>
// 									</div>
// 									:
// 									null
// 								: changeView && (
// 									<div className="ml-3">
// 										<button className={css(userStyles.addNewClass) + ' btn'} onClick={() => setCurrentActiveModal('groups')}>
// 											<span className={css(userStyles.plusIcon)}>
// 												<PlusOutlined />
// 											</span>
// 											<span className={css(userStyles.mobileHide)}>
// 												{`Create ${activeTab.name}`}
// 											</span>
// 										</button>
// 									</div>
// 								)
// 							}
// 						</Column>
// 					</Row>
// 				</Column>
// 			</Row>

// 			<Row justifyContent={'flex-start'}>
// 				<Column className="p-4 bg-white w-100 mt-3">
// 					<Tabs
// 						tabBarExtraContent={extraContent}
// 						activeKey={activeTab.id}
// 						onChange={(e) => setActiveTab(userLinks.find((item) => item.id === e))}
// 					>
// 						<TabPane tab="Students" key="0">
// 							<StudentFilter
// 								isFilterOpen={currentActiveFilter === 'student'}
// 								setIsFilterOpen={() => setCurrentActiveFilter('')}
// 								filters={studentsFilter}
// 								setFilters={setStudentsFilter}
// 								handleChangeFilter={handleChangeStudentFilter}
// 								initialFilters={initialStudentsFilter}
// 							/>
// 							<Student filters={studentsFilter} searchText={studentSearchText} updateStudentList={updateStudentList} />
// 						</TabPane>
// 						<TabPane tab="Teachers" key="1">
// 							<TeacherFilter
// 								isFilterOpen={currentActiveFilter === 'teacher'}
// 								setIsFilterOpen={() => setCurrentActiveFilter('')}
// 								filters={teachersFilter}
// 								setFilters={setTeachersFilter}
// 								handleChangeFilter={handleChangeTeacherFilter}
// 								initialFilters={initialTeachersFilter}
// 							/>
// 							<Teacher filters={teachersFilter} searchText={teacherSearchText} updateTeacherList={updateTeacherList} />
// 						</TabPane>
// 						<TabPane tab="Parents" key="2">
// 							<ParentFilter
// 								isFilterOpen={currentActiveFilter === 'parent'}
// 								setIsFilterOpen={() => setCurrentActiveFilter('')}
// 								filters={parentsFilter}
// 								setFilters={setParentsFilter}
// 								handleChangeFilter={handleChangeParentFilter}
// 								initialFilters={initialTeachersFilter}
// 							/>
// 							<Parent filters={parentsFilter} searchText={parentSearchText} updateParentList={updateParentList} />
// 						</TabPane>
// 						<TabPane tab="Admin" key="3">
// 							<AdminFilter
// 								isFilterOpen={currentActiveFilter === 'admin'}
// 								setIsFilterOpen={() => setCurrentActiveFilter('')}
// 								filters={adminsFilter}
// 								setFilters={setAdminsFilter}
// 								handleChangeFilter={handleChangeAdminFilter}
// 								initialFilters={initialTeachersFilter}
// 							/>
// 							<Admin filters={adminsFilter} searchText={adminSearchText} updateAdminList={updateAdminList} />
// 						</TabPane>
// 						<TabPane tab="Group" key="4">
// 							<GroupFilter
// 								isFilterOpen={currentActiveFilter === 'groups'}
// 								setIsFilterOpen={() => setCurrentActiveFilter('')}
// 								filters={groupsFilter}
// 								setFilters={setGroupsFilter}
// 								handleChangeFilter={handleChangeGroupFilter}
// 								initialFilters={initialGroupsFilter}
// 							/>
// 							<Group filters={groupsFilter} searchText={groupSearchText} changeView={changeView} sortBy={groupSortBy} sortOrder={groupSortOrder} />
// 						</TabPane>
// 					</Tabs>
// 				</Column>
// 			</Row>

// 			{/* <CreateStudent visible={currentActiveModal === 'student'} handleCancel={() => setCurrentActiveModal('')} onSelectType={handleToggleSelectCreateType} />
// 			<CreateTeacher visible={currentActiveModal === 'teacher'} handleCancel={() => setCurrentActiveModal('')} onSelectType={handleToggleSelectCreateType} />
// 			<CreateParent visible={currentActiveModal === 'parent'} handleCancel={() => setCurrentActiveModal('')} onSelectType={handleToggleSelectCreateType} />
// 			<CreateAdmin visible={currentActiveModal === 'admin'} handleCancel={() => setCurrentActiveModal('')} onSelectType={handleToggleSelectCreateType} />
// 			<CreateGroup isOpen={currentActiveModal === 'groups'} handleCancel={() => setCurrentActiveModal('')} /> */}

// 			<BulkUpload
// 				visible={createType === 'bulk' ? true : false}
// 				userRole={createUserType === 'student' ? STUDENT : createUserType === 'teacher' ? TEACHER : createUserType === 'parent' ? PARENT : createUserType === 'admin' ? ADMIN : ''}
// 				userType={createUserType}
// 				handleCancel={handleToggleSelectCreateType}
// 				handleUpdateStudentList={() => setUpdateStudentList(!updateStudentList)}
// 				handleUpdateTeacherList={() => setUpdateTeacherList(!updateTeacherList)}
// 				handleUpdateParentList={() => setUpdateParentList(!updateParentList)}
// 				handleUpdateAdminList={() => setUpdateAdminList(!updateAdminList)}
// 			/>
// 			<InviteMail
// 				visible={createType === 'email' ? true : false}
// 				userRole={createUserType === 'student' ? STUDENT : createUserType === 'teacher' ? TEACHER : createUserType === 'parent' ? PARENT : createUserType === 'admin' ? ADMIN : ''}
// 				userType={createUserType}
// 				handleCancel={handleToggleSelectCreateType}
// 				handleUpdateStudentList={() => setUpdateStudentList(!updateStudentList)}
// 				handleUpdateTeacherList={() => setUpdateTeacherList(!updateTeacherList)}
// 				handleUpdateParentList={() => setUpdateParentList(!updateParentList)}
// 				handleUpdateAdminList={() => setUpdateAdminList(!updateAdminList)}
// 			/>
// 			{/* <StudentFormCreate visible={createType === 'form' && createUserType === 'student' ? true : false} handleCancel={handleToggleSelectCreateType} handleUpdateStudentList={() => setUpdateStudentList(!updateStudentList)} />
// 			<TeacherFormCreate visible={createType === 'form' && createUserType === 'teacher' ? true : false} handleCancel={handleToggleSelectCreateType} handleUpdateTeacherList={() => setUpdateTeacherList(!updateTeacherList)} />
// 			<ParentFormCreate visible={createType === 'form' && createUserType === 'parent' ? true : false} handleCancel={handleToggleSelectCreateType} handleUpdateParentList={() => setUpdateParentList(!updateParentList)} />
// 			<AdminFormCreate visible={createType === 'form' && createUserType === 'admin' ? true : false} handleCancel={handleToggleSelectCreateType} handleUpdateAdminList={() => setUpdateAdminList(!updateAdminList)} /> */}

// 		</React.Fragment>
// 	);
// };

const Users=()=>{
	return (<div>Hello</div>)
}
export default Users;
