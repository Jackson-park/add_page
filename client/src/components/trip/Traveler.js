import React from 'react';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Typography, Grid, Button,
  InputAdornment, OutlinedInput, Grow, Box, LinearProgress,
  NativeSelect,InputBase,TextareaAutosize, FormControl,
  FormControlLabel,RadioGroup, Radio, Divider } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import TripImg from './trip.jpg';
import Roundtrip from './Roundtrip.js';
import Oneway from './Oneway.js';
const styles = theme =>({
	div_root: {
    flex: 1,
    display: 'flex',
  },
  img_main: {
    flex: 1,
  },
  div_traveler: {
    flex: 1,
    display: 'flex',
    alignItems:'flex-end',
    fontFamily: "Jalnan",
    marginTop: theme.spacing(10),
  },
  div_body: {
    flex: 1,
    marginTop: theme.spacing(10),
  },
  hr_hr: {
    height: 3,
    backgroundColor: 'black',
  },
  divider: {
    flex: 1,
		margin: theme.spacing(3, 0),
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
  Button_btn: {
      width: theme.spacing(20),
      height: theme.spacing(10),
    },
    img_user: {
      width: '60%',
      height: 'auto',
    },
    margin: {
      margin: theme.spacing(1),
    },
    TextareaAutosize_text: {
      width: theme.spacing(66),
      margin: theme.spacing(1),
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
class Traveler extends React.Component{
  constructor(props){
    super(props)
    this.state={
      bank: 'kookmin',
      money: '',
      post_way: 'delivery',
      airplane: '',
      user: '박재성',
      phone_number: '01086970513',
      introduction: '',
      account_number: '22200204291778',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_money = this.handleChange_money.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange_money(e) {
    this.setState({ money: e.target.value });
  {/* 가격 제한
    if (this.state.money < 1000) {
      window.alert('가격은 1,000원 이상부터 가능합니다.');
    };
    if (this.state.money > 600000) {
      window.alert('가격은 60만원 이하만 가능합니다.');
    };
    */}
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
    <Container>
    <div className={classes.div_traveler}>
      <FlightTakeoffIcon fontSize="large" />&nbsp;
      <Typography variant="h4">여행자등록</Typography>&nbsp;&nbsp;
      <Typography variant="body1">여행을 등록하고 경비를 벌어보세요!</Typography>
    </div>
    <hr className={classes.hr_hr}></hr>
      <Container>
{/* 01정보입력 */}
      <div className={classes.div_body}>
      <Typography variant="h5">01&nbsp;정보입력</Typography>
      <Divider className={classes.divider} />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start">
        <div>
          <img className={classes.img_user} src={null}></img>
        </div>
        <div>
          <Typography variant="body1">이름</Typography>
          <FormControl className={classes.margin}>
            <BootstrapInput id="name" value={this.state.user}/>
          </FormControl>

          <Typography variant="body1">연락처</Typography>
          <FormControl className={classes.margin}>
            <BootstrapInput name="phone_number" type="tel" value={this.state.phone_number} />
          </FormControl>

          <Typography variant="body1">입금계좌번호</Typography>
          <FormControl className={classes.margin}>
            <NativeSelect className={classes.margin} name="bank" value={this.state.bank}
               input={<BootstrapInput />}>
              <option value="kookmin">국민은행</option>
              <option value="shinhan">신한은행</option>
              <option value="ulie">우리은행</option>
              <option value="hana">하나은행</option>
              <option value="kakao">카카오뱅크</option>
            </NativeSelect>
            <BootstrapInput name="account_number" value={this.state.account_number} className={classes.margin} />
            </FormControl>
          
          <Typography variant="body1">선호배송방법</Typography>
          <RadioGroup
            row
            name="post_way"
            value={this.state.post_way}
            onChange={this.handleChange}>
            <FormControlLabel value="delivery" control={<Radio color="primary" />} label="배송" />
            <FormControlLabel value="direct" control={<Radio color="primary" />} label="직거래" />
            </RadioGroup>
            <Typography variant="body1">소개글</Typography>
            <TextareaAutosize
            name="introduction"
            className={classes.TextareaAutosize_text}
            aria-label="minimum height"
            rowsMin={10}
            type="text"
            value={this.state.introduction}
            onChange={this.handleChange}
            placeholder="구매 요청자가 참고할 만한 여행지, 귀국일 등 소개글을 적어주세요." />
            </div>
            </Grid>
            </div>
{/* 02여행정보등록 */}
            <div className={classes.div_body}>
              <Typography variant="h5">02&nbsp;여행정보입력</Typography>
              <Divider className={classes.divider} />
              <div>
                <div className={classes.div_right}>
                  {/* 여행일정(왕복, 편도)설정 */}
                <FormControl component="fieldset">
                <RadioGroup row name="airplane" value={this.state.airplane} onChange={this.handleChange}>
                  <FormControlLabel value='round_trip' control={<Radio color="primary" />} label="왕복" />
                  <FormControlLabel value='one_way' control={<Radio color="primary" />} label="편도" />
                </RadioGroup>
                </FormControl>
                </div>
                <Grow in={(this.state.airplane === 'round_trip')} hidden={this.state.airplane !== 'round_trip'}>
                  <Box>
                    {/* 여행 국가,날짜 설정 */}
                  <Roundtrip></Roundtrip>
                  </Box>
              </Grow>
              <Grow in={(this.state.airplane === 'one_way')} hidden={this.state.airplane !== 'one_way'}>
                  <Box>
                    <Oneway></Oneway>
                  </Box>
              </Grow>
                </div>
                </div>
{/* 03가격한도 */}
                <div className={classes.div_body}>
                  <Typography variant="h5">03&nbsp;가격한도</Typography>
                  <Divider className={classes.divider} />
                  <div>
                    <Typography variant="body1">요청받을 수 있는 가격의 최고 한도를 설정해주세요.</Typography>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                      <OutlinedInput
                        name="money"
                        type="number"
                        value={this.state.money}
                        onChange={this.handleChange_money}
                        startAdornment={<InputAdornment position="start">&#8361;</InputAdornment>}
                      />
                    </FormControl>
                    {/* 가격한도 프로그래스바 */}
                    <MoneyLinearProgress
                    className={classes.margin}
                    variant="determinate"
                    color="primary"
                    value={this.state.money/6000}/>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline">
                      <Typography variant="body1">&#8361;0</Typography>
                      <Typography variant="body1">&#8361;600,000</Typography>
                    </Grid>
                    </div>
                    </div>
                    </Container>
                    <Divider className={classes.divider} />
                    <div className={classes.div_center}>
                      <Button color="primary" variant="contained"
                      className={classes.Button_btn}>여행등록하기</Button>
                      </div>
                      </Container>
                      <br /><br />
                      </div>
    );
  }
}
          
export default withStyles(styles)(Traveler);