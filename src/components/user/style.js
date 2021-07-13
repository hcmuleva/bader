import { StyleSheet } from 'aphrodite';

export const userStyles = StyleSheet.create({
	customWhite: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderRadius: 3,
		borderStyle: 'solid',
		borderColor: 'black',
		color: 'black',
		padding: '5px 15px'
	},
	customBlack: {
		backgroundColor: 'black',
		borderWidth: 1,
		borderRadius: 3,
		borderStyle: 'solid',
		borderColor: 'black',
		color: 'white',
		padding: '5px 15px'
	},
	headingStyle: {
		fontSize: 36,
		'@media (max-width: 576px)': {
			fontSize: 25
		}
	},
	uploadImage: {
		marginTop: '30px',
		'@media (max-width: 576px)': {
			display: 'block'
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
		padding: '2px 15px',
		marginLeft: '10px',
		borderRadius: '.28571429rem',
		'>span': {
			color: '#cecece'
		}
	},
	mobileHide: {
		paddingLeft: '7px',
		fontFamily: 'SegoeUI',
		fontSize: '16px',
		color: '#000000',
		'@media (max-width: 576px)': {
			display: 'none'
		}
	},
	mobileSpacing: {
		'@media (max-width: 768px)': {
			marginTop: '20px',
			justifyContent: 'flex-start'
		},
		'@media (max-width: 576px)': {
			marginTop: '20px',
			justifyContent: 'center'
		}
	},
	mobileView: {
		'@media (max-width: 768px)': {},
		'@media (max-width: 576px)': {
			display: 'block'
		}
	},
	customModal: {
		width: '70%',
		margin: 'auto',
		'@media (max-width: 576px)': {
			width: '100%'
		}
	},
	filterBySpacing: {
		paddingLeft: '5px'
	},
	plusIcon: {
		fontFamily: 'SegoeUI',
		fontSize: '16px',
		fontWeight: '300',
		color: '#cecece'
	},
	rectangle: {
		width: '179px',
		height: '125px',
		borderRadius: '6px',
		boxShadow: '0 0 49px 0 rgba(0, 0, 0, 0.03)',
		backgroundColor: '#ffffff',
		margin: '0 50px',
		fontFamily: 'SegoeUI',
		fontSize: '16px',
		fontWeight: 900,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: '1px dashed',
	},
	dragger: {
		marginTop: '15px',
		height: '300px',
		borderRadius: '6px',
		borderColor: 'black'
	},
	draggerTitle: {
		fontFamily: 'SegoeUI',
		color: '#c1c1c1',
		fontSize: '19px'
	},
	select: {
		width: '100%'
	},
	formSectionTitle: {
		fontFamily: 'NunitoSans',
		fontSize: '16px',
		textTransform: 'uppercase',
		color: '#4d69f0',
		paddingBottom: '15px'
	},
	textarea: {
		width: '100%'
	}
});
