import React from 'react'
import "./servicecenter.css"
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Appbar from '../Appbar/Appbar1'
import { Divider, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { display } from '@material-ui/system';


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      icon:{
        paddingTop:5,
        width:30,
        height:30
      },
      Link_appbar:{
        marginRight:30,
      },
      form:{
        width:1200
      },
      Typography_header:{
        marginBottom:5
      },
      Divider_header:{
        border: "1px solid",
        color:""
      },
      table: {
        minWidth: 700,
      },
      TableBody:{
        alignItems: 'center'
      },
      styledTablecell_question_name:{
        width:600,
        height:50,
      }

})



  function createData(Question_name, Now_state, Date) {
    return { Question_name, Now_state, Date };
  }

  let today=new Date();

class ServiceCenter extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
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
    
    //데이터 삽입 배열
    const rows = [
      
      createData('사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?사다드림이 뭐죠?',"처리중",today.toLocaleString()),
      createData('사다드림이 뭐죠?',"처리중",today.toLocaleString()),
      createData('사다드림이 뭐죠?',"처리중",today.toLocaleString()),
      createData('사다드림이 뭐죠?',"처리중",today.toLocaleString()),
      createData('사다드림이 뭐죠?',"처리중",today.toLocaleString()),
    ];

    //셀 스타일 지정
    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: "#c0c0c0",
        color: theme.palette.common.black,
        
      },
      body: {
        align:"center",
        fontSize: 20,
      },
    }))(TableCell);

    //데이터 셀에 스타일 지정
    const StyledTableRow = withStyles((theme) => ({
      root: {
        
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    }))(TableRow);


        return(
        <React.Fragment>
              
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-end"
                    >
                      <Typography className={classes.Typography_header} variant="h5">문의 리스트</Typography>
                        <Link href="/servicecenter/questionadd">
                          <Typography variant="h6">문의 작성하기</Typography>
                        </Link>
                    </Grid>

                      <Divider className={classes.Divider_header}/>
                      <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">제목</StyledTableCell>
                          <StyledTableCell align="center">현재 상태</StyledTableCell>
                          <StyledTableCell align="center">등록일</StyledTableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.TableBody}>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            
                            <StyledTableCell className={classes.styledTablecell_question_name} component="th" scope="row" align="center">
                              {/*div태그->Box태그->데이터 이렇게 해야 텍스트 오버플로우 가능  */}
                            <div style={{ width: 600, whiteSpace: 'nowrap' }}>
                            <Box
                                component="div"
                                textOverflow="ellipsis"
                                overflow="hidden"
                              >
                              {row.Question_name}
                            </Box>
                          </div>
                            </StyledTableCell>
                        
                            <StyledTableCell align="center">{row.Now_state}</StyledTableCell>
                            <StyledTableCell align="center">{row.Date}</StyledTableCell>
                          
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </form>
                </div>
                </Container>
        </React.Fragment>
        )
    }

}
export default withStyles(styles)(ServiceCenter);