import React from 'react';
import "./register.css"
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import {FormControl,FormHelperText,AppBar,Toolbar,withStyles} from '@material-ui/core';
import Dialogs from "./Dialogs"
import { Route, Switch, Redirect } from "react-router-dom";

import axios from 'axios';



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

  const styles = theme => ({
    
    Link_appbar:{
      marginRight:10,
      marginLeft:10
    },
    Button_gender:{
      width:187,
      height:50,
    },
    Checkbox_agree:{
      marginLeft:50,
    },
    FormControlLabel_agree:{
   
      marginTop:20,
      htmlFontSize: 10,
      '&:hover': {
        color:"#6495ED"
      },
    },
    Box_agree:{
      width:400,
      height:245,
      border:"solid 1px",
      color:"silver",
    },
    Button_submit:{
      marginTop:50,
      height:70,
      borderRadius:10
    },
    Typography_country:{
      fontSize:17
    }



  })


class Register extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
          //회원 테이블 값들
          user_email:'',
          user_password:'',
          user_password_comfirm:'',
          user_name:'',
          user_birth:'',
          user_country_number:'',
          user_phone_number:'',
          user_gender:'',
          
          // 회원가입 성공 여부
          isJoinSuccess: false,
          //광고성 정보 수신 동의
          receive_agree:false,
         
          //(보류)recommender:'',

          //아이디 비밀번호 이름 생년월일 핸드폰번호 정규식
          id_logic:false,
          id_logic_label:false,
          password_logic:false,
          password_logic_label:false,
          name_logic:false,
          name_logic_label:false,
          birth_logic:false,
          birth_logic_label:false,
          phone_number_logic:false,
          phone_number_logic_label:false,

          //비밀번호 확인
          password_confirm:false,
          password_confirm_label:false,
          
          //style
          gender_marginRight:20,

          //성별 버튼
          gender_male:false,
          gender_female:false,

        }
    }


    //광고성 정보 수신 동의 
    receive_agreeCallbackFunction = (childData) => {
      console.log(childData);
      this.setState({
          receive_agree: childData.receive_agree,

      });
    };

    // api event
    addCustomer() {
      const url = 'users/join';
      try {
        if(this.state.user_email === '') {
          alert('이메일을 입력해주세요');
          window.location.reload();
        } else if (this.state.user_password === '') {
          alert('비밀번호 값을 입력해주세요');
          window.location.reload();
        } else {
          return axios.post(url, {
            u_email: this.state.user_email,
            u_password: this.state.user_password,
            u_name: this.state.user_name,
            u_birth: this.state.user_birth,
            u_nation: this.state.user_country_number,
            u_phnbr: this.state.user_phone_number,
            u_sex: this.state.user_gender
          }).then(function(response) {
            // 중복 아이디 체크
            if(response.data.result === 'fail') {
              alert(response.data.message);
            } else if(response.data.result === 'ok') {
              this.setState({
                isJoinSuccess: true,
              });
              alert(response.data.message);
            }
          })
          .catch(error => console.log(error));
        }
      } catch(err) {
        console.log(err);
      }
      
  }

    handleFormSubmit = async (e) => {
      e.preventDefault();
      this
          .addCustomer()
          .then((response) => {
              
          })
          .catch(error => {
            console.log('failed', error)
          });
  }




      //이메일
    ID_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        
        this.setState({
          id_logic:false,
          id_logic_label:false,
        });
        
        //이메일 정규식
        var email_logic = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!email_logic.test(document.getElementById('email').value)) { 
          this.setState({
            id_logic:true,
            id_logic_label:true
          });
          if(document.getElementById('email').value==="")
          {
            this.setState({
              id_logic:false,
              id_logic_label:false,
            });
          }
        }
    }

    //비밀번호
    PW_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          password_logic:false,
          password_logic_label:false,
        });
        //비밀번호 정규식
        var pw_logic=/^.*(?=.{6,12})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        if(!pw_logic.test(document.getElementById('password').value)){
          this.setState({
            password_logic:true,
            password_logic_label:true,
          });

        if(document.getElementById('password').value==="")
                {
                  this.setState({
                    password_logic:false,
                    password_logic_label:false,
                  });
                }
              } 
            }

      //비밀번호 확인
      PW_confirm_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          password_confirm:false,
          password_confirm_label:false,
        });
        if(!(document.getElementById("password_confirm").value === document.getElementById("password").value)){

        this.setState({
          password_confirm:true,
          password_confirm_label:true,
        });

        if(document.getElementById("password_confirm").value===""){
          this.setState({
            password_confirm:false,
            password_confirm_label:false,
          });
        }
        }
      }
      //이름
      NAME_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          name_logic:false,
          name_logic_label:false,
        });
        //이름 정규식
      var name_logic=/^[가-힣]{2,5}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
       if(!name_logic.test(document.getElementById("name").value)){
        this.setState({
          name_logic:true,
          name_logic_label:true,
        });
        
        if(document.getElementById("name").value ===""){
          this.setState({
            name_logic:false,
            name_logic_label:false,
          });
        }
      }
      }

      BIRTH_handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          birth_logic:false,
          birth_logic_label:false,
        });

      var birth_logic=/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
      if(!birth_logic.test(document.getElementById("birth").value)){
        this.setState({
          birth_logic:true,
          birth_logic_label:true,
        });
        if(document.getElementById("birth").value ===""){
          this.setState({
            birth_logic:false,
            birth_logic_label:false,
          });
        }
      }
      }
      //핸드폰 번호
      PHONE_NUMBER_handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          phone_number_logic:false,
          phone_number_logic_label:false,
        });
        //핸드폰 번호 정규식
        var phone_number_logic=/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g
        if(!phone_number_logic.test(document.getElementById("phone_number").value)){
          this.setState({
            phone_number_logic:true,
            phone_number_logic_label:true,
          });

          if(document.getElementById("phone_number") === ""){
            this.setState({
              phone_number_logic:false,
              phone_number_logic_label:false,
            });
          }
        }
      }
  
    //성별 
    gender_male_handleValueChange = (e) => {
        this.setState({
          user_gender:"남자",
          gender_male:true,
          gender_female:false
        })
          }

          gender_female_handleValueChange = (e) => {
            this.setState({
              user_gender:"여자",
              gender_male:false,
              gender_female:true
            })
              }

      
    country_handlechange= (e) => {
      this.setState({user_country_number: e.target.value});
    }

    submit = (e) => {
      console.log(this.state.receive_agree)
    }

    render(){
      const {classes} = this.props;
      const country=["대한민국","일본","미국","중국","영국","프랑스","캐나다","러시아","몽골","이탈리아","스페인","태국","베트남","말레이시아","인도네시아","네덜란드","멕시코","브라질","아르헨티나","칠레"]
      const country_list=country.map((country,index) => (<MenuItem key={index} value={country}>{country}</MenuItem>))

      const isJoinSuccess = this.state.isJoinSuccess;
      
        return(
          <React.Fragment>
            <CssBaseline />
            {/* 회원가입 완료했는지 확인하는 코드 리다이렉트 */}
            {isJoinSuccess ? <Redirect to ='/login' /> : <Redirect to ='/register'/>}


            {/* 회원가입  */}
            <Container component="main" maxWidth="xs">
            <div class="paper">
                <div class="div_icon">
              <Avatar class="avatar" >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                회원 가입
              </Typography>
              </div>
              <form className="form" noValidate>
                <Grid container spacing={2}>
                 
                  <Grid  className="Grid_all" >
                    <TextField
                      id="email"
                      error={this.state.id_logic}
                      name="user_email"
                      variant="outlined"
                      type="text"
                      fullWidth
                      value={this.state.user_email}
                      onChange={this.ID_handleValueChange}
                      label={this.state.id_logic_label?"이메일 형식에 맞게 입력해주세요":"이메일(아이디)"} />
                  </Grid>

                  <Grid className="Grid_all" >
                    <TextField
                      error={this.state.password_logic}
                      id="password"
                      name="user_password"
                      variant="outlined"
                      fullWidth
                      value={this.state.user_password}
                      type={'password'}
                      label={this.state.password_logic_label?"비밀번호 형식에 맞게 입력해주세요":"비밀번호"}
                      onChange={this.PW_handleValueChange}
                      autoComplete="lname"
                    />
                    <FormHelperText>6~12자리 숫자와 문자를 입력해주세요.</FormHelperText>
                  </Grid>

                  <Grid className="Grid_all" >
                    <TextField
                     id="password_confirm"
                    error={this.state.password_confirm}
                      variant="outlined"
                      required
                      fullWidth
                      type={'password'}
                      value={this.state.user_password_comfirm}
                      onChange={this.PW_confirm_handleValueChange}
                      label={this.state.password_confirm_label?"비밀번호가 다릅니다":"비밀번호 확인"}
                      name="user_password_comfirm"
                      autoComplete="lname" />
                  </Grid>

                  <Grid className="Grid_all">
                    <TextField
                      id="name"
                      error={this.state.name_logic}
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.user_name}
                      onChange={this.NAME_handleValueChange}
                      label={this.state.name_logic_label?"이름을 정확히 써주세요":"이름"}
                      name="user_name"/>
                  </Grid>

                  <Grid className="Grid_all" >
                    <TextField
                      error={this.state.birth_logic}
                      id="birth"
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.user_birth}
                      onChange={this.BIRTH_handleValueChange}
                      label={this.state.birth_logic_label?"생년월일 형식에 맞게 써주세요":"생년월일 YYYYMMDD"}
                      name="user_birth"
                    />
                     <FormHelperText>8자리로 입력해주세요. </FormHelperText>
                  </Grid>

                  <Grid className="Grid_all" >
                  <FormControl fullWidth  className="Select_Formcontrol">
                  <InputLabel>국적 선택</InputLabel>
                    <Select  value={this.state.user_country_number} onChange={this.country_handlechange} className="" >
                    {country_list}
                    </Select>
                    <FormHelperText><Typography className={classes.Typography_country}>해외 유심 이용자는 해당 국가번호를 선택</Typography></FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid  className="Grid_all">
                  <TextField
                      error={this.state.phone_number_logic}
                      id="phone_number"
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.user_phone_number}
                      onChange={this.PHONE_NUMBER_handleValueChange}
                      label={this.state.phone_number_logic_label?"형식에 맞게 써주세요":"휴대폰 번호"}
                      name="user_phone_number"
                    />
                     <FormHelperText>11자리로 입력해주세요. </FormHelperText>
                  </Grid>

                  <Grid className="Grid_all" >
                  <Button className={classes.Button_gender}  color={this.state.gender_male?"primary":""} onClick={this.gender_male_handleValueChange} variant="outlined"  style={{marginRight:this.state.gender_marginRight}}>남자</Button>
                  <Button className={classes.Button_gender}  color={this.state.gender_female?"primary":""} onClick={this.gender_female_handleValueChange}  variant="outlined"  >여자</Button>
                  </Grid>

                  <Grid className="Grid_all" >
                
                    <Dialogs parentCallback={this.receive_agreeCallbackFunction}/>
                 
                  </Grid>

                </Grid>
                <Button
                className={classes.Button_submit}
                  onClick={this.submit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.handleFormSubmit}
                >
                  회원 가입
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Typography variant="h7">이미 아이디가 있으신가요? </Typography>
                    <Link href="/login" variant="body2">로그인</Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <br />
            <br />
          </Container>
          </React.Fragment>
        )
    }
}
export default withStyles(styles)(Register);