import React from 'react';
import dayjs from 'dayjs';

import Resizer from 'react-image-file-resizer';

import FolderIcon from './../../../assets/course-icons/folder';
import DisabledFolderIcon from './../../../assets/course-icons/folder/disabled';
import AssignmentIcon from './../../../assets/course-icons/assignment';
import MediaIcon from './../../../assets/course-icons/media';
import QuizIcon from './../../../assets/course-icons/quiz';
import DiscussionIcon from './../../../assets/course-icons/discussion/index';

import {
  STUDENT,
  TEACHER,
  ADMIN,
  PARENT,
  uuidRegex,
  FOLDER,
  PAGE,
  ASSIGNMENT,
  DISCUSSION,
  MEDIA,
  imgTypes,
  QUIZ,
  questionType
} from '../../../assets/enums/common';

export const userRowObj = { student: [], admin: [], teacher: [], parent: [] };

export const filterUser = (arr) => {
  const user = { ...userRowObj };
  arr.forEach((element) => {
    const roles = element.Assigned_Role;
    element.user_birthday = dayjs(element.user_birthday).format('DD/MM/YYYY');
    if (searchRole({ roles, role: STUDENT })) {
      user.student.push(element);
    } else if (searchRole({ roles, role: TEACHER })) {
      user.teacher.push(element);
    } else if (searchRole({ roles, role: ADMIN })) {
      user.admin.push(element);
    } else if (searchRole({ roles, role: PARENT })) {
      user.parent.push(element);
    }
  });
  return user;
};

// search through the roles and return true if any match
const searchRole = ({ roles, role }) => {
  return roles.some((item) => item.user_role === role);
};

export const niceJson = (data) => JSON.parse(JSON.stringify(data).replace(/"\s+|\s+"/g, '"'));

export const getAzureFileData = async (file) => {
  let res = false;
  try {
    let getData = await fetch(file);
    if (getData.status === 200) {
      res = await getData.text();
    } else {
      res = false;
    }
  } catch (err) {
    console.log(err);
    res = false;
  }
  return res;
};

export const mapGroups = (grp) =>
  grp.map((item) => `${item.User_Group.user_group_name}-${item.User_Group.user_group_id}`);

export const extractBlobIdFromUrl = (url) => {
  if (url.includes('amazonaws.com')) {
    const fileName = url.split('/').pop();
    return fileName;
  } else {
    const blobId = url.split('/').pop().split('?').shift();
    const isValid = uuidRegex.test(blobId);
    return isValid ? blobId : isValid;
  }
};
export const isLeaf = (str) => (str === FOLDER ? false : true);

export const isFolder = (str) => (str === FOLDER ? true : false);

export const mediaNameFromAzureUrl = (str) => {
  const name = str.split('?').shift().split('/').pop();
  const type = name.split('.').pop();
  return { name, type: !imgTypes.some((item) => item === type) };
};

export const folderColorMap = {
  "#f50": "folder-red",
  "#2db7f5": "folder-light-blue",
  "#87d068": "folder-green",
  "#108ee9": "folder-blue",
  "#eeee68": "folder-light-green",
}

const PageIcon = ({ className, onClick }) => <span className={`inline-icon folder-icon page-icon ${className}`} onClick={onClick} />;
// const DiscussionIcon = ({ className, onClick }) => <span className={`inline-icon folder-icon discussion-icon ${className}`} onClick={onClick} />;
// const QuizIcon = ({ className, onClick }) => <span className={`inline-icon folder-icon quiz-icon ${className}`} onClick={onClick} />;

export const getIcon = (str, className, onClick = () => { }, color = '', isPublished = true) => {
  switch (str) {
    case FOLDER:
      return isPublished ?
        <FolderIcon className={`${className} ${folderColorMap[color] ? folderColorMap[color] : ''}`} onClick={onClick} height="32px" width="32px" />
        :
        <DisabledFolderIcon className={`${className} ${folderColorMap[color] ? folderColorMap[color] : ''}`} onClick={onClick} height="32px" width="32px" />;
    case PAGE:
      return <PageIcon className={className} onClick={onClick} />;
    case ASSIGNMENT:
      return <AssignmentIcon className={className} onClick={onClick} height="32px" width="32px" />;
    case DISCUSSION:
      return <DiscussionIcon className={className} onClick={onClick} />;
    case MEDIA:
      return <MediaIcon className={className} onClick={onClick} height="32px" width="32px" />;
    case QUIZ:
      return <QuizIcon className={className} onClick={onClick} />;
    default:
      break;
  }
};

