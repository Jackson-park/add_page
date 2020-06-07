import React from 'react';
import { Container, Paper, Typography, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import PaymentTab from './PaymentTab.js';
const styles = theme =>({
	div_root: {
		padding: theme.spacing(10),
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],
		fontFamily: "Jalnan"
	},
	Paper_title:{
		height: 'auto',
		padding: theme.spacing(3),
	},
	div_paymentview:{
		width: 'auto',
		height: 'auto',
		padding: theme.spacing(3),
	},
	  divider: {
		margin: theme.spacing(1, 0),
	  },
})

class Paymentdetails extends React.Component {

render() {

	const {classes}= this.props;

	return (
		<React.Fragment>
		<CssBaseline />
		<div className={classes.div_root}>
		<Container fixed>
		<Grid>
			<Typography variant="subtitle1">1:1구매요청/결제내역</Typography>
			</Grid>
			<Paper className={classes.Paper_title} fullWidth>
				<h2>1:1 구매요청/결제 내역 (0)</h2>
				<Divider className={classes.divider} />
				<PaymentTab></PaymentTab>
			</Paper>
			</Container>
		</div>
		</React.Fragment>
		)
	}
}
export default withStyles(styles)(Paymentdetails);