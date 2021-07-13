import { StyleSheet } from 'aphrodite';

export const subjectStyles = StyleSheet.create({
  subDeleteBtn: {
    fontFamily: 'NunitoSans',
    fontSize: '12px',
    color: '#ff0000',
    paddingRight: '10px',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  subViewDetails: {
    fontFamily: 'NunitoSans',
    fontSize: '12px',
    color: '#a79999',
    cursor: 'pointer',
    paddingLeft: '5px',
    textDecoration: 'underline'
  },
  contentHeaderStyle: {
		fontSize: 12,
		lineHeight: '1.35',
		fontWeight: 'bold',
		fontFamily: 'NunitoSans',
		textAlign: 'center',
		color: '#111945'
	},
	contentBodyStyle: {
		fontSize: 14,
		fontFamily: 'NunitoSans',
		lineHeight: '1.33',
		color: '#000000',
		textAlign: 'center',
		paddingTop: 8
	},
  mobilePadding: {
    '@media (max-width: 576px)': {
      paddingRight: 'unset !important'
    }
  },
  mobileWidth: {
    marginRight: '70px',
    marginBottom: '70px',
    boxShadow: '0 0 49px 0 rgba(0, 0, 0, 0.03)',
    '@media (max-width: 576px)': {
      width: '100% !important'
    }
  },
  fixedBox: {
    // width: '312px',
    height: '232px'
  },
  paddingRight: {
    borderRight: '1px solid #b1b1b1'
  },
  cardContent: {
    padding: '10px 18px'
  },
  title: {
    fontFamily: 'NunitoSans',
    fontSize: '16px',
    fontWeight: '600'
  },
  topSpace: {
    paddingTop: '8px'
  },
  extraDetail: {
    paddingLeft: 10
  }
});


export const personSelectionStyles = StyleSheet.create({
  personSelection: {
    padding: '20px 0'
  },
  filterBySpacing: {
    paddingLeft: '5px'
  },
  input: {
    fontFamily: 'SegoeUI',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.31',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  searchBar: {
    width: '237px'
  },
  filtersSpacing: {
    // paddingRight: '20px'
  },
  parent: {
    maxWidth: '223px',
    height: '40px',
    borderRadius: '104px',
    boxShadow: '0 0 9px 0 rgba(0, 0, 0, 0.03)',
    border: 'solid 1px #e9e9e9',
    padding: '0 4px',
    marginRight: 8,
    marginBottom: 8
  },
  name: {
    fontFamily: 'NunitoSans',
    fontSize: '14px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.36',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
    paddingLeft: '5px',
    paddingRight: '5px',
    wordBreak: 'break-all'
  }
});
