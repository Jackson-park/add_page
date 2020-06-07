import React from 'react';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Grid, Button,
  Input, Select, InputLabel, FormControl, Divider, TextField, IconButton, InputAdornment } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import Listcard from './Listcard.js';
import SearchIcon from '@material-ui/icons/Search';
const styles = theme =>({
	div_root: {
    flex: 1,
    display: 'flex',
  },
  img_main: {
    flex: 1,
  },
  Container_root: {
    width: '70%'
  },

  formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
  },
  Button_btn: {
    width: theme.spacing(30),
    height: theme.spacing(7),
	},
  div_body: {
    flex: 1,
    marginTop: theme.spacing(5),
  },
  hr_hr: {
    height: 3,
    backgroundColor: 'black',
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
    search_country: {
      flex: 1,
      width: 30,
    },
    margin: {
      margin: theme.spacing(1),
    },
    search_margin: {
      margin: theme.spacing(3),
    },
})

class Traveler extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search_open: false,
      search_area: '모든 지역',
      search_country: '모든 나라',
      search_text: '',
    }
    this.handleClickOpen_search = this.handleClickOpen_search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen_search() {
    this.setState({ search_open: true});
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClose() {
		this.setState({search_open: false});
	  }
  render() {
    const {classes}= this.props;
    return(
      <div>
		<CssBaseline />
    {/* 위 배경이미지 */}
    <div className={classes.div_root}>
    <img src={null} className={classes.img_main}></img>
    </div>
    <Container fixed className={classes.Container_root}>
      {/* 국가 지역,나라 검색버튼 */}
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center">
    <Button
		variant="contained" color="inherit"
		onClick={this.handleClickOpen_search} className={classes.Button_btn}>
		{this.state.search_area}&nbsp;-&nbsp;{this.state.search_country}</Button>
    <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.search_open} onClose={this.handleClose}>
			<DialogTitle>검색</DialogTitle>
			<DialogContent>
			<form className={classes.container}>
				<FormControl className={classes.formControl}>
				<InputLabel htmlFor="area">지역</InputLabel>
				<Select
					name="search_area"
					labelId="search_area"
					value={this.state.search_area}
					onChange={this.handleChange}
					input={<Input />}
				>
          <MenuItem value="모든 지역">모든 지역</MenuItem>
					<MenuItem value="아시아">아시아</MenuItem>
					<MenuItem value="아메리카">아메리카</MenuItem>
					<MenuItem value="유럽">유럽</MenuItem>
					<MenuItem value="아프리카">아프리카</MenuItem>
					<MenuItem value="오세아니아">오세아니아</MenuItem>
				</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
				<InputLabel id="country">나라</InputLabel>
				<Select
					name="search_country"
					labelId="search_country"
					value={this.state.search_country}
					onChange={this.handleChange}
					input={<Input />}
				>
          <MenuItem value="모든 나라">모든 나라</MenuItem>
					<MenuItem value="한국">한국</MenuItem>
					<MenuItem value="일본">일본</MenuItem>
					<MenuItem value="중국">중국</MenuItem>
				</Select>
				</FormControl>
			</form>
			</DialogContent>
			<DialogActions>
			<Button onClick={this.handleClose} color="primary">취소</Button>
			<Button onClick={this.handleClose} color="primary">확인</Button>
			</DialogActions>
		</Dialog>
    {/* 검색인풋라벨 */}
    <FormControl className={classes.search_margin}>
        <InputLabel htmlFor="input-with-icon-adornment" value={this.state.search_text}>검색...</InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment>
              <IconButton><SearchIcon /></IconButton>
            </InputAdornment>}/>
      </FormControl>
    </Grid>
    <Divider></Divider>
    {/* 여행자카드리스트 화면 */}
    <Container>
    <div className={classes.div_body}>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
    <Listcard></Listcard>
    <Listcard></Listcard>
    <Listcard></Listcard>
    <Listcard></Listcard>
    </Grid>
    </div>
    </Container>
    </Container>
    <br /><br />
    </div>
    );
  }
}
export default withStyles(styles)(Traveler);