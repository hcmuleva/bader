import React,{useEffect} from 'react'
import 'antd/dist/antd.css';
import { Button, Radio, Icon,Row } from 'antd';
import { Select } from 'antd';

import BackendService from '../../../services/BackendService';

import TestResults from './TestResults';

import { Testexecutionresult } from './TestExecutionResult';
const testData ={
    "SERVER": {
        "IT": [{
            "suite_name": "server_it",
            "tc_list": ["testcase_server_it_1", "testcase_server_it_2"]
        }],
        "FT": [{
            "suite_name": "server_ft",
            "tc_list": ["testcase_server_it_1", "testcase_server_it_2"]
        }],
        "ALLSUITES":["server_it","server_ft"],
        "ALLTC": ["testcase_server_ft_1", "testcase_server_ft_2", "testcase_server_it_1", "testcase_server_it_2"]
    },
    "WINDOWS": {
        "E2E": [{
            "suite_name": "client_e2e",
            "tc_list": ["testcase_client_e2e_1", "testcase_client_e2e_2"]
        }],
        "IT": [{
            "suite_name": "client_it",
            "tc_list": ["testcase_client_it_1", "testcase_client_it_2"]
        }],
        "FT": [{
            "suite_name": "client_ft",
            "tc_list": ["testcase_client_ft_1", "testcase_client_ft_2"]
        }],
        "ALLSUITES":["client_e2e","client_it","client_ft"],
        "ALLTC": ["testcase_client_ft_1", "testcase_client_ft_2", "testcase_client_it_1", "testcase_client_it_2","testcase_client_e2e_1", "testcase_client_e2e_2"]
    

    },
    "MOBILE":{
        "APIUM_FT":[],
        "APIUM_IT":[]
    },
    "UNIX":{
        "UNIX_FT":[],
        "UNIX_IT":[]
    }


}
export function TextExecution(props) {

    const { Option } = Select;
    const children = [];
   
    const hardcodedJsonData={
        "server_it": {
            "suite_name": "server_it",
            "suite_path": "Server/IT"
        },
        "server_ft": {
            "suite_name": "server_ft",
            "suite_path": "Server/FT"
        },
        "client_it": {
            "suite_name": "client_it",
            "suite_path": "Client/Windows/IT"
        },
        "client_ft": {
            "suite_name": "client_ft_ft",
            "suite_path": "Client/Windows/FT"
        }
    }
    
   
    
    const [group, setGroup] = React.useState(Object.keys(testData));
    const [groupval,setGroupval] =React.useState(group[0])
    const [target, setTarget] = React.useState(Object.keys(testData[group[0]]));
    const [targetval,setTargetval]=React.useState(target[0])
    const [suiteselection,setSuiteselection]=React.useState([])
    
    /**
     * Initial selection list for tc or suite annotation 
     *  Group=""
     *  TARGET =""
     *  Now update values reading data  
     */
     
    
     let my_initial_selection_list =testData[group[0]]
 
    const [clientTarget,setClientTarget]=React.useState()
    const [selectedGroup,setSelectedGroup]= React.useState('SERVER')
    
    const [selectedAnnotationsType,setSelectedAnnotationsType]=React.useState('SUITES')
    const [annotationList,setAnnotationList]=React.useState();
    const [imageName,setImageName]=React.useState('Behave')
    const [tcselected,setTcselected]=React.useState([])
    const [runnerData,setRunnerData]=React.useState({})
    useEffect(()=>{
        let mydata=[]
        mydata=testData[groupval][targetval]
       
            for(let i=0;i<mydata.length;i++){
               setSuiteselection([mydata[i].suite_name,...mydata[i].tc_list])
            }
       
        
    },[target,targetval])
    
     
    function handleChange(value) {
        setTcselected(value)   
    }
    const handleGroupChange = value => {
        setTarget(Object.keys(testData[value]));
        setGroupval(value)

    };
    
    const getImageNames=()=>{
        return ['Behave','Linux','Ubunut','Windows']
    }
    const ontargetChange = value => {
        setTargetval(value);
        

    };
    const onClientTargetChange=value=>{
        setClientTarget(value)
    }

  
    function getTargetType(group_name){
        const mytraget_data= Object.keys(testData[group_name])
        return mytraget_data
    }
   
   
    console.log("TARGET SELECTED VAL",targetval)
    

    return (
        <>

          <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '2vh'
      }}
    >
        </div>
        <div
      style={{
       
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      
         
            <Select defaultValue={group[0]} style={{ width: 120 }}  placeholder="selectGroup" onChange={handleGroupChange}>
                {group.map(grp => (
                    <Option key={grp}>{grp}</Option>
                ))}
            </Select>
            <Select style={{ width: 120 }} placeholder="selectTarget" value={targetval} onChange={ontargetChange}>
                {target.map(tgt => (
                    <Option key={tgt}>{tgt}</Option>
                ))}
            </Select>
           


            <Select
                mode="multiple"
                allowClear
                style={{ width: 120 }}
                placeholder="Please select"
            
                onChange={handleChange}
            >
                 {suiteselection.map(suitechoice => (
                    <Option key={suitechoice}>{suitechoice}</Option>
                ))} 

            </Select>
            <Select style={{ width: 120 }} value={imageName} onChange={(value)=>{
                setImageName(value)
            }}>
                {getImageNames().map(dockerImage => (
                    <Option key={dockerImage}>{dockerImage}</Option>
                ))}
            </Select>

        <Button type="primary" style={{ width: 100, hight: 60 }} size={'middle'} onClick={
            ()=>{
                console.log("going to run test for ",tcselected)
                let data=[]
                
                for (let i=0;i<tcselected.length ;i++) {
                    data.push(hardcodedJsonData[tcselected[i]])
                  }
                console.log("HERE IF FINAL LIST ",data)
                let requestdata=[{"suites":data,"user_id":"harish_muleva1"}]
                BackendService.runTestCase(requestdata)

            }
        }>Run</Button>
        <Testexecutionresult/>
 </div>
            
        </>
    )
}
