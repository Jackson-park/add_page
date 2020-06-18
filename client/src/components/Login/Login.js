import React from 'react'
import "./login.css"
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
        backgroundColor:"#F3E2A9",
        borderRadius:10,
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            color:"#ffffff",
            backgroundColor:"#FFBF00",
          },
      }

})

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

    handleFormLogout = async (e) => {
        e.preventDefault();
        this
        .onLogoutClick();
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

    onLoginClick = (e) => {

        const url = 'users/login';
        
        return axios.post(url, {
            u_email: this.state.user_email,
            u_password: this.state.user_password,
        })
        .then(function (response) {
            // 로그인 버튼 클릭시 리턴 메시지에 따른 로직 구현
            if(response.data.result == "ok") {
                window.alert(response.data.message);
                window.location.href="/";
            } else if(response.data.result == "fail") {
                window.alert(response.data.message);
            } else {

            }
            
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
            <CssBaseline />
                <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
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
{/*
                    <Button className={classes.Button_submit}
                                                type="submit"
                                                value="Login"
                                                onClick={this.handleFormLogout} >로그아웃</Button>
                                                 */}
                    <Grid container>
                        <Grid item xs>
                        <Link href="/register" variant="body1">
                            회원가입
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body1">
                            비밀번호 찾기
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                    <br />
                </div>
                </Container>
        </React.Fragment>
        )
    }
}
export default withStyles(styles)(Login);