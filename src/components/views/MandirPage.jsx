import React, { useState } from 'react'
import { Mandircomponent } from '../mandir/MandirComponent'
import { Tag, Avatar, Tooltip, Modal } from 'antd';
import { Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MandirTable from '../mandir/MandirTable'
import axios from 'axios';
import { useQuery,useQueryClient } from 'react-query'
import MUIDataTable from "mui-datatables";
import { Button } from '@material-ui/core';
import { Row } from "simple-flexbox";
import { css } from "aphrodite";
import { Card, Tabs, Col } from 'antd';
import { Mandircreate } from './MandirCreate';
import { cardViewCssstyles } from '../mandir/cardViewStyle';


import MandirCreateDialog from '../mandir/MandirCreateDialog';
const { Text, Link } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;
export function MandirPage(props) {
    const queryClient = useQueryClient()
    const [tabVal, setTabVal] = useState(1)
    const [row, setRow] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [visible, setVisible] = useState(false)
    const colSpan = { xl: { span: 8 }, lg: { span: 12 }, md: { span: 12 }, sm: { span: 12 }, xs: { span: 24 }, };
    const toggleNew = () => {
        setVisible(true)
        console.log("Enable Dialog toshow this")
    }

    const showModal = (rowNum) => {
        setRow(rowNum)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const getAllVader = async () => {
        const { data } = await axios.get('http://localhost:5000/vader/all');
        return data.vaders;
    };

    const { isLoading, isError, data, error } = useQuery('vaderlist', getAllVader)
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    const karykarinicolumns = [
        { name: "name", label: "नाम" },
        { name: "pad", label: "पद" },
        { name: "mobile", label: "मोबाइल" },
        { name: "from", label: "कब से" },
        { name: "to", label: "कब तक" }
    ]
    const options = {
        download: false,
        print: false,
        filter: false,
        selectableRows: false,
        responsive: "stacked",
        onCellClick: (colData, cellMeta) => onClickHandler(colData, cellMeta)


    }
    const onClickHandler = (colData, cellMeta) => {
        console.log("DATA RECIEVED FROM TABLE ", colData, "  also META DATA ", cellMeta)
    }
    const mycolumns = [
        {
            name: "photo",
            label: "फोटो",
            options: {
                filter: false,
                customBodyRender: (value) => (
                    <Avatar src={value} size={64} icon={<UserOutlined />} />

                )
            }
        },
        { name: "mandirName", label: "बडेर नाम", },
        { name: "localityname", label: "कहा पर" },

        { name: "subdistname", label: "सिटी" },
        { name: "pincode", label: "पिनकोड" },
        { name: "isHostal", label: "रुकने की व्यवस्था" },
        {
            name: "Actions",
            label: "डिटेल्स",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <Button variant="outlined" color="secondary" onClick={() => {
                                console.log("Clicked and  tableMeta ", data[tableMeta.rowIndex], " Value ", value)
                                setRow(tableMeta.rowIndex)
                                showModal(tableMeta.rowIndex)
                            }}>
                                {`Details`}
                            </Button>
                            <Modal title={data[row].mandirName + "डिटेल्स - " + data[row].location} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="photo" src={data[row].photo} />}
                                >
                                    {data[row].isHostal ? <><Text type="success">रुकने के व्यवस्था है: हाँ</Text> <Text type="success"> कितने:{data[row].totalNumber}</Text></> : <Text type="danger">रुकने के व्यवस्था है: नहीं</Text>}
                                </Card>,
<p><b>कार्यकारिणी डिटेल्स</b></p>
                                <MUIDataTable title={"कार्यकारिणी डिटेल्स"} columns={karykarinicolumns} data={data[row].karykarini} options={options} />
                            </Modal>
                        </>
                    );
                }
            }
        }

    ]


    return (
        <>
            {/* <Tabs defaultActiveKey="1" >
                <TabPane tab="मंदिर डिटेल्स" key="1" onClick={() => { setTabVal(1) }}>
                    <MUIDataTable
                        columns={mycolumns}
                        data={data}
                        options={options}
                    />
                </TabPane>
                <TabPane tab="मंदिर फॉर्म" key="2" onClick={() => { setTabVal(2) }}> */}
                    <Row>
                        <Col {...colSpan} className="d-flex">
                            <Card className={css(cardViewCssstyles.addManageStyleGrade)} onClick={toggleNew}>
                                <div className={css(cardViewCssstyles.plusManageStyle)}>+</div>
                                <div className={css(cardViewCssstyles.contentBodyStyle)}>मंदिर की एंट्री </div>
                            </Card>
                        </Col>
                    </Row>

                    <MandirCreateDialog isEdit={false} visible={visible} setVisible={setVisible}  />
                        <br></br>
                                      <MUIDataTable
                        columns={mycolumns}
                        data={data}
                        options={options}
                    />
                {/* </TabPane>
                <TabPane tab="मंदिर डैशबोर्ड" key="3" onClick={() => { setTabVal(3) }}>
                    Content of Tab Pane 3
    </TabPane>
            </Tabs> */}

        </>
    )
}
export default MandirPage;