import React from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { TableCell, Table, Grid, TableContainer, Breadcrumbs } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ImageSetpper from './ImageSetpper.js';
import {withStyles} from '@material-ui/core/styles';
import UserAvatar from './UserAvatar.js';

const styles = theme =>({
	Paper_root: {
		flex: 1,
		backgroundColor: theme.palette.grey[200],
		padding: theme.spacing(10),
    fontFamily: "Jalnan",
  },
  Paper_image: {
		width: '95%',
		height: 600,
		padding: theme.spacing(3),
    textAlign: 'center',
  },
	Paper_info: {
		width: '100%',
		height: 'auto',
		padding: theme.spacing(3),
    textAlign: 'center',
  },
	Paper_ask: {
		width: '95%',
		height: 'auto',
		minHeight: theme.spacing(50),
    padding: theme.spacing(3),
  },
	Paper_ing: {
		width: '100%',
		height: 'auto',
		padding: theme.spacing(3),
	},
	Button_button: {
		width: 'auto',
		height: 'auto',
		margin: theme.spacing(2),
    fontFamily: "Jalnan",
	},
	div_support: {
    width: '100%',
    minHeight: theme.spacing(20),
	},
	div_matching: {
    width: '100%',
    minHeight: theme.spacing(20),
  },
	divider: {
      margin: theme.spacing(3, 0),
      },
  div_center: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      },
  hr_hr: {
      backgroundColor: 'black',
      height: 1,
      },
})

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: '박재성',
      request_country: '필리핀',
      receive_conuntry: '한국',
      post_way: '택배',
      name: '망고',
      count: '10개',
      outdate: '2020.3.15',
      explain: '핵꿀템',
      size: '15cm*5cm*5cm',
      price: '1,000,000원',
      request: '취소해주세요',
    }
  }

	render() {

		const {classes}= this.props;
		return (
			<React.Fragment>
        <CssBaseline />
		<Paper className={classes.Paper_root}>
			<Container fixed>
        <div>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="textPrimary" href="/product/list">1:1구매요청리스트</Link>
        <Link color="textPrimary" href="/Detail">제품상세보기</Link>
      </Breadcrumbs>
      </div>
				<Grid container spacing={2}
				alignItems="flex-start" justify="center">
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper_image}>
      <div><Typography variant="h3">보여드림</Typography></div>
            <ImageSetpper></ImageSetpper>
      </Paper>
    </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.Paper_info}>
          <div>
            <UserAvatar></UserAvatar>
            <Typography variant="h5"><Link href="/Mypage" component="a">{this.state.user}</Link>님이 요청드림</Typography>
            </div>
            <hr className={classes.hr_hr}></hr>
            <TableContainer>
      <Table>
      <TableRow>
            <TableCell>요청물품</TableCell>
            <TableCell>{this.state.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>요청국가</TableCell>
            <TableCell>{this.state.request_country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>요청크기</TableCell>
            <TableCell>{this.state.size}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>선호 수령 방법</TableCell>
            <TableCell>{this.state.post_way}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>수령 국가</TableCell>
            <TableCell>{this.state.receive_conuntry}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>만료날짜</TableCell>
            <TableCell>{this.state.outdate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>요청수량</TableCell>
            <TableCell>{this.state.count}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>요청가격</TableCell>
            <TableCell>{this.state.price}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>품절시</TableCell>
            <TableCell>{this.state.request}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>제품설명</TableCell>
            <TableCell>{this.state.explain}</TableCell>
          </TableRow>
      </Table>
    </TableContainer>
    <Button className={classes.Button_button} variant="contained" color="primary">
      지원하기
    </Button>
      <Button className={classes.Button_button} variant="contained" color="secondary">
        1:1대화하기
      </Button>
    </Paper>
        </Grid>        
        <Typography variant="h6">
        안전한 거래 문화를 위해, 궁금한 점은 아래 '답변해드림'을 통해 문의해주세요. 결제후 여행자와 안전하게 1:1 쪽지 및 전화가 가능합니다.
        </Typography>
        <Grid  item xs={12} sm={6}>
          <Paper className={classes.Paper_ask}>
              <Typography variant="h5">
                답변해드림
                </Typography>
            <hr className={classes.hr_hr}></hr>
            <Typography variant="h6">주의사항</Typography>
            <div>
            <Typography variant="subtitle1">
              - 사다드림의 안전 거래 에스크로 거래 시스템을 이용해주세요!
            </Typography>
            <Typography variant="subtitle1">
              - 1:1 대화창은 결제 이후 활성화됩니다.
              </Typography>
            <Typography variant="subtitle1">
              - 외부거래 유도 문구 및 비속어 및 비방글은 경고와 함께 삭제될 수 있습니다.
              </Typography>
            </div>
            <TextField
            placeholder="질문을 입력하세요."
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined">
            </TextField>

            <Button variant="contained" color="primary" fullWidth>입력완료</Button>
            <Divider className={classes.divider} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.Paper_ing}>
            <div className={classes.div_support}>
            <Typography variant="h5">지원현황</Typography>
              <hr className={classes.hr_hr}></hr>
              <Paper>
                <Typography variant="h6">지원한 여행자가 없습니다.</Typography>
              </Paper>
              </div>
              <Divider className={classes.divider} />
              <div className={classes.div_matching}>
              <Typography variant="h5">매칭현황</Typography>
              <hr className={classes.hr_hr}></hr>
              <Paper>
              <Typography variant="h6">매칭 중인 여행자가 없습니다.</Typography>
              </Paper>
              </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Paper>
      </React.Fragment>
		)
	}
}
export default withStyles(styles)(Detail);