import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
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
		fontFamily: 'NunitoSans',
		lineHeight: '1.33',
		color: '#000000',
		textAlign: 'center'
	},
	contentBodyStyle: {
		fontSize: 20,
		lineHeight: '1.35',
		fontWeight: 'bold',
		fontFamily: 'NunitoSans',
		textAlign: 'center',
		color: '#111945'
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
		width: '312px',
		height: '208px'
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
		paddingTop: '20px'
	}
});
