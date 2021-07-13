import FeedbackIcon from './../icons/feedback';
import CalendarIcon from './../icons/calendar';
import ClassIcon from './../icons/class';
import SchoolIcon from './../icons/school';
import UserIcon from './../icons/user';
import NoticeBoardIcon from './../icons/notice-board';

const adminMenus = [
  { name: 'Mandir', key: 'mandir', link: '/mandir', order: 1, icon: SchoolIcon },
  // { name: 'Parivar', key: 'manage-family', link: '/manage-family', order: 1, icon: ClassIcon },
  // { name: 'Users', key: 'manage-users', link: '/manage-users', order: 2, icon: UserIcon },
]

export const commonMenus = [
  // { name: 'Discussions', key: 'discussions', link: '/discussions', order: 6, icon: CalendarIcon },
  // { name: 'Notice Board', key: 'notice-board', link: '/notice-board', order: 2, icon: NoticeBoardIcon },
  // { name: 'Calendar', key: 'calendar', link: '/calendar', order: 3, icon: CalendarIcon },

  { name: 'Feedback', key: 'feedback', link: '/feedback', order: 4, icon: FeedbackIcon },
];

const studentMenus = [
  { name: 'My Subjects', key: 'student', link: '/student', order: 5, icon: UserIcon },
]
const teacherMenus = [
  { name: 'My Subjects', key: 'teacher', link: '/teacher', order: 5, icon: UserIcon },
]
const parentMenus = [
  { name: 'My Subjects', key: 'parent', link: '/parent', order: 5, icon: UserIcon },
]

const getMenus = role => {
  let menus = [];
  switch (role) {
    case 'Admin':
      menus = [...adminMenus];
      break;
    case 'Student':
      menus = [...studentMenus]
      break;
    case 'Teacher':
      menus = [...teacherMenus]
      break;
    case 'Parent':
      menus = [...parentMenus]
      break;
    default:
      menus = [];
  }

  return menus.sort((a, b) => (a.order - b.order));
}

export default getMenus;