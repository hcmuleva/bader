import React from 'react'
import BackendService from '../../../services/BackendService';
import { Spin } from 'antd';
import { Table, Button, Space } from 'antd';
import moment from 'moment';
import {
    useQuery,
  
 
  } from 'react-query'
export function Testexecutionresult(props) {
    
const { isLoading, isError, data, error } = useQuery(['testExecutionResult'], BackendService.getresult)
if (isLoading) {
    return <span>Loading...
         <Spin size="large" />
    </span>
}

let mytableData=[]

/**
 * col name: feature, feature_status,scenario,scenario_status,logs, createdAt
 */
 const columns = [
    {
      title: 'feature',
      dataIndex: 'feature',
      key: 'feature',
      ellipsis: true,
    },
    {
      title: 'feature_status',
      dataIndex: 'feature_status',
      key: 'feature_status',
      ellipsis: true,
    },
    {
      title: 'scenario',
      dataIndex: 'scenario',
      key: 'scenario',
     
      ellipsis: true,
    },
    {
        title: 'scenario_status',
        dataIndex: 'scenario_status',
        key: 'scenario_status',
       
        ellipsis: true,
      },
      {
        title: 'logs',
        dataIndex: 'logs',
        key: 'logs',
       
        ellipsis: true,
      },
      {
        title: 'createdAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
        ellipsis: true
      },
  ];
data.data.result.map((res,index)=>{
    let myelm=JSON.parse(res)
    console.log("myelm",myelm)
    myelm.elements.map((scenario)=>{
        mytableData.push({"feature":myelm.name, "feature_status":myelm.status, "scenario":scenario.name, "scenario_status":scenario.status, createdAt: moment(myelm.createdAt).format('MMMM Do YYYY, h:mm:ss a'), logs:JSON.stringify(scenario.steps)})
    })
   
})
console.log("FinalRes",mytableData)
    
    return (
        <>
              <Table columns={columns} dataSource={mytableData} />
        </>
    )
}
