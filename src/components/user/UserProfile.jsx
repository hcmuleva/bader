import React, { useState, useRef } from 'react';

// import { Tabs, message, Button } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { GET_MY_PROFILE } from '../../graphql/user/query/getMyProfile';
// import { UPDATE_MY_PROFILE } from '../../graphql/user/mutation/updateMyProfile';
// //import { GET_MY_GROUPS } from '../../graphql/group/query/getMyGroups';

// import { uploadS3File } from '../shared/s3/upload';
// import UserProfileForm from './profile-components/UserProfileForm';
// import GroupsTab from './profile-components/GroupsTab';
// import openNotificationWithIcon from './../shared/notification/index';
// import messages from './../../assets/enums/messages';

// import { getResizedImage } from './../shared/utils';
// import { deleteModel } from './../shared/deleteModel';

// const { TabPane } = Tabs;

// const UserProfile = () => {
//   const [currentActiveTab, setCurrentActiveTab] = useState('1');
//   const { loading: profileLoading, data: user } = useQuery(GET_MY_PROFILE);
//   const { loading: groupLoading, data: groups } = useQuery(GET_MY_GROUPS);

//   const fileInput = useRef();

//   const [updateMyProfile] = useMutation(UPDATE_MY_PROFILE, {
//     refetchQueries: [{ query: GET_MY_PROFILE }]
//   });

//   const handleRemoveUserProfile = () => {
//     deleteModel(null, () => (
//       updateMyProfile({
//         variables: { ...user.getMyProfile, user_name: user.getMyProfile.user_first_name, user_avatar: '' }
//       }).then(() => openNotificationWithIcon('success', messages.success.profile.profile))
//     ))
//   }

//   const userDetail = user ? user.getMyProfile : {};

//   return (
//     <div className="user-profile">
//       {!profileLoading && (
//         <React.Fragment>
//           <div>
//             <div className="user-profile__user-detail">
//               <div className="user-profile__image">
//                 {userDetail.user_avatar ?
//                   <div className="not-empty-div" onClick={() => fileInput.current.click()}>
//                     <img src={userDetail.user_avatar} alt="" />
//                   </div>
//                   :
//                   <div className="empty-div" onClick={() => fileInput.current.click()}>
//                     <PlusOutlined />
//                     <div className="pt-2">Upload</div>
//                   </div>
//                 }
//                 {userDetail.user_avatar && <Button className="mt-3" type="primary" onClick={handleRemoveUserProfile}>Remove Profile Pic</Button>}
//                 <input
//                   type="file"
//                   name="profile-upload"
//                   ref={fileInput}
//                   accept="image/*"
//                   onChange={async (e) => {
//                     if (e.target.files.length > 0) {
//                       const file = e.target.files[0];
//                       const fileName = file.name;

//                       getResizedImage(file)
//                         .then(async mediaFile => {
//                           const compressedFile = new File([mediaFile], fileName, { type: mediaFile.type });
//                           const fileUrl = await uploadS3File(compressedFile, fileName, process.env.REACT_APP_CONTAINERNAME_EDUCATION);

//                           updateMyProfile({
//                             variables: { ...user.getMyProfile, user_name: user.getMyProfile.user_first_name, user_avatar: fileUrl }
//                           }).then(() => {
//                             openNotificationWithIcon('success', messages.success.profile.profile);
//                           })
//                         })
//                         .catch(e => {
//                           console.log(e);
//                           message.error('Error in image compress')
//                         })
//                     }
//                   }}
//                 />
//               </div>
//               <div className="user-profile__tab-menu">
//                 <Tabs defaultActiveKey="1" onChange={key => setCurrentActiveTab(key)}>
//                   <TabPane tab="General Information" key="1">
//                     <div className="tab-menu-content-box">
//                       <UserProfileForm profileLoading={profileLoading} userDetail={userDetail} updateMyProfile={updateMyProfile} />
//                     </div>
//                   </TabPane>
//                   <TabPane tab="User Groups" key="2" />
//                   {/* <TabPane tab="Notification" key="3">
//                     Notification
//                   </TabPane>
//                   <TabPane tab="Privacy" key="4">
//                     Privacy
//                   </TabPane>
//                   <TabPane tab="Access Tokens" key="5">
//                     Access Tokens
//                   </TabPane> */}
//                 </Tabs>
//                 {currentActiveTab === '2' &&
//                   <GroupsTab groups={groups ? groups.getMyUserGroup || [] : []} isLoading={groupLoading} />
//                 }
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };
const UserProfile =()=>{
  return <div>UserProfile</div>
}
 export default UserProfile;
