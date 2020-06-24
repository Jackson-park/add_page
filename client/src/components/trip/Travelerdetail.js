import React from 'react';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Typography, Grid, Button,
  InputAdornment, OutlinedInput, Box, LinearProgress,
  TextField,InputBase, FormControl,
  FormControlLabel, Grow, Divider, Chip, Avatar } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TripImg from './trip.jpg';
import AccountCircle from '@material-ui/icons/AccountCircle';
const styles = theme =>({
	div_root: {
    flex: 1,
    display: 'flex',
  },
  img_main: {
    flex: 1,
  },
  Container: {
	width: '80%',
  },
  img_user: {
    width: '40%'
  },
  div_body: {
    flex: 1,
    marginTop: theme.spacing(10),
  },
  div_imageinfo: {
    textAlign: 'center',
    width: theme.spacing(60),
  },
  div_info: {
    width: theme.spacing(60),
  },
  divider: {
    flex: 1,
    margin: theme.spacing(2, 0),
	},
  div_price_limit: {
    flex: 1,
  },
  div_center: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      },
  div_right: {
    display: 'flex',
    justifyContent: 'flex-end',
    },
    margin: {
      margin: theme.spacing(1),
    },
    Button_btn: {
      width: theme.spacing(30),
      height: theme.spacing(10),
    },
    div_row: {
      flex: 1,
    },
    TextField_q: {
      width: theme.spacing(120),
      display: 'flex',
    },
    Avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
})
/*정보입력란 스타일*/
const BootstrapInput = withStyles(theme => ({
  input: {
    width: theme.spacing(60),
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.grey[300],
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    /*클릭시 가장자리 효과*/
    '&:focus': {
      borderRadius: 5,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

/*가격한도 프로그래스바 스타일*/
const MoneyLinearProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 20,
  },
  bar: {
    borderRadius: 20,
  },
})(LinearProgress);
class Travelerdetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user: '박재성',
      money: '200000',
      post_way: 'delivery',
      check_email: Boolean(true),
      check_phone: Boolean(true),
      check_passport: Boolean(true),
      introduction: '안녕하세요 박재성입니다. 저와 거래를 하고싶다면 요청하기를 눌러주세요. 제 여행에 대해서 궁금한 점이 있으시다면 아래에 쪽지로 질문해주세요 :)',
      question: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
		this.setState({[e.target.name]: e.target.value });
	}
  render() {
    const {classes}= this.props;
    return(
      <div>
		<CssBaseline />
    {/* 위 배경이미지 */}
    <div className={classes.div_root}>
    <img src={TripImg} className={classes.img_main}></img>
    </div>
    <Container fixed className={classes.Container}>
{/* 01정보입력 */}
      <div className={classes.div_body}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start">
        <div className={classes.div_imageinfo}> {/* div_imageinfo */}
          <img className={classes.img_user} src={null}></img>
          <br /><br />
          <Typography variant="h5" color="primary">{this.state.user}</Typography>
          <br />
          {/* 배송방법 */}
          <Grow in={(this.state.post_way === 'delivery')} hidden={this.state.post_way !== 'delivery'}>
            <Box>
              <Chip color="primary" label="택배거래선호" />
            </Box>
          </Grow>
          <Grow in={(this.state.post_way === 'direct')} hidden={this.state.post_way !== 'direct'}>
            <Box>
              <Chip color="primary" label="직거래선호" />
            </Box>
          </Grow>
          <br />
          {/* 인증 확인 */}
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
          <Grow in={(this.state.check_email === true)} hidden={this.state.check_email !== true}>
            <Box>
              <Typography variant="body2"><CheckBoxIcon fontSize="small" color="primary" /> 이메일 인증 완료</Typography>
            </Box>
          </Grow>
          <Grow in={(this.state.check_phone === true)} hidden={this.state.check_phone !== true}>
            <Box>
              <Typography variant="body2"><CheckBoxIcon fontSize="small" color="primary" /> 휴대폰 인증 완료</Typography>
            </Box>
          </Grow>
          <Grow in={(this.state.check_passport === true)} hidden={this.state.check_passport !== true}>
            <Box>
              <Typography variant="body2"><CheckBoxIcon fontSize="small" color="primary" /> 신분 인증 완료</Typography>
            </Box>
          </Grow>
          </Grid>
          <br />
    <Typography variant="caption">{this.state.introduction}</Typography>
        </div>
      <div className={classes.div_info}>
    <Typography variant="h5"><FlightTakeoffIcon fontSize="large" /> {this.state.user}님의 여행정보</Typography>
			<Divider className={classes.divider} />
      {/*항공권 <div> */}
				<div>
				<Typography variant="h6">항공권</Typography>
        <br />
        <Grid container item xs={12}>
        <Grid item xs={5}>
        <div><Typography variant="body1">[멕시코]남아메ssss리카</Typography></div>
        </Grid>
        <Grid item xs={2}>
        <div className={classes.div_center}><FlightTakeoffIcon /></div>
        </Grid>
        <Grid item xs={5}>
        <div className={classes.div_right}><Typography variant="body1">[필리ssssssssss핀]세부</Typography></div>
        </Grid>
        </Grid>
				<Divider />
        <div className={classes.div_right}>
				<Typography variant="caption">출발: 2020.5.13</Typography>
        </div>
        <br></br>
				<Grid container item xs={12}>
        <Grid item xs={5}>
        <div><Typography variant="body1">[필리핀]세부</Typography></div>
        </Grid>
        <Grid item xs={2}>
        <div className={classes.div_center}><FlightTakeoffIcon /></div>
        </Grid>
        <Grid item xs={5}>
        <div className={classes.div_right}><Typography variant="body1">[한국]김포</Typography></div>
        </Grid>
        </Grid>
				<Divider />
        <div className={classes.div_right}>
				<Typography variant="caption">도착: 2020.6.11</Typography>
        </div>
				</div> {/*항공권 </div> */}
        <br />
        {/*가격한도 <div> */}
        <div>
          <Typography variant="h6">가격한도</Typography>
          <br />
        <div>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline">
            <Typography variant="body1">&#8361; 0</Typography>
            <Typography variant="body1">&#8361; 600,000</Typography>
          </Grid>
          {/* 가격한도 프로그래스바 */}
          <MoneyLinearProgress
          className={classes.margin}
          variant="determinate"
          color="primary"
          value={this.state.money/6000}/>
          </div>
          <Typography variant="body2" color="primary">&#8361; {this.state.money} 가능</Typography>
        </div> {/*가격한도 </div> */}
        <br /><br />
          <div className={classes.div_center}>
          <Button color="primary" variant="contained"
          className={classes.Button_btn}>요청하기</Button>
          </div>
		</div> {/*div_info */}
    </Grid>
    </div>
				<Divider className={classes.divider} />
        {/* 질문과 답글 */}
        <div>
          <Typography variant="h5">답변해드림</Typography>
          <br />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Avatar alt={this.state.user} src={null} className={classes.Avatar}></Avatar>
              <TextField className={classes.TextField_q}
              id="input-with-icon-grid"
              name="question"
              label="질문을 입력하세요.."
              value={this.state.question}
              onChange={this.handleChange}/>
                <Button variant="contained" color="primary">확인</Button>
                </Grid>
                <Divider className={classes.divider} />
                </div>
                {/* 댓글 */}
                <div>
                  
                </div>
                </Container>
          <br /><br />
          </div>
    );
  }
} 
export default withStyles(styles)(Travelerdetail);