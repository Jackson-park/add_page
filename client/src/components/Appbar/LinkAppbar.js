import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';
import '../../index.css';
import { AppBar, Toolbar, Link, Avatar, Grid, Button, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MessageIcon from '@material-ui/icons/Message';
import Login from '../Login/Login'
import axios from 'axios';
const styles = theme =>({
  Link_title: {
    fontSize: 30,
    fontFamily: "Jalnan",
  },
  Link_menu: {
    fontSize: 14,
    fontFamily: "Jalnan",
    '&:focus, &:hover, &$active': {
      color: 'orange',
    },
  },
  
  div_margin: {
	'& > * + *': {
    marginLeft: theme.spacing(5),
  },
  },
  div_center: {
    display: 'flex',
    justifyContent: "center",
  },
  div_right: {
		display: 'flex',
    justifyContent: 'flex-end',
  },
})
class LinkAppbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      uesr_name: '박재성',
      anchorEl: null,
      open: false,
      loginstate:false
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handle_Popup = this.handle_Popup.bind(this);
  }
  handleMenu(e) {
    this.setState({ anchorEl: e.currentTarget});
    this.setState({ open: true});
  }
  handleClose() {
    this.setState({ anchorEl: null});
    this.setState({ open: false});
  }

  handle_Popup(){
    var url = "/login"
    var name = "popup test";
    var option = "width = 500, height = 500, top = 100, left = 200, location = no"
    window.open(url, name, option);
  }
  handleFormLogout = async (e) => {
    e.preventDefault();
    this.onLogoutClick();
    
}
  onLogoutClick = (e) => {
    e.preventDefault();
    const url = 'users/logout';

    axios.get(url, {
        
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    })
}

  render() {
    const {classes} = this.props;
    const url = 'users/logout';
    return(
      <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center">
        <div>
          
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.Link_title}
            href="/">
            {'사다드림'}
          </Link>
          </div>
          <div className={classes.div_margin}>
            <Link className={classes.Link_menu} href="/product/list" color="inherit" underline="none">1:1구매요청리스트</Link>
            <Link className={classes.Link_menu} href="/Travelerlist" color="inherit" underline="none">여행자리스트</Link>
            <Link className={classes.Link_menu} href="/product/add"  color="inherit" underline="none">1:1구매요청등록</Link>
            <Link className={classes.Link_menu} href="/Traveler" color="inherit" underline="none">여행자등록</Link>
            
            <Link href="/login" color="inherit" underline="none">로그인</Link>
            <Link href="/register" color="inherit" underline="none" > 회원가입</Link>            
            { /*로그인 되었을때 */ }
            <Link className={classes.Link_menu} onClick={this.handle_Popup} color="inherit" underline="none"><MessageIcon/></Link>
              <IconButton
                aria-label="usericon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="primary">
                <Avatar alt={this.state.user_name}></Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={this.state.open}
                onClose={this.handleClose}>
                  <div className={classes.div_center}>
                <Typography variant="h6">{this.state.uesr_name}&nbsp;님</Typography>
                </div>
                <MenuItem
                href="/Mypage"
                component="a"
                onClick={this.handleClose}>나의 회원정보</MenuItem>
                <MenuItem
                href="/Paymentdetails"
                component="a"
                onClick={this.handleClose}>1:1 구매요청 내역</MenuItem>
                <MenuItem
                href="/settlement"
                component="a"
                onClick={this.handleClose}>정산현황</MenuItem>
                <MenuItem
                value="logout"
                onClick={this.handleFormLogout, this.handleClose}>로그아웃</MenuItem>
              </Menu> 
              </div>
            </Grid>
      </Toolbar>
      </AppBar>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(LinkAppbar);