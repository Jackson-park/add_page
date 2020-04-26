import React from 'react'
import "./login.css"
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {AppBar,Toolbar} from '@material-ui/core';
import axios from 'axios';


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      Button_submit:{
        width:"100%",
        height:60,
        backgroundColor:"#ADC7E4",
        borderRadius:10,
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            color:"#ffffff",
            backgroundColor:"#000000",
          },
      }

})



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          사다드림
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
        }
    }


        //아이디 기억하기
        //     lsRememberMe = (e) => {

        //     if (document.getElementById("rememberMe").checked==true && this.state.user_email !== "") {
        //         console.log("dd")
        //         localStorage.username = this.state.user_email
        //         localStorage.checkbox = document.getElementById("rememberMe").value;
        //     } else {
        //         localStorage.username = "";
        //         localStorage.checkbox = "";
        //     }
            
        //     console.log(localStorage)
        //     console.log(document.getElementById("email").value)
            
        // }

         
        // 아이디 기억하기
        // componentDidMount(){
        //     if (localStorage.checkbox ==="lsRememberMe") {
        //         document.getElementById("rememberMe").setAttribute("checked", "checked");
        //         document.getElementById("email").value = localStorage.username;
        //     } else {
        //         document.getElementById("rememberMe").removeAttribute("checked");
        //         document.getElementById("email").value = "";
        //     }
        // }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        this
        .onLoginClick()
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log('fail', error);
        })
    }

    onLogoutClick = (e) => {
        const url = 'users/logout';

        axios.get(url, {
            
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
        
    }

    handleFormLogout = async (e) => {
        e.preventDefault();
        this
        .onLogoutClick();
    }

    onLoginClick = (e) => {

        const url = 'users/login';
        
        return axios.post(url, {
            u_email: this.state.user_email,
            u_password: this.state.user_password,
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    email_handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    render(){
    const {classes} = this.props;

        return(
        <React.Fragment>
            <AppBar  position="static" color="default" elevation={0}>
                <Toolbar className="">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                    <Typography variant="h6" color="inherit" noWrap className="">
                        사다드림
                    </Typography>
                </Grid>
                </Toolbar>
            </AppBar>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    로그인
                    </Typography>
                    <form className={classes.form} noValidate>
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="user_email"
                        value={this.state.user_email}
                        label="이메일"
                        type="email"
                        id="email"
                        autoComplete="current-password"
                        onChange={this.handlevalueChange}
                        />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="user_password"
                        value={this.state.user_password}
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handlevalueChange}
                    />

                    <Button className={classes.Button_submit}
                            type="submit"
                            value="Login"
                            onClick={this.handleFormSubmit} >로그인</Button>

                    <Button className={classes.Button_submit}
                                                type="submit"
                                                value="Login"
                                                onClick={this.handleFormLogout} >로그아웃</Button>

                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            회원가입
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                             비밀번호 찾기
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
                </Container>

        </React.Fragment>
        )
    }

}
export default withStyles(styles)(Login);