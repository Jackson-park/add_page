import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Typography, Container, Grid } from '@material-ui/core';

const styles = theme =>({
	div_root: {
		flex: 1,
		height: theme.spacing(25),
		backgroundColor: '#555555',
		textAlign: "center",
		color: 'white',
	},
	btn_btngroup: {
		marginTop: theme.spacing(5),	
	},
	Grid_info: {
		marginTop: theme.spacing(2),
	},
	div_center: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(3),
	},
	div_left: {
		flex: 1,
	},
})
class Footer extends React.Component{

	render() {
		const {classes} = this.props;
		return(
			<div className={classes.div_root}>
				<Container>
					<div>
						<ButtonGroup className={classes.btn_btngroup}
						width="50%" variant="text" color="inherit">
							<Button href="/Terms" component="a">이용약관</Button>
							<Button href="/policy/privacy" component="a">개인정보처리방침</Button>
							<Button href="" component="a">공지사항</Button>
							<Button href="/faq" component="a">FAQ/고객센터</Button>
							</ButtonGroup>
							</div>
							<Grid container
							direction="column"
							justify="center"
							alignItems="center" className={classes.Grid_info}>
								<div>
									<Typography>성결대학교 컴퓨터공학과 졸업작품(사다드림)</Typography>
									<Typography>개발자: 이동욱, 김환승, 박재성, 이지윤</Typography>
									<br></br>
									<small>Copyright &copy; 2020 Sadadream Inc. All rights reserved.</small>
									</div>
									</Grid>
									</Container>
									</div>
									);
								}
							}
export default withStyles(styles)(Footer);