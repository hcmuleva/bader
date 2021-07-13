import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
	deletePopTitle: {
		fontFamily: 'NunitoSans',
		fontSize: '20px',
		fontWeight: 600,
		color: '#000000'
	},
	baseContent: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	headerStyle: {
		color: '#999',
		fontSize: 14
	},
	contentHeaderStyle: {
		fontSize: 12,
		lineHeight: '1.35',
		fontWeight: 'bold',
		fontFamily: 'NunitoSans',
		textAlign: 'center',
		color: '#111945'
	},
	studentContentHeaderStyle: {
		fontSize: 10,
		lineHeight: '1.35',
		fontWeight: 'bold',
		fontFamily: 'NunitoSans',
		textAlign: 'center',
		color: '#111945'
	},
	studentOtherContentHeaderStyle: {
		fontSize: 10,
		lineHeight: '1.35',
		fontWeight: 'bold',
		fontFamily: 'NunitoSans',
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
	paddingRight: {
		borderRight: '1px solid #b1b1b1'
	},
	cardContent: {
		padding: '10px 14px'
	},
	title: {
		fontFamily: 'NunitoSans',
		fontSize: '16px',
		fontWeight: '600'
	},
	date: {
		fontFamily: 'NunitoSans',
		color: '#a79999',
		fontSize: '12px',
		lineHeight: '1.4'
	},
	gradeSectionTitle: {
		fontSize: 14,
		fontWeight: 600
	},
	topSpace: {
		paddingTop: '20px'
	},
	cardFooter: {
		paddingTop: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cardFooterTag: {
		fontFamily: 'NunitoSans',
		fontSize: '12px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '0 18px'
	},
	dateContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		paddingTop: 10
	},
	fixedBox: {
		width: '317px',
	},
	fixedBoxGrade: {
		// height: '208px',
	},
	gradeDeleteBtn: {
		fontFamily: 'NunitoSans',
		fontSize: '12px',
		color: '#ff0000',
		paddingRight: '10px',
		cursor: 'pointer',
		textDecoration: 'underline'
	},
});
