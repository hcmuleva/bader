import React from 'react';

import { Card,Row, Col, Button, Avatar, Tooltip } from 'antd';
import { ArrowRightOutlined} from '@ant-design/icons';
import { Column } from 'simple-flexbox';

import { css } from 'aphrodite';
import { subjectStyles } from './subjectStyles';
import { styles } from './style';

const colSpan = {
  xl: { span: 8 },
  lg: { span: 12 },
  md: { span: 12 },
  sm: { span: 12 },
  xs: { span: 24 },
}

const VaderCard = ({ vaderData }) => {
  console.log("\n\nData ".vaderData)
  return (
    <Col {...colSpan}>
      <Card
        size="small"
        className={css(subjectStyles.fixedBox) + ' student-subject-list-card'}
        title={<span className={css(subjectStyles.title)} >{vaderData.mandirName}-{vaderData.location}({vaderData.District})</span>}
      >
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Column className={css(styles.studentOtherContentHeaderStyle)}>{vaderData.City}</Column>
      
          <Avatar.Group className="mt-2" maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar size={40} src={vaderData.photo} />
          </Avatar.Group>

          <Row>
         
          </Row>

        </div>
        <div>
          <Row>
          <div className="d-flex justify-content-around">
            {/* <div>
              <Column className={css(styles.studentContentHeaderStyle)}>धर्मशाला</Column>
              <Column className={css(styles.studentContentHeaderStyle)}>{mandirData.isHostal}</Column>
            </div>
            <div>
              <Column className={css(styles.studentContentHeaderStyle)}>रुकने का इंतज़ाम</Column>
              <Column className={css(styles.studentContentHeaderStyle)}>{mandirData.isHostal}</Column>
            </div>
            <div>
              <Column className={css(styles.studentContentHeaderStyle)}>खाने का इंतज़ाम</Column>
              <Column className={css(styles.studentContentHeaderStyle)}>{mandirData.isFood}</Column>
            </div>
            <div>
              <Column className={css(styles.studentContentHeaderStyle)}>कुल कितने</Column>
              <Column className={css(styles.studentContentHeaderStyle)}>{mandirData.totalNumber}</Column>
            </div> */}
          </div>
          </Row>
          <div className="d-flex justify-content-end" style={{ paddingTop: 12 }}>
            <Button
              type="primary"
              onClick={
                () => <div><h1>Work under progress</h1></div>
                //handleChangeDetailView(mandirData)
              }
            >
              View Details <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default VaderCard;
