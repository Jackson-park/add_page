import React from 'react';
import { Container, Paper, Typography, Grid, Link } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
const styles = theme =>({
	div_root: {
		flex: 1,
		backgroundColor: theme.palette.grey[200],
	},
	Paper_paper:{
		width: '100%',
		height: 'auto',
		marginTop: theme.spacing(1),
		margin: theme.spacing(1),
	},
	Avatar_avatar:{
		margin: theme.spacing(1),
	},
	Button_change: {
		width: 'auto',
		height: 'auto',
		fontFamily: "Jalnan",
		margin: theme.spacing(1),
		alignItems:"center"
	},
	Button_check: {
		width: 'auto',
		height: 'auto',
		fontFamily: "Jalnan",
		margin: theme.spacing(1),
	},
	div_left: {
		flex: 1,
	},
	div_right: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	divider: {
		margin: theme.spacing(3, 0),
	},
	inline: {
		display: 'inline',
	},
})

class Talk extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			user: '박재성',
			masseage: '나는야 메시지',
		}
	}
render() {
	const {classes}= this.props;

	return (
		<React.Fragment >
		<CssBaseline />
	<div className={classes.div_root}>
	<Container fixed>
		<Paper className={classes.Paper_paper}>
		<List>
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt={this.state.user} src={null} />
				</ListItemAvatar>
				<ListItemText
				
				primary={<b>{this.state.user}</b>}
				secondary={
				<React.Fragment>
					<Grid container wrap="nowrap">
					<Typography noWrap
					component="span"
					variant="body2"
					className={classes.inline}
					color="textPrimary">누구인가?sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Typography>
					</Grid>
				</React.Fragment>}/>
				</ListItem>
		<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="이동욱" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>이동욱</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">어디서봐?dddddddddddddddddddddddddddddddddddddddddddddddddddd</Typography>
						</Grid>
						</React.Fragment>}/>
						</ListItem>
		<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="김환승" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>김환승</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">ㅁㄴㅇㅁㄴㅇㄻㅇㄴㄹfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Typography>
						</Grid>
					</React.Fragment>}/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="이지윤" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>이지윤</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">지윤지윤ffffffffffffffffffffffffffffffffffffffffffffffffffffff</Typography>
						</Grid>
					</React.Fragment>}/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="보라돌이" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>보라돌이</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">보라돌이 안녕!gggggggggggggggggggggggggggggggggggggggggggggggggg</Typography>
						</Grid>
					</React.Fragment>}/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="뚜비" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>뚜비</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">뚜비 안녕!hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Typography>
						</Grid>
					</React.Fragment>}/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="나나" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>나나</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">나나 안녕!jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Typography>
						</Grid>
					</React.Fragment>}/>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Avatar alt="뽀" src={null} />
					</ListItemAvatar>
					<ListItemText
					primary={<b>뽀</b>}
					secondary={
					<React.Fragment>
						<Grid container wrap="nowrap">
						<Typography noWrap
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary">뽀 안녕!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
						</Grid>
					</React.Fragment>}/>
			</ListItem>
		</List>
	</Paper>
	</Container>
	</div>
	</React.Fragment>
	)
}
}
export default withStyles(styles)(Talk);
