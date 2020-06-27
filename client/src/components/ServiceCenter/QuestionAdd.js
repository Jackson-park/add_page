import React from 'react'
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
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
import Appbar from '../Appbar/Appbar1'
import axios from 'axios';
import { Divider,FormControl,InputLabel,Select,MenuItem, Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = theme =>({
    paper: {
        marginTop: theme.spacing(5),
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
      Divider_header:{
        border: "1px solid",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(10),
      },
      answer:{
        width: theme.spacing(30),
      },
      Button_submit:{
        width: "30%",
        height: theme.spacing(6),
        borderRadius:50,
        color:"blue",
        borderColor:"blue",
        margin: theme.spacing(5),
      },
      Container: {
        width: "80%",
      },
      Grid_margin: {
        marginBottom: theme.spacing(10),
      },
      TextField_content: {
        width: theme.spacing(70),
      }

})

class QuestionAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            question_category:"",
            question_name:"",
            question_file:"",
            question_explain:"",
        }
    }
    //문의 카테고리 메서드
    handleCategoryChange = (e) => {
      this.setState({question_category: e.target.value});
  }

  //문의하기 버튼 메서드
    handleFormSubmit = async (e) => {


    }

  //텍스트필드 메서드
    handleValueChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

    render(){
    const {classes} = this.props;

    const category = [
      "결제관련",
      "요청관련",
      "여행관련",
      "마켓관련",
      "서비스관련",
      "기타",
  ];
  const category_list = category.map(
    (category, index) => (<MenuItem key={index} value={category}>{category}</MenuItem>))
    
      return(
        <React.Fragment>
          <CssBaseline />
          <Container>
            <div className={classes.paper}>
            <div>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link color="textPrimary" href="/servicecenter"><Typography variant="h5">문의리스트</Typography></Link>
              <Link color="textPrimary" href="/servicecenter/questionadd"><Typography variant="h5">문의하기</Typography></Link>
              </Breadcrumbs>
            </div>
            <Divider className={classes.Divider_header}/>
            {/* 문의 분류  */}
            <Container className={classes.Container}>
            <Grid className={classes.Grid_margin}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start">
              <Typography variant="h5">문의분류</Typography>
              <div>
                <FormControl>
                  <InputLabel>선택해주세요</InputLabel>
                    <Select
                      className={classes.answer}
                      label="선택해주세요"
                      labelId="CategoryLabel"
                      name="CategoryName"
                      id="CategoryName"
                      value={this.state.question_category}
                      onChange={this.handleCategoryChange}>
                        {category_list}
                    </Select>
                </FormControl>
              </div>
            </Grid>
            
            {/* 문의 제목  */}
            <Grid className={classes.Grid_margin}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Typography variant="h5">제목</Typography>
              <div>
                <TextField
                  className={classes.answer}
                  label="제목을 입력해주세요"
                  type="text"
                  name="question_name"
                  value={this.state.question_name}
                  onChange={this.handleValueChange}/>
              </div>
            </Grid>
            {/* 문의 파일  */}
            <Grid className={classes.Grid_margin}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
            <Typography variant="h5">이미지 업로드(선택)</Typography>
            <div>
            
            </div>
            </Grid>
            {/* 문의 내용  */}
            <Grid className={classes.Grid_margin}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start">
            <Typography variant="h5">내용</Typography>
            <div>
            <TextField
              className={classes.TextField_content}
              label="내용을 입력해주세요"
              type="text"
              name="question_explain"
              multiline="multiline"
              rows="6"
              variant="outlined"
              value={this.state.question_explain}
              onChange={this.handleValueChange}/>
            </div>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
            <Button
            borderColor="primary"
            onClick={this.handleFormSubmit}
            className={classes.Button_submit}
            variant="outlined">문의하기</Button>
            </Grid>
          </Container>
        </div>
      </Container>
    </React.Fragment>
  )
}
}
export default withStyles(styles)(QuestionAdd);