import React,{useState} from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export function Profilecard(props) {
    
    const [notitlekey,setNotitlekey]=useState('पब्लिक')
    const mydata=JSON.parse(localStorage.getItem('user'))
   
  const tabListNoTitle = [
    {
      key: 'पब्लिक',
      tab: 'पब्लिक',
    },
    {
      key: 'प्राइवेट',
      tab: 'प्राइवेट',
    },
  ];

  const contentListNoTitle = {
    पब्लिक: <p>article content</p>,
    प्राइवेट: <p>app content</p>,

  };

    return (
        <>
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Aapki photo"
        src={mydata&&mydata.avatar}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >

<Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={notitlekey}
          onTabChange={key => {
            setNotitlekey(key)
          }}
        >
          {contentListNoTitle[notitlekey]}
        </Card>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
        </>
    )
}
