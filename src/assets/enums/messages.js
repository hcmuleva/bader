const messages = {
  success: {
    class: {
      create: 'Class created successfully',
      update: 'Class updated successfully',
      delete: 'Class deleted successfully',
    },
    subject: {
      create: 'Subject created successfully',
      update: 'Subject updated successfully',
      delete: 'Subject deleted successfully',
      cloneToken: 'Subject Clone token generated successfully',
      cloned: 'Subject cloned successfully',
    },
    subjectUsers: {
      student: 'Students list updated',
      teacher: 'Teachers list updated',
    },
    user: {
      student: {
        create: 'Student created successfully',
        update: 'Student updated successfully',
        delete: 'Student deleted successfully',
        bulkUpload: 'Bulk Student User created successfully',
        inviteEmail: 'User Invitation send to following user',
        reinvite: 'Student reinvited successfully',
        statusUpdate: 'Student status updated successfully',
      },
      teacher: {
        create: 'Teacher created successfully',
        update: 'Teacher updated successfully',
        delete: 'Teacher deleted successfully',
        bulkUpload: 'Bulk Teacher User created successfully',
        inviteEmail: 'User Invitation send to following user',
        reinvite: 'Teacher reinvited successfully',
        statusUpdate: 'Teacher status updated successfully',
      },
      parent: {
        create: 'Parent created successfully',
        update: 'Parent updated successfully',
        delete: 'Parent deleted successfully',
        bulkUpload: 'Bulk Parent User created successfully',
        inviteEmail: 'User Invitation send to following user',
        reinvite: 'Parent reinvited successfully',
        statusUpdate: 'Parent status updated successfully',
      },
      admin: {
        create: 'Admin created successfully',
        update: 'Admin updated successfully',
        delete: 'Admin deleted successfully',
        bulkUpload: 'Bulk Admin User created successfully',
        inviteEmail: 'User Invitation send to following user',
        reinvite: 'Admin reinvited successfully',
        statusUpdate: 'Admin status updated successfully',
      },
      group: {
        create: 'Group created successfully',
        update: 'Group updated successfully',
        delete: 'Group deleted successfully',
        membersListUpdate: 'Members list updated successfully'
      }
    },
    teacherMySubjects: {
      syllabus: 'Syllabus updated successfully',
      content: {
        assignment: {
          create: 'Assignment created successfully',
          update: 'Assignment updated successfully',
          delete: 'Assignment deleted successfully',
          score: 'Score updated successfully'
        },
        discussion: {
          create: 'Discussion created successfully',
          update: 'Discussion updated successfully',
          delete: 'Discussion deleted successfully'
        },
        folder: {
          create: 'Folder created successfully',
          update: 'Folder updated successfully',
          delete: 'Folder deleted successfully'
        },
        media: {
          create: 'Media added successfully',
          update: 'Media updated successfully',
          delete: 'Media deleted successfully'
        },
        page: {
          create: 'Page created successfully',
          update: 'Page updated successfully',
          delete: 'Page deleted successfully'
        },
        quiz: {
          create: 'Quiz created successfully',
          update: 'Quiz updated successfully',
          delete: 'Quiz deleted successfully'
        }
      }
    },
    studentMySubjects: {
      bookmark: {
        create: 'Bookmarked successfully',
        delete: 'Bookmark removed'
      },
      notes: {
        create: 'Note created successfully',
        update: 'Note updated successfully',
        delete: 'Note removed successfully'
      },
    },
    discussion: {
      comment: {
        delete: 'Comment deleted successfully'
      }
    },
    noticeBoard: {
      create: 'Notice created successfully',
      update: 'Notice updated successfully',
      delete: 'Notice deleted successfully',
    },
    school: {
      profile: 'School logo updated successfully',
      update: 'School details updated successfully',
    },
    feedback: {
      create: 'Feedback submitted successfully',
    },
    profile: {
      profile: 'Profile picture updated successfully',
      update: 'Profile details updated successfully',
    },
    quiz:{
      trueFalseCreate: 'Question created successfully',
      trueFalseEdit: 'Question edited successfully',
      resultSubmit: "Result successfully submitted"
    },
    register: "You have been registered successfully, You can login now to continue.",
    calendar: {
      create: 'Calendar event created successfully',
      update: 'Calendar event updated successfully',
      delete: 'Calendar event deleted successfully',
    }
  },
  error: {
    user: {
      bulkUpload: 'Some Error Occured',
      inviteEmail: 'Invalid Emails',
    },
    noticeBoard: {
      fileUpload: 'Error while uploading file to azure',
    },
    quiz:{
      common:{
        answer:'Please select answer',
        minOption:'Please Add minimum two options',
        fillBlanksOptionAtleastOne:'Please enter Atleast one Blank',
        fillBlanksOption:'Please enter options correctly',
      }
    },
    domainCheck: "Domain not available, You need to register."
  },
  warning: {
    user: {
      inviteEmail: 'Existing Users',
    }
  },
  info: {
    user: {
      inviteEmail: 'Invitation Resent',
    }
  }
}

export default messages;