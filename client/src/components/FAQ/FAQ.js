import React from 'react'
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
import { Divider,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import NotListedLocationRoundedIcon from '@material-ui/icons/NotListedLocationRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./faq.css";
import Appbar from "../Appbar/Appbar1"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = theme =>({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      Grid_row:{
          display:"flex",
          flexDirection:"row",
      },
      Grid_content:{
        marginTop:20
      },
      form:{
        width:1200
      },
      Divider_header:{
        border: "1px solid",
        color:""
      },
      icon_header:{
          width:50,
          height:45
      },
      Typography_header:{
          color:"#000000",
      },
      Typography_header1:{
        color:"#000000",
        marginRight:30,
    },
      Divider_content:{
        border:"1 solid",
        color:"#c0c0c0"
      },
      Link_header:{
        marginRight:30
      },
      icon_servicecenter:{
        paddingTop:25
      },
      Grid_header:{
        marginBottom:10
      }
})

class FAQ extends React.Component{
    constructor(props){
        super(props)
        this.state={
          question_number: 0
        }
    }

    handleButtonChange = (e) => {
      //각각의 버튼 구분해주는 로직
      for(var i=0; i<6; i++){
        
        if(e.target.id==="buttonheader"+[i]){
          this.setState({question_number:i})
        }
        }
      }

  componentDidMount(){

  }

    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleContentChange = (e) => {
      this.setState({content1:true})
    }
    consolelog=(e)=>{

    }

    render(){

    const {classes} = this.props;
    
    //자주하는질문
    var question0= ["'사다드림'은 어떤 서비스인가요?","'사다드림'는 합법적인 서비스인가요?","회원정보 수정은 어디서 하나요?","'사다드림'는 한국인만 사용가능한가요?","로그인 장애시나 기타 장애시 어떻게 하나요?","회원 탈퇴는 어떻게 하나요?","탈퇴 후, 재가입도 가능한가요?"]
    var question1= ["셀러 활동은 누구나 가능한가요?","사업자등록증이 있는 셀러인 경우에는 어떻게 거래해야하나요?","수익금 정산은 어떻게 될까요?","거래중인 1:1 요청 상품 및 마켓 상품을 구할 수 없거나 취소해야하는 경우 어떻게 하나요?","통관시, 물품을 압수당하는 경우는 어떻게 해야하나요?","구매자와 거래 확정 후, 영수증을 첨부해야하는 경우 어떻게 하나요?"]
    var question2=["1:1 요청상품 거래시, 해외 사이트 온라인 구매를 부탁해도 되나요?","1:1구매 요청을 하면 안되는 물건은 있나요?","1:1요청상품에 관해, 셀러와 거래 매칭 전 취소가 가능한가요?","1:1 요청상품에 관해, 요청 가격은 어떻게 책정하면 되나요?" ]
    var question3= ["물건을 거래하다가 문제가 생기면 환불이 보장되나요?","세금계산서와 현금영수증은 어떻게 발행되나요?","2건 이상 다른 여행자에게 구매요청을 했을시, 한번에 결제할 수는 없나요?"]
    var question4=["묶음 배송이 어떤 경우 가능한가요?","직거래일때 조회 / 배송 운송장 조회는 어떻게 할까요?"]
    var question5=["환불 및 교환은 어떻게 하나요?"]

    var questions=[question0,question1,question2,question3,question4,question5]

    const question_list=questions[this.state.question_number].map((questions,index) => (
      <ExpansionPanel key={[index]} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Q.{questions}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="h5">
            사다드림은 해외 상품을 구매대행해주는 서비스입니다.
          </Typography> 
        </ExpansionPanelDetails>
      </ExpansionPanel>

    ))
    const content= [""]

        return(
        <React.Fragment>
          
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <form className={classes.form}>
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                    className={classes.Grid_header}
                    >
                      <NotListedLocationRoundedIcon className={classes.icon_header} color="primary"/>
                      <Typography  className={classes.Typography_header1} variant="h5" >FAQ</Typography>
                      <Link href="servicecenter"><Typography className={classes.Typography_header}   variant="h7">고객센터 문의</Typography><ArrowForwardIcon className={classes.icon_servicecenter} fontSize="large"/></Link>
                      </Grid>
                      <Divider className={classes.Divider_header}/>
                      <Grid
                      className={classes.Grid_row}
                      >
                        <button className="menu_buttn"  id="buttonheader0" onClick={this.handleButtonChange}>공통 서비스</button>
                        <button className="menu_buttn"  id="buttonheader1" onClick={this.handleButtonChange}>셀러</button>
                        <button className="menu_buttn"  id="buttonheader2" onClick={this.handleButtonChange}>1대1 구매 요청 관련</button>
                        <button className="menu_buttn"  id="buttonheader3" onClick={this.handleButtonChange}>결제</button>
                        <button className="menu_buttn"  id="buttonheader4" onClick={this.handleButtonChange}>배송</button>
                        <button className="menu_buttn"  id="buttonheader5" onClick={this.handleButtonChange}>환불/취소</button>
                        </Grid>
                        <Divider className={classes.Divider_header}/>
                        <Grid
                        className={classes.Grid_content}
                        >{question_list}
                      <Divider className={classes.Divider_content}/>
                      </Grid>
                      </form>
                      </div>
                </Container>
        </React.Fragment>
        )
    }
}
export default withStyles(styles)(FAQ);