export const constructTree = dataset => {
  let hashTable = Object.create(null);
  dataset.forEach(
    aData => (hashTable[aData.content_id] = { ...aData, child: [] })
  );
  let dataTree = [];
  dataset.forEach(aData => {
    if (aData.content_parent_id && hashTable[aData.content_parent_id])
      hashTable[aData.content_parent_id].child.push(
        hashTable[aData.content_id]
      );
    else dataTree.push(hashTable[aData.content_id]);
  });
  return dataTree;
};

export const getActiveSubjectTab = query => {
  if (query.tab) {
    if (query.tab === 'discussion') {
      return '5';
    } else if (query.tab === 'quiz') {
      return '3';
    } else if (query.tab === 'course') {
      return '2';
    }
  }

  return '2';
};
export const fakePromise = (data) => new Promise(resolve => resolve(data))

export const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export const filterQuestion = (questions, answers) => {
  const singleChoice = [];
  const multiChoice = [];
  const trueFalse = [];
  const fillBlanks = [];
  questions.forEach((e, i) => {
    e.answer = answers[e.id];
    switch (e.question_type) {
      case questionType.multiChoice:
        multiChoice.push(e);
        break;
      case questionType.singleChoice:
        singleChoice.push(e);
        break;
      case questionType.trueFalse:
        trueFalse.push(e);
        break;
      case questionType.fillBlanks:
        fillBlanks.push(e);
        break;

      default:
        break;
    }
  });
  return {
    singleChoice,
    multiChoice,
    trueFalse,
    fillBlanks
  };
};

export const getAnaliticsOfQuiz = arr => {
  let rightPoints = 0;
  let totalCount = 0;
  let rightCount = 0;
  let wrongCount = 0;
  let type = '';
  arr.forEach(item => {
    if (!type) {
      type = item.question_type;
    }
    totalCount = totalCount + 1;
    console.log('item', item);
    const options = JSON.parse(item.question_option);
    const selectedAns = item.answer;
    if (selectedAns !== null) {
      const isMulti = item.question_type === questionType.multiChoice;
      const isFillinBlank = item.question_type === questionType.fillBlanks;
      const onlyRightAnswer = options.filter(e => e.isAnswer).map(e => e.id);
      let isRight = false;
      let fraction = 1;
      let totalRightAnswers = 0;
      if (isMulti) {
        const onlyWrongAnswer = options.filter(e => !e.isAnswer).map(e => e.id);
        isRight = onlyRightAnswer.every(e => selectedAns.includes(e));
        if (isRight) {
          isRight = !onlyWrongAnswer.some(e => selectedAns.includes(e));
        }
      } else if (isFillinBlank) {
        isRight = true;

        options.forEach((anotherItem, i) => {
          if(selectedAns && selectedAns[i] && anotherItem.map((a) => a.toLowerCase()).includes(selectedAns[i])) {
            totalRightAnswers += 1;
          }
        })

        fraction = totalRightAnswers / options.length;
      } else {
        isRight = onlyRightAnswer.includes(selectedAns);
      }
      if (isRight) {
        rightPoints = rightPoints + (item.question_score * fraction);
        if(isFillinBlank) {
          rightCount = rightCount + totalRightAnswers;
          wrongCount = wrongCount + (options.length - totalRightAnswers);
        } else {
          rightCount = rightCount + 1;
        }
      } else {
        wrongCount = wrongCount + 1;
      }
    }
  });
  return {
    type,
    rightPoints,
    totalCount,
    rightCount,
    wrongCount
  };
};

export const getRoutesBasedType = (type) => {
  let res = ''
  switch (type) {
    case questionType.singleChoice:
      res = 'singleChoice'
      break;
    case questionType.multiChoice:
      res = 'multipleChoice'
      break;
    case questionType.trueFalse:
      res = 'trueFalse'
      break;
    case questionType.fillBlanks:
      res = 'fillBlanks'
      break;

    default:
      break;
  }
  return res
}

export const getResizedImage = (file) => new Promise((resolve) => { Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0, blob => { resolve(blob); }, 'blob'); });
