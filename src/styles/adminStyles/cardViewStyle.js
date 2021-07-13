import { StyleSheet } from "aphrodite";

const cardViewCssstyles = StyleSheet.create({
  baseContent: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  },
  headerStyle: {
    color: "#d7d7d7",
    fontSize: 12
  },
  contentHeaderStyle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#3193be",
    textAlign: "center"
  },
  contentBodyStyle: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "NunitoSans",
    color: "#000000",
    lineHeight: "1.38"
  },
  addManageStyle: {
    ":before": {
      content: "",
      position: "absolute",
      border: "10px dashed red",
      top: "-8px",
      bottom: "-8px",
      left: "-8px",

      right: "-8px"
    },
    height: "208px",
    width: "314px",
    marginRight: "70px",
    marginBottom: "70px",
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#cecece",
    boxShadow: "unset",
    cursor: "pointer",
    borderRadius: ".28571429rem",
    "@media (max-width: 576px)": {
      width: "100% !important"
    }
  },
  addManageStyleGrade: {
    ":before": {
      content: "",
      position: "absolute",
      border: "10px dashed red",
      top: "-8px",
      bottom: "-8px",
      left: "-8px",

      right: "-8px"
    },
    // height: "232px",
    flex: 1,
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#cecece",
    boxShadow: "unset",
    cursor: "pointer",
  },
  addNoticeStyle: {
    height: "273.1px",
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#cecece",
    boxShadow: "unset",
    cursor: "pointer",
    borderRadius: ".28571429rem",
    "@media (max-width: 576px)": {
      width: "100% !important"
    }
  },
  addGroupStyle: {
    height: "276.1px",
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#cecece",
    boxShadow: "unset",
    cursor: "pointer",
    borderRadius: ".28571429rem",
    "@media (max-width: 576px)": {
      width: "100% !important"
    }
  },
  plusManageStyle: {
    fontSize: 65,
    color: "#cecece",
    textAlign: "center",
    lineHeight: "100px"
  },
  plusNoticeStyle: {
    fontSize: 100,
    color: "#cecece",
    textAlign: "center",
    lineHeight: "155px"
  },
  mobilePadding: {
    "@media (max-width: 576px)": {
      paddingRight: "unset !important"
    }
  },
  customModal: {
    width: "80%",
    margin: "auto"
  },
  boxWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 16
  },
  cardBoxAliging: {
    display: "flex",
    flexWrap: "wrap",
  },
  mobileView: {
    marginTop: 30,
    '@media (max-width: 768px)': {

    },
    '@media (max-width: 576px)': {
      display: 'block',
    }
  },
});

export { cardViewCssstyles };
