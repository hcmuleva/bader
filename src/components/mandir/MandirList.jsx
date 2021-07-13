
import { Row } from 'antd';
import React ,{useState} from "react";
import MandirCard from "./MandirCard";


export function Mandirlist(props) {
  

    const colSpan = {
      xl: { span: 8 },
      lg: { span: 12 },
      md: { span: 12 },
      sm: { span: 12 },
      xs: { span: 24 },
    };
    
    const [mandirDataList,setMandirDataList]=useState([{   "uid":"11",
    "mandirName":"आईमाता मंदिर",
    "District":"Bangalore",
    "City":"Bangalore",
    "location": "बालेपेठ",
    "isHostal":"हाँ",
    "isFood": "नहीं",
    "totalNumber":"250"

}])
const address={
  "location":"aa",
  "districtname":"dummy",
  "subdistname":"Rajpur",
  
}

console.log("DATA ", data)
const karykarini={}
const hostel={}
    return (
  
      <div>
           <div>
      <button onClick={refetch}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
          <Row className="pt-3" gutter={[{ xs: 8, sm: 16, md: 24, lg: 64 }, { xs: 8, sm: 16, md: 24, lg: 48 }]}>
            <h1>Hello</h1>
            {/* {
              mandirDataList.map((mandirData) => {
                return <MandirCard key={mandirData.uid} mandirData={mandirData} address={address} hostel={hostel}  karykarini={karykarini}/>
  
              })} */}
          </Row>
         
      </div>
      )
}
