import React, { useState, useEffect } from "react";
import { Card,  Col } from 'antd';
import { Input, Button, Menu, Row, Table, Tag, Drawer, Select, Typography, Empty } from 'antd';
import { FilterOutlined, AppstoreOutlined, MenuOutlined, SearchOutlined, SortAscendingOutlined, SortDescendingOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Row as SimpleFlexRow, Column } from 'simple-flexbox';
import { css } from "aphrodite";
import { gradeCommonStyle } from '../mandir/gradeCommonStyle';
import Sortby from './../atoms/SortbyComp';
import { myAssignedSubjectColumn } from './../../assets/data/row-table';
import { grade_number, section } from './../../assets/enums/common';
import { useHistory } from 'react-router-dom';

import { cardViewCssstyles } from '../mandir/cardViewStyle';


import MandirCard from "../mandir/MandirCard"
import MandirCreateDialog from "../mandir/MandirCreateDialog";

const { Option } = Select;
const { Title } = Typography;

const initialFilters = { grade: [], section: [] };
const MandirPage = () => {
  const [visible, setVisible] = useState(false);
  const [changeView, setChangeView] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [myAssignedCourses, setMyAssignedCourses] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState(undefined);
  const [sortOrder, setSortOrder] = useState(undefined);

  const history = useHistory();

  const handleChangeSortBy = name => {
    setSortBy(name);
    setSortOrder(sortOrder => !sortOrder ? 'asc' : sortOrder === 'asc' ? 'desc' : 'asc');
  }

  const handleChangeFilter = (values, type) => {
    setFilters(filters => ({
      ...filters,
      [type]: values
    }))
  }

  const handleRemoveFilter = (removedValue, type) => e => {
    e.preventDefault();
    let newFilters = { ...filters };
    if (type === 'grade') {
      newFilters = {
        ...newFilters,
        grade: newFilters.grade.filter(x => x !== removedValue)
      };
    } else if (type === 'section') {
      newFilters = {
        ...newFilters,
        section: newFilters.section.filter(x => x !== removedValue)
      };
    } else if (type === 'clearall') {
      newFilters = initialFilters;
    }

    setFilters(newFilters);
  }

  const handleChangeDetailView = (subjectData) => {
    history.push(`/student/view/${subjectData.course_id}`)
  }

  const handleChangeView = () => {
    setChangeView(!changeView);
  };

  const menu = (
    <Menu>
      <Menu.Item className="w-100 h-100 cursor-pointer" onClick={() => handleChangeSortBy('course_name')}>
        Name {sortBy === 'course_name' ? sortOrder === 'asc' ? <SortAscendingOutlined /> : sortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
      </Menu.Item>
      <Menu.Item className="w-100 h-100 cursor-pointer" onClick={() => handleChangeSortBy('grade_number')}>
        Grade {sortBy === 'grade_number' ? sortOrder === 'asc' ? <SortAscendingOutlined /> : sortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
      </Menu.Item>
      <Menu.Item className="w-100 h-100 cursor-pointer" onClick={() => handleChangeSortBy('grade_section')}>
        Section {sortBy === 'grade_section' ? sortOrder === 'asc' ? <SortAscendingOutlined /> : sortOrder === 'desc' ? <SortDescendingOutlined /> : '' : ''}
      </Menu.Item>
    </Menu>
  );

  const columns = [
    ...myAssignedSubjectColumn,
    {
      title: 'ACTIONS',
      align: 'center',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => handleChangeDetailView(record)}
        >
          View Details <ArrowRightOutlined />
        </Button>
      )
    }
  ]

  const colSpan = {
    xl: { span: 8 },
    lg: { span: 12 },
    md: { span: 12 },
    sm: { span: 12 },
    xs: { span: 24 },
  };
  const toggleNew = () => {
    setVisible(true)
    console.log("Enable Dialog toshow this")
    //This need to be part of property of this function
  }
  const courseDataList = [
    {
      "Grade": { "grade_number": "Grd1", "grade_section": "Sec1" },
      "course_name": "SimpleCourse",
      "course_id": "1",
      "notes_count": 1,
      "quiz_count": 2,
      "discussion_count": 3,
      "assignment_count": 4,
      "Assigned_Course": [{
        "User": {
          "user_id": 1,
          "user_name": "Harish M",
          "user_avatar": "https://gyanstreamlms.s3-ap-south-1.amazonaws.com/education/sgM1f2QC89nADFWZda5EpA.jpeg"
        }
      }]
    },

    {
      "Grade": { "grade_number": "Grd1", "grade_section": "Sec1" },
      "course_name": "SimpleCourse",
      "course_id": "2",
      "notes_count": 1,
      "quiz_count": 2,
      "discussion_count": 3,
      "assignment_count": 4,
      "Assigned_Course": [{
        "User": {
          "user_id": 1,
          "user_name": "Harish M",
          "user_avatar": "https://gyanstreamlms.s3-ap-south-1.amazonaws.com/education/sgM1f2QC89nADFWZda5EpA.jpeg"
        }
      }]
    }, {
      "Grade": { "grade_number": "Grd1", "grade_section": "Sec1" },
      "course_name": "SimpleCourse",
      "course_id": "3",
      "notes_count": 1,
      "quiz_count": 2,
      "discussion_count": 3,
      "assignment_count": 4,
      "Assigned_Course": [{
        "User": {
          "user_id": 1,
          "user_name": "Harish M",
          "user_avatar": "https://gyanstreamlms.s3-ap-south-1.amazonaws.com/education/sgM1f2QC89nADFWZda5EpA.jpeg"
        }
      }],

    }, {
      "Grade": { "grade_number": "Grd1", "grade_section": "Sec1" },
      "course_name": "SimpleCourse",
      "course_id": "4",
      "notes_count": 1,
      "quiz_count": 2,
      "discussion_count": 3,
      "assignment_count": 4,
      "Assigned_Course": [{
        "User": {
          "user_id": 1,
          "user_name": "Harish M",
          "user_avatar": "https://gyanstreamlms.s3-ap-south-1.amazonaws.com/education/sgM1f2QC89nADFWZda5EpA.jpeg"
        }
      }]
    }
  ]


  return (

    <div>
      <SimpleFlexRow
        alignItems="center"
        justifyContent="space-between"
        className="sticky-search-bar border-bottom"
      >
        <Input
          style={{ maxWidth: 250 }}
          placeholder={`Search Subject`}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          suffix={<SearchOutlined />}
        />
        <SimpleFlexRow
          alignItems="center"
          justifyContent="space-between"
        >
          {changeView &&
            <Column alignItems="center" className="border-right">
              <Sortby menu={menu} />
            </Column>
          }
          <Column
            alignItems="center"
            className={`${css(gradeCommonStyle.filterBySpacing)} border-right`}
          >
            <Button type="primary" icon={<FilterOutlined />} onClick={() => setIsFilterOpen(toggle => !toggle)} ghost={!isFilterOpen}>
              Filters
          </Button>
          </Column>
          <Column
            alignItems="center"
            className={css(gradeCommonStyle.filterBySpacing)}
          >
            {changeView ?
              <Button
                type="primary"
                icon={<AppstoreOutlined style={{ fontSize: 26 }} />}
                onClick={handleChangeView}
                ghost
              />
              :
              <Button
                type="primary"
                icon={<MenuOutlined style={{ fontSize: 26 }} />}
                onClick={handleChangeView}
                ghost
              />
            }
          </Column>
        </SimpleFlexRow>
      </SimpleFlexRow>

      {(filters.grade.length > 0 || filters.section.length > 0 || filters.status !== undefined) &&
        <div className="grade-filter__active-filters">
          {filters.grade.map(tag => {
            return (
              <Tag
                className="site-tag-plus"
                key={tag}
                closable
                onClose={handleRemoveFilter(tag, 'grade')}
              >
                {tag}
              </Tag>
            )
          })}
          {filters.section.map(tag => {
            return (
              <Tag
                className="site-tag-plus"
                key={tag}
                closable
                onClose={handleRemoveFilter(tag, 'section')}
              >
                {tag}
              </Tag>
            )
          })}
          <Tag className="site-tag-plus clear-all-filters">
            <span onClick={() => setFilters(initialFilters)}>Clear Filters</span>
          </Tag>
        </div>
      }

      <div className="grade-filter-container border-top-0 mt-0" style={{ height: isFilterOpen ? 150 : 0, border: isFilterOpen ? '1px solid #e5e5e5' : 0 }}>
        <Drawer
          visible={isFilterOpen}
          placement="top"
          onClose={setIsFilterOpen}
          getContainer={false}
          style={{ position: 'absolute' }}
          closable={false}
          height={150}
        >
          <div className="grade-filter-container__filter">
            <div>
              <Title level={4}>Grades</Title>
              <Select
                mode="multiple"
                style={{ minWidth: 256 }}
                placeholder="Please select"
                value={filters.grade}
                onChange={values => handleChangeFilter(values, 'grade')}
              >
                {grade_number.map(grade => <Option key={grade}>{grade}</Option>)}
              </Select>
            </div>

            <div style={{ marginLeft: 16 }}>
              <Title level={4}>Sections</Title>
              <Select
                mode="multiple"
                style={{ minWidth: 256 }}
                placeholder="Please select"
                value={filters.section}
                onChange={values => handleChangeFilter(values, 'section')}
              >
                {section.map(x => <Option key={x}>{x}</Option>)}
              </Select>
            </div>
          </div>
        </Drawer>

      </div>
      <Row>
      <Col {...colSpan} className="d-flex">
          <Card className={css(cardViewCssstyles.addManageStyleGrade)} onClick={toggleNew}>
            <div className={css(cardViewCssstyles.plusManageStyle)}>+</div>
            <div className={css(cardViewCssstyles.contentBodyStyle)}> Create New Subject </div>
          </Card>
        </Col>
      </Row>
      {visible?<MandirCreateDialog isEdit={false} visible={visible} setVisible={setVisible} grade_id={null} gradeData ={null}/>:""}
      {changeView ?
        <Row className="pt-3" gutter={[{ xs: 8, sm: 16, md: 24, lg: 64 }, { xs: 8, sm: 16, md: 24, lg: 48 }]}>

          {
            courseDataList.map((courseData) => {
              return <MandirCard key={courseData.course_id} courseData={courseData} handleChangeDetailView={handleChangeDetailView} />

            })}
        </Row>
        :
        <Table className="mt-3" columns={columns} dataSource={myAssignedCourses} rowKey="course_id" pagination={false} />
      }
    </div>
  );
}



export default MandirPage;
