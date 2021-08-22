import React from 'react'
import { Tabs,
} from 'antd';

export function Environmentsettings(props) {
    
    const { TabPane } = Tabs;

    return (
        <>
          
            <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="TestData" key="1">
              User Can select test data from template or create own data and update at here
              also can provide input data format e.g. XLSX, sqlite, json, xml etc...

            </TabPane>
            <TabPane tab="RunSettings" key="2">
              User can set preferred env, threads etc 
            </TabPane>
            <TabPane tab="ReportSettings" key="3">
              Report format e.g. HTML, JSON, XML etc... 
              Report location 
              Analytics location
            </TabPane>
            <TabPane tab="SCM" key="4">
              Need to provide SCM connection details 
              Branch detail 
            </TabPane>
            <TabPane tab="Container" key="5">
              Need to provide Docker image prefrence, name, templates etc..
            </TabPane>
          </Tabs>
        </div>
        </>
    )
}
