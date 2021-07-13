import {StyleSheet} from "aphrodite";

const gradeCommonStyle=StyleSheet.create({
  baseContent: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  contentHeaderStyle: {
    fontSize: 15,
    fontWeight: 600,
    color: '#3193be',
    textAlign: 'center'
  },
  contentBodyStyle: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center'
  },
  parent: {
    width: '100%',
    overflow: 'auto'
  },
  mobileView: {
    marginTop: 30,
    '@media (max-width: 768px)': {

    },
    '@media (max-width: 576px)': {
      display: 'block',
    }
  },
  mobileSpacing: {
    '@media (max-width: 768px)': {
      marginTop: '20px',
      justifyContent: 'flex-start'
    },
    '@media (max-width: 576px)': {
      marginTop: '20px',
      justifyContent: 'space-between'
    }
  },
  addNewClass: {
    backgroundColor: 'transparent',
    color: '#000000',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#cecece',
    boxShadow: 'unset',
    cursor: 'pointer',
    padding: "2px 15px",
    marginLeft: "10px",
    borderRadius: '.28571429rem',
    '>span': {
      color: '#cecece',
    }
  },
  mobileHide: {
    paddingLeft: "7px",
    fontFamily: "SegoeUI",
    fontSize: "16px",
    color: "#000000",
    '@media (max-width: 576px)': {
      display: 'none'
    }
  },
  filterBySpacing: {
    paddingLeft: "5px"
  },
  searchBar: {
    width: "237px",
  },
  input: {
    fontFamily: "SegoeUI",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.31",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#b7b7b7"
  },
  plusIcon: {
    fontFamily: "SegoeUI",
    fontSize: "16px",
    fontWeight: "300",
    color: "#cecece"
  }

});
export {gradeCommonStyle}