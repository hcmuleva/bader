const section = ['A', 'B', 'C', 'D', 'E'];
const Status = ['Active', 'InActive', 'Invited', 'ApprovalPending'];
const roles = ['Admin', 'Teacher', 'Student', 'Parent'];
const sex = ['Male', 'Female'];
const mediumList = ['English', 'Hindi'];
const orgnization_type = ['Private', 'Public', 'NGO'];

const grade_active_status = ['Active', 'InActive'];
const grade_archive_status = ['Active', 'Archived'];
const grade_type = ['Regular', 'Offline', 'Online'];
const subject_typeList = ['Regular', 'Offline', 'Online'];
const FOLDER = 'Folder';
const PAGE = 'Page';
const QUIZ = 'Quiz'
const DISCUSSION = 'Discussion';
const MEDIA = 'Media';
const ASSIGNMENT = 'Assignment';
const rootParentId = null;
const ADD = 'add';
const DELETE = 'delete';
const MOVE = 'move';
const EDIT = 'edit';
const PUBLISH_UNPUBLISH = 'publish_unpublish';
const initLevel = 10000;
const CHILD_ADD = 'CHILD_ADD';
const IN_BETWEEN = 'IN_BETWEEN';
const questionType = {
	multiChoice: 'MultiChoice',
	singleChoice: 'SingleChoice',
	trueFalse: 'TrueFalse',
	fillBlanks: 'FillInBlanks',
	matching: 'Matching',
	ordering: 'Ordering'
}

const questionTypeNiceName = {
	'MultiChoice': 'Multiple Choice',
	'SingleChoice': 'Single Choice',
	'TrueFalse': 'True and false',
	'FillInBlanks': 'Fill in the blanks',
	'Matching': 'Matching',
	'Ordering': 'Ordering',
}

const fileTypeQuestion = {
	rich: 'richText',
	text: 'text'
}

const videoTypes = ['avi', 'mp4', 'webm', 'mov', '3gp', 'm4v', 'ogg'];
const imgTypes = ['jpeg', 'jpg', 'png'];

const directIframeLoadMimeTypes = [
	'text/plain',
	'application/pdf'
]

const officeMimesType = [
	'application/vnd.ms-powerpoint',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	'application/vnd.ms-excel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const knownFileTypes = {
	'text/plain': 'Text',
	'application/pdf': 'PDF',
	'application/vnd.ms-powerpoint': 'Powerpoint Slides',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'Powerpoint Slides',
	'application/vnd.ms-excel': 'Excel Sheet',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Sheet',
	'application/msword': 'Word Document',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
}

const fileTypeFromMime = (type, url) => {
	const couldBe = type && type !== '' ? knownFileTypes[type] : undefined;
	return couldBe ? couldBe : type.includes('video/') ? 'Video' : type.includes('audio/') ? 'Audio' : type.includes('text/') ? 'Text' : (url.includes('youtube') || url.includes('vimeo')) ? 'Video' : 'Other';
}

const userLinks = [
	{ id: '0', name: 'Student', link: '/create-student', idKey: 'create-student-button' },
	{ id: '1', name: 'Teachers', link: '/create-teacher', idKey: 'create-teacher-button' },
	{ id: '2', name: 'Parents', link: '/create-parent', idKey: 'create-parent-button' },
	{ id: '3', name: 'Admin', link: '/create-admin', idKey: 'create-admin-button' },
	{ id: '4', name: 'Groups' }
];
const grade_number = [
	'LKG',
	'UKG',
	'I',
	'II',
	'III',
	'IV',
	'V',
	'VI',
	'VII',
	'VIII',
	'IX',
	'X',
	'XI',
	'XII',
	'UG',
	'PG'
];

const grade_number_for_sorting = {
	'LKG': 1,
	'UKG': 2,
	'I': 3,
	'II': 4,
	'III': 5,
	'IV': 6,
	'V': 7,
	'VI': 8,
	'VII': 9,
	'VIII': 10,
	'IX': 11,
	'X': 12,
	'XI': 13,
	'XII': 14,
	'UG': 15,
	'PG': 16,
};

const grade_specialization = ['Mathematics', 'Commerce', 'Biology', 'Science', 'HomeScience'];
const subject_assignmentList = ['Mandatory', 'Optional'];
const content_type = [
	'FakeNode',
	'Folder',
	'Quiz',
	'Assignment',
	'Discussion',
	'Media',
	'Page',
	'Syllabus',
	'Section'
];
const calender_event_type = ['Personal', 'General', 'Quiz', 'Assignment', 'Discussion'];
const levels = [1, 2, 3, 4, 5];
const gradeColors = [
	{ color_name: 'Red', color_value: '#f50' },
	{ color_name: 'LightBlue', color_value: '#2db7f5' },
	{ color_name: 'Green', color_value: '#87d068' },
	{ color_name: 'Blue', color_value: '#108ee9' },
	{ color_name: 'LightGreen', color_value: '#eeee68' }
];

const groupColors = [
	{ color_name: 'Red', color_value: '#f50' },
	{ color_name: 'LightBlue', color_value: '#2db7f5' },
	{ color_name: 'Green', color_value: '#87d068' },
	{ color_name: 'Blue', color_value: '#108ee9' }
];

const cachePolicy = {
	cacheNetwork: 'cache-and-network',
	network: 'network-only'
};

const STUDENT = 'Student';
const ADMIN = 'Admin';
const TEACHER = 'Teacher';
const PARENT = 'Parent';
const AZUREFILEURL = 'https://zbmstorage.blob.core.windows.net/media/rc-upload-1596812123253-2BulkUploadTemplate.xlsx?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-10-31T14:34:37Z&st=2020-07-27T06:34:37Z&spr=https,http&sig=72AlWTqsweTSPiCQGNrWKLIj1bHAzAoy9XwrEObZlvA%3D';
const FILTER_BY = {
	ROLES: ['Admin', 'Student', 'Teacher', 'Parent'],
	GRADE_AND_SECTION_OBj_ARRAY: []
};

const noSpaceRegex = /.*\S.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;

export {
	FILTER_BY,
	cachePolicy,
	numbers,
	noSpaceRegex,
	STUDENT,
	ADMIN,
	TEACHER,
	PARENT,
	FOLDER,
	AZUREFILEURL,
	ADD,
	EDIT,
	DELETE,
	MOVE,
	QUIZ,
	PUBLISH_UNPUBLISH,
	section,
	Status,
	roles,
	sex,
	orgnization_type,
	grade_active_status,
	grade_archive_status,
	grade_type,
	grade_number,
	grade_number_for_sorting,
	grade_specialization,
	subject_assignmentList,
	content_type,
	subject_typeList,
	calender_event_type,
	levels,
	mediumList,
	gradeColors,
	groupColors,
	userLinks,
	uuidRegex,
	rootParentId,
	initLevel,
	fileTypeQuestion,
	questionType,
	questionTypeNiceName,
	CHILD_ADD,
	IN_BETWEEN,
	PAGE,
	DISCUSSION,
	ASSIGNMENT,
	MEDIA,
	imgTypes,
	videoTypes,
	directIframeLoadMimeTypes,
	officeMimesType,
	fileTypeFromMime
};
