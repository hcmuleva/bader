import React from 'react';
import { Tag, Avatar, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { UserOutlined } from '@ant-design/icons';
import { fileTypeFromMime, TEACHER, PAGE, MEDIA, ASSIGNMENT, DISCUSSION } from '../enums/common';

export const classColumn = [
	{
		title: 'CLASS',
		dataIndex: 'grade_name',
		key: 'grade_name',
		align: 'center'
	},
	{
		title: 'CREATED ON',
		dataIndex: 'grade_created_at',
		key: 'grade_created_at',
		align: 'center'
	},
	{
		title: 'STUDENT',
		dataIndex: 'student_count',
		key: 'student_count',
		align: 'center'
	},
	{
		title: 'COURSES',
		dataIndex: 'course_count',
		key: 'course_count',
		align: 'center'
	},
	{
		title: 'TEACHERS',
		dataIndex: 'teacher_count',
		key: 'teacher_count',
		align: 'center'
	},
	{
		title: 'STATUS',
		key: 'grade_active_status',
		dataIndex: 'grade_active_status',
		align: 'center',
		render: (text) => <Tag color={text ? 'success' : 'error'}>{text ? 'ACTIVE' : 'INACTIVE'}</Tag>
	}
];

export const userTableColumn = [
	{
		title: 'AVATAR',
		dataIndex: 'user_avatar',
		align: 'center',
		key: 'user_avatar',
		render: (text, record) => record.user_avatar && record.user_avatar !== '' ? <Avatar src={record.user_avatar} /> : <Avatar icon={<UserOutlined />} />,
	},
	{
		title: 'NAME',
		dataIndex: 'user_first_name',
		align: 'center',
		key: 'user_first_name',
		sorter: (a, b) => a.user_first_name.localeCompare(b.user_first_name)
	},
	{
		title: 'EMAIL',
		dataIndex: 'user_email',
		align: 'center',
		key: 'user_email'
	}
];

export const membersColumn = [
	{
		title: 'AVATAR',
		dataIndex: 'user_avatar',
		align: 'center',
		key: 'user_avatar',
		render: (text, record) => record.User.user_avatar && record.User.user_avatar !== '' ? <Avatar src={record.User.user_avatar} /> : <Avatar icon={<UserOutlined />} />,
	},
	{
		title: 'NAME',
		dataIndex: 'user_name',
		align: 'center',
		key: 'User.user_name',
		render: (text, record) => record.User.user_name,
		sorter: (a, b) => a.User.user_name.localeCompare(b.User.user_name)
	},
	{
		title: 'GRADE',
		dataIndex: 'user_class_grade',
		align: 'center',
		key: 'user_class_grade',
		render: (text, record) => record.user_role === TEACHER ? '-' : record.User.user_class_grade,
		sorter: (a, b) => a.User.user_class_grade.localeCompare(b.User.user_class_grade)
	},
	{
		title: 'SECTION',
		dataIndex: 'user_class_section',
		align: 'center',
		key: 'user_class_section',
		render: (text, record) => record.user_role === TEACHER ? '-' : record.User.user_class_section,
		sorter: (a, b) => a.User.user_class_section.localeCompare(b.User.user_class_section)
	},
	{
		title: 'STATUS',
		key: 'user_active_status',
		dataIndex: 'user_active_status',
		align: 'center',
		render: (text, record) => <Tag color={record.User.user_active_status === 'Active' ? "success" : "error"}>{record.User.user_active_status}</Tag>,
		sorter: (a, b) => a.User.user_active_status.localeCompare(b.User.user_active_status),
	},
	{
		title: 'ROLE',
		dataIndex: 'user_role',
		align: 'center',
		key: 'user_role',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.user_role.localeCompare(b.user_role),
	},
];

export const groupColumn = [
	{
		title: 'GROUP',
		dataIndex: 'user_group_name',
		key: 'user_group_name',
		sorter: (a, b) => a.user_group_name.localeCompare(b.user_group_name)
	},
	{
		title: 'MEMBERS',
		dataIndex: 'users_count',
		key: 'users_count',
		sorter: (a, b) => (a.users_count > b.users_count ? 1 : a.users_count < b.users_count ? -1 : 0)
	},
	{
		title: 'CODE',
		dataIndex: 'user_group_code',
		key: 'user_group_code',
		sorter: (a, b) => a.user_group_code.localeCompare(b.user_group_code)
	},
	{
		title: 'COLOR',
		dataIndex: 'user_group_color',
		key: 'user_group_color',
		render: (text) => <Tag className="p-2" color={text} />,
		sorter: (a, b) => a.user_group_code.localeCompare(b.user_group_code)
	},
	{
		title: 'CREATED BY',
		dataIndex: 'User',
		key: 'User',
		render: (text, grade) => text.user_name,
		sorter: (a, b) => a.User.user_name.localeCompare(b.User.user_name)
	},
	{
		title: 'CREATED DATE',
		dataIndex: 'user_group_created_at',
		key: 'user_group_created_at',
		render: (text, grade) => dayjs(text).format('DD/MM/YYYY HH:mm'),
		sorter: (a, b) => a.user_group_created_at.localeCompare(b.user_group_created_at),
		sortDirections: ['descend', 'ascend']
	}
];

export const myProfileGroupColumn = [
	{
		title: 'GROUP',
		dataIndex: 'user_group_name',
		key: 'user_group_name'
	},
	{
		title: 'DETAILS',
		dataIndex: 'user_group_description',
		key: 'user_group_description',
		render: (text, record) => <div className="description-single-line">{text}</div>
	},
	{
		title: 'MEMBERS',
		dataIndex: 'users_count',
		key: 'users_count'
	}
];

export const subColumn = [
	{
		title: 'SUBJECT',
		align: 'center',
		dataIndex: 'course_name',
		key: 'course_name',
		sorter: (a, b) => a.course_name.localeCompare(b.course_name)
	},
	{
		title: 'STUDENT',
		align: 'center',
		dataIndex: 'student_count',
		key: 'student_count',
		sorter: (a, b) => a.course_name - b.course_name
	},
	{
		title: 'TEACHERES',
		align: 'center',
		dataIndex: 'teacher_count',
		key: 'teacher_count',
		sorter: (a, b) => a.teacher_count - b.teacher_count
	},
	{
		title: 'QUIZ',
		align: 'center',
		dataIndex: 'quiz_count',
		key: 'quiz_count',
		sorter: (a, b) => a.quiz_count - b.quiz_count
	},
	{
		title: 'ASSSIGNMENTS',
		align: 'center',
		dataIndex: 'assignment_count',
		key: 'assignment_count',
		sorter: (a, b) => a.assignment_count - b.assignment_count
	},
	{
		title: 'STARTED ON',
		dataIndex: 'course_start_date',
		key: 'course_start_date',
		align: 'center',
		render: (text, grade) => dayjs(text).format('DD/MM/YYYY HH:mm'),
		sorter: (a, b) => a.course_start_date.localeCompare(b.course_start_date),
		sortDirections: ['descend', 'ascend']
	}
];

export const myAssignedSubjectColumn = [
	{
		title: 'COURSE',
		align: 'center',
		dataIndex: 'course_name',
		key: 'course_name',
		sorter: (a, b) => a.course_name.localeCompare(b.course_name)
	},
	{
		title: 'CLASS',
		align: 'center',
		dataIndex: 'grade_number',
		key: 'grade_number',
		render: (text, grade) => grade.Grade.grade_number,
		sorter: (a, b) => a.Grade.grade_number.localeCompare(b.Grade.grade_number)
	},
	{
		title: 'SECTION',
		align: 'center',
		dataIndex: 'grade_section',
		key: 'grade_section',
		render: (text, grade) => grade.Grade.grade_section,
		sorter: (a, b) => a.Grade.grade_section.localeCompare(b.Grade.grade_section)
	},
	{
		title: 'DISCUSSION',
		align: 'center',
		dataIndex: 'discussion_count',
		key: 'discussion_count',
		sorter: (a, b) => a.discussion_count - b.discussion_count
	},
	{
		title: 'NOTES',
		align: 'center',
		dataIndex: 'notes_count',
		key: 'notes_count',
		sorter: (a, b) => a.notes_count - b.notes_count
	},
	{
		title: 'QUIZ',
		align: 'center',
		dataIndex: 'quiz_count',
		key: 'quiz_count',
		sorter: (a, b) => a.quiz_count - b.quiz_count
	},
	{
		title: 'ASSSIGNMENTS',
		align: 'center',
		dataIndex: 'assignment_count',
		key: 'assignment_count',
		sorter: (a, b) => a.assignment_count - b.assignment_count
	}
];

export const myAssignedTeacherSubjectColumn = [
	{
		title: 'COURSE',
		align: 'center',
		dataIndex: 'course_name',
		key: 'course_name',
		sorter: (a, b) => a.course_name.localeCompare(b.course_name)
	},
	{
		title: 'CLASS',
		align: 'center',
		dataIndex: 'grade_number',
		key: 'grade_number',
		render: (text, grade) => grade.Grade.grade_number,
		sorter: (a, b) => a.Grade.grade_number.localeCompare(b.Grade.grade_number)
	},
	{
		title: 'SECTION',
		align: 'center',
		dataIndex: 'grade_section',
		key: 'grade_section',
		render: (text, grade) => grade.Grade.grade_section,
		sorter: (a, b) => a.Grade.grade_section.localeCompare(b.Grade.grade_section)
	},
	{
		title: 'STUDENT',
		align: 'center',
		dataIndex: 'student_count',
		key: 'student_count',
		sorter: (a, b) => a.student_count - b.student_count
	},
	{
		title: 'DISCUSSION',
		align: 'center',
		dataIndex: 'discussion_count',
		key: 'discussion_count',
		sorter: (a, b) => a.discussion_count - b.discussion_count
	},
	{
		title: 'QUIZ',
		align: 'center',
		dataIndex: 'quiz_count',
		key: 'quiz_count',
		sorter: (a, b) => a.quiz_count - b.quiz_count
	},
	{
		title: 'ASSSIGNMENTS',
		align: 'center',
		dataIndex: 'assignment_count',
		key: 'assignment_count',
		sorter: (a, b) => a.assignment_count - b.assignment_count
	}
];

export const noticeBoardColumn = [
	{
		title: 'NOTICE',
		dataIndex: 'notice_name',
		key: 'notice_name',
		align: 'center',
		render: (text) => <span className="single-line-webkit">{text}</span>,
		sorter: (a, b) => a.notice_name.localeCompare(b.notice_name)
	},
	{
		title: 'CREATED BY',
		dataIndex: 'User',
		key: 'User',
		align: 'center',
		render: (user) => <span> {user.user_name} </span>,
		sorter: (a, b) => a.User.user_name.localeCompare(b.User.user_name)
	},
	{
		title: 'GROUPS',
		dataIndex: 'Assigned_Notice',
		key: 'Assigned_Notice',
		align: 'start',
		render: (grps) => (
			<span>
				{' '}
				{grps.map((item) => (
					<Tooltip key={item.User_Group.user_group_id} title={item.User_Group.user_group_name}>
						{' '}
						<Avatar> {item.User_Group.user_group_name.charAt(0).toUpperCase()} </Avatar>{' '}
					</Tooltip>
				))}{' '}
			</span>
		),
		sorter: (a, b) => {
			const first = a.Assigned_Notice.length;
			const second = b.Assigned_Notice.length;
			return first > second ? 1 : first < second ? -1 : 0;
		}
	},
	{
		title: 'CREATED ON',
		dataIndex: 'notice_created_at',
		key: 'notice_created_at',
		align: 'center',
		render: (created_at) => <span> {dayjs(created_at).format('DD/MM/YYYY HH:mm')} </span>,
		sorter: (a, b) => a.notice_created_at.localeCompare(b.notice_created_at),
		sortDirections: ['descend', 'ascend']
	}
];

export const myAssignedSubjectAssignmentTabColumns = [
	{
		title: 'ASSIGNMENT TITLE',
		dataIndex: 'content_name',
		key: 'content_name',
		align: 'center',
		render: (text) => <Tooltip title={text}><span className="single-line-webkit">{text}</span></Tooltip>,
		sorter: (a, b) => a.content_name.localeCompare(b.content_name)
	},
	{
		title: 'Content',
		dataIndex: 'path',
		key: 'path',
		render: (title, record) => <span>{record.Content ? record.Content.content_name : 'Root'}</span>,
	},
	{
		title: 'PUBLISH',
		dataIndex: 'is_content_publish',
		key: 'is_content_publish',
		align: 'center',
		render: (text) => (text ? 'Published' : 'Unpublished'),
		sorter: (a, b) => {
			const first = a.is_content_publish ? 'Published' : 'Unpublished';
			const second = b.is_content_publish ? 'Published' : 'Unpublished';
			return first.localeCompare(second);
		}
	},
	{
		title: 'CREATED ON',
		dataIndex: 'content_created_at',
		key: 'content_created_at',
		align: 'center',
		width: '15%',
		defaultSortOrder: 'descend',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>,
		sorter: (a, b) => a.content_created_at.localeCompare(b.content_created_at)
	},
	{
		title: 'LAST DATE',
		dataIndex: 'content_due_date',
		key: 'content_due_date',
		align: 'center',
		render: (text) => (text ? <span>{dayjs(text).format('DD/MM/YYYY')}</span> : '-')
	}
];

export const myAssignedSubjectAssignmentTabStudentsColumns = [
	{
		title: 'ASSIGNMENT TITLE',
		dataIndex: 'content_name',
		key: 'content_name',
		align: 'center',
		render: (text) => <Tooltip title={text}><span className="single-line-webkit">{text}</span></Tooltip>,
		sorter: (a, b) => a.content_name.localeCompare(b.content_name)
	},
	{
		title: 'Content',
		dataIndex: 'path',
		key: 'path',
		render: (title, record) => <span>{record.Content ? record.Content.content_name : 'Root'}</span>,
	},
	{
		title: 'CREATED ON',
		dataIndex: 'content_created_at',
		key: 'content_created_at',
		align: 'center',
		width: '15%',
		defaultSortOrder: 'descend',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>,
		sorter: (a, b) => a.content_created_at.localeCompare(b.content_created_at)
	},
	{
		title: 'LAST DATE',
		dataIndex: 'content_due_date',
		key: 'content_due_date',
		align: 'center',
		render: (text) => (text ? <span>{dayjs(text).format('DD/MM/YYYY')}</span> : '-')
	}
];

export const bookmarkColumns = [
	{
		title: 'NAME',
		dataIndex: 'Content',
		key: 'name',
		render: (content) => <span> {content.content_name} </span>,
		sorter: (a, b) => a.Content.content_name.localeCompare(b.Content.content_name)
	},
	{
		title: 'FILE TYPE',
		dataIndex: 'Content',
		key: 'fileType',
		render: (content) => (
			<span>
				{content.content_type === PAGE ?
					'Page'
					:
					content.content_file_type ?
						fileTypeFromMime(content.content_file_type, content.content_url)
						:
						content.content_type === MEDIA ?
							'Media'
							:
							content.content_type === ASSIGNMENT ?
								'Assignment'
								:
								content.content_type === DISCUSSION ?
									'Discussion'
									:
									''
				}
			</span>
		),
		sorter: (a, b) => {
			const first = a.Content.content_file_type ? fileTypeFromMime(a.Content.content_file_type, a.Content.content_url) : '';
			const second = b.Content.content_file_type ? fileTypeFromMime(b.Content.content_file_type, b.Content.content_url) : '';
			return first.localeCompare(second)
		}
	},
	{
		title: 'CREATED ON',
		dataIndex: 'bookmark_created_at',
		key: 'bookmark_created_at',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>,
		sorter: (a, b) => a.bookmark_created_at.localeCompare(b.bookmark_created_at),
		sortDirections: ['descend', 'ascend']
	}
];

export const notesColumns = [
	{
		title: 'NOTE TITLE',
		dataIndex: 'notes_description',
		key: 'notes_description',
		ellipsis: true,
		render: (title) => <span> {title.length > 100 ? title.substring(0, 100).trim() + '...' : title} </span>,
		sorter: (a, b) => a.notes_description.localeCompare(b.notes_description)
	},
	{
		title: 'Content',
		dataIndex: 'path',
		key: 'path',
		render: (title, record) => <span>{record.Content ? record.Content.content_name : 'Root'}</span>,
	},
	{
		title: 'CREATED ON',
		dataIndex: 'notes_created_at',
		key: 'notes_created_at',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>,
		sorter: (a, b) => a.notes_created_at.localeCompare(b.notes_created_at),
		sortDirections: ['descend', 'ascend']
	}
];

export const quizTeacherColumns = [
	{
		title: 'NAME',
		dataIndex: 'content_name',
		key: 'content_name',
		ellipsis: true,
		render: (title) => <span> {title} </span>,
		sorter: (a, b) => a.content_name.localeCompare(b.content_name),
	},
	{
		title: 'CREATED BY',
		dataIndex: 'User_Content_content_created_byToUser',
		key: 'createdBy',
		render: (text) => <span> {text.user_first_name} </span>
	},
	{
		title: 'IS PUBLISHED?',
		dataIndex: 'is_content_publish',
		key: 'is_content_publish',
		align: 'center',
		render: (text) => (text ? 'Published' : 'Unpublished'),
		sorter: (a, b) => {
			const first = a.is_content_publish ? 'Published' : 'Unpublished';
			const second = b.is_content_publish ? 'Published' : 'Unpublished';
			return first.localeCompare(second);
		}
	},
	{
		title: 'CREATED ON',
		dataIndex: 'notes_created_at',
		key: 'notes_created_at',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>
	}
];

export const quizStudentColumns = [
	{
		title: 'NAME',
		dataIndex: 'content_name',
		key: 'content_name',
		ellipsis: true,
		render: (title) => <span> {title} </span>,
		sorter: (a, b) => a.content_name.localeCompare(b.content_name),
	},
	{
		title: 'CREATED DATE',
		dataIndex: 'notes_created_at',
		key: 'notes_created_at',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>
	},
	{
		title: 'DUE DATE',
		dataIndex: 'content_due_date',
		align: 'center',
		key: 'content_due_date',
		render: (text) => <span>{text ? dayjs(text).format('DD/MM/YYYY') : " - "}</span>
	}
];

export const quizStudentResultColumns = [
	{
		title: 'NAME',
		dataIndex: 'User',
		key: 'User',
		ellipsis: true,
		render: (title) => <span> {title.user_first_name} </span>
	},
	{
		title: 'SUBMISSION DATE',
		dataIndex: 'submission_date',
		key: 'submission_date',
		render: (text) => <span>{dayjs(text).format('DD/MM/YYYY')}</span>
	},
	{
		title: 'TOTAL MARKS',
		dataIndex: 'quiz_summery',
		key: 'quiz_summery',
		render: (summery) => {
			const total = JSON.parse(summery).reduce((prev, current) => ({ rightPoints: prev.rightPoints + current.rightPoints }), { rightPoints: 0 })
			return <span>{total.rightPoints}</span>
		}
	}
];

export const summaryTable = [
	{
		title: "QUESTION TYPE",
		dataIndex: "type",
		align: 'center',
		key: "type",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.type.localeCompare(b.type),
	},
	{
		title: "TOTAL",
		align: 'center',
		dataIndex: "totalCount",
		key: "totalCount"
	},
	{
		title: "CORRECT ANSWER",
		align: 'center',
		dataIndex: "rightCount",
		key: "rightCount"
	},
	{
		title: "INCORRECT ANSWER",
		align: 'center',
		dataIndex: "wrongCount",
		key: "wrongCount"
	},
	{
		title: "TOTAL MARKS",
		align: 'center',
		dataIndex: "rightPoints",
		key: "rightPoints"
	}
];