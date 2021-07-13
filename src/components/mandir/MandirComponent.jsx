
import { Card, Col } from "antd";
import { css } from "aphrodite";
import Axios from 'axios';
import useAxios, { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import React, { useState } from "react";
import { Row } from "simple-flexbox";
import { cardViewCssstyles } from '../mandir/cardViewStyle';
import MandirCreateDialog from "./MandirCreateDialog";
const axios = Axios.create({
  baseURL: 'http://127.0.0.1:5000'
})
const cache = new LRU({ max: 10 })

configure({ axios, cache })

export function Mandircomponent(props) {
  const [{ data, loading, error }, refetch] = useAxios('/vader/all')
    const[visible,setVisible]=useState(false)
    const [vaderdata,setVaderData]= useState([])
    const colSpan = {xl: { span: 8 },lg: { span: 12 },md: { span: 12 },sm: { span: 12 },xs: { span: 24 },};
      const toggleNew = () => {
        setVisible(true)
        console.log("Enable Dialog toshow this")
      }

   
    return (
        <>
         
        <Row>
      <Col {...colSpan} className="d-flex">
          <Card className={css(cardViewCssstyles.addManageStyleGrade)} onClick={toggleNew}>
            <div className={css(cardViewCssstyles.plusManageStyle)}>+</div>
            <div className={css(cardViewCssstyles.contentBodyStyle)}> Create New Temple </div>
          </Card>
        </Col>
      </Row>

      <MandirCreateDialog isEdit={false} visible={visible} setVisible={setVisible} />
      
      <Row className="pt-4" gutter={[{ xs: 8, sm: 16, md: 24, lg: 64 }, { xs: 8, sm: 16, md: 24, lg: 48 }]}>
    </Row>
      {/** 
       *  {vaderData.mandirName}-{vaderData.location}({vaderData.District})</span>}
      */}
  
  
        </>
    )
}
