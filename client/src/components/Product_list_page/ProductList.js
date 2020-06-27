import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Divider, Grid} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea'
import foo from "./cookie.jpg";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import ProductCard from './ProductCard'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './productlist.css';
import Appbar from '../Appbar/Appbar1';


//국기 이미지
import USA from "./Country_flag/u-s.png"
import JP from "./Country_flag/j-p.png"
import FRANCE from "./Country_flag/france.png"
import Germany from "./Country_flag/germany.png"
import italy from "./Country_flag/italy.png"
import UK from "./Country_flag/u-k.png"
import VN from "./Country_flag/v-n.png"
import all from "./Country_flag/earth-sm.png"

//더보기 이미지
import more_icon from "./icon/more-icon.png"

  const styles = theme => ({


    div_app: {
      width: '100%',
      flexDirection: 'column',
  
    },
    div_more_icon:{
      flexDirection:'column'
    }
    ,
  
    
    Link_product_list: {
      fontSize: 30,
    },
    Link_product_add: {
      paddingLeft: 30
    },
    Divider: {
      border: "1px solid",
      marginTop: 1,
    },
    header_Divider:{
      border: "1px solid",
      marginTop: 1,
      marginBottom:20,
      width: '100%',
    },
    Grid_navigator: {
      width: 180,
      minHeight: 500
    },
    Grid_content: {
      marginLeft: 200,
      width: '100%', //컨텐츠 그리드 길이
      position: 'absolute' //화면확대 해도 고정시키는 기능 !!
    },
    Grid_header:{
      marginTop:20,
      marginBottom:20
    },
    ListItemText_Category: {
      width: 180,
      height: 30,
      marginTop:10,
      
      '&:hover': {
        color:"#6495ED"
      },
  
    },
    ListSubheader_category: {
      fontSize: 20
    },
    ListSubheader_country: {
      marginTop: 10,
      fontSize: 20,
    },
    Typography_content: {
    
    },
    Button_Showlist: {
      marginLeft: 20,
      marginTop:5,
      '&:hover': {
        color:"#6495ED"
      },
    }
    ,
    Button_more_icon:{
      fontSize:20,
    
      '&:hover': {
        color:"#6495ED"
      },
  
    },
    img_more_icon:{
      marginRight:5
    },

    Container:{
        align:"50%"
    },

    //여기서부터 검색창 스타일
    div_search:{
      paddingLeft:600
    },
    search: {
      position: 'relative',
      backgroundColor: "#e6e6fa",
      '&:hover': {
        backgroundColor: "#e6e6fa",
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
      },
      },
  
      searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      },
  
      inputRoot: {
      color: 'inherit',
      width: '100%',
      },
  
      inputInput: {
      color:'#708090',
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
      width: 200,
      },
      },
      }
  
  });

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          product_list: [],
          product_num: 0,
          more_icon:'none',
          more_icon2:'',
          more_icon3:'none',
          more_icon4:''
        }
      }

  // 카테고리 더보기 아이콘 함수
  handleMoreIcon = (e) => {
    this.setState({
      more_icon:'',
      more_icon2:"none"
  })
};

  // 나라별 더보기 아이콘 함수
  handleMoreIcon2 = (e) => {
    this.setState({
      more_icon3:'',
      more_icon4:"none"
  })
};

  // 모든 요소가 렌더링 된 후에 실행되는 함수 (리액트 생명주기)
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({product_list: this.state.product_list.concat(res)}))
      .catch(err => console.log(err));
  }

  // 데이터를 서버로부터 불러오는 함수
  callApi = async () => {
    const response = await fetch('/products/ask/list')
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props;
    // 요청 상품 리스트 MAP
    const product_list = this.state.product_list.map((product, index) => (
      <ProductCard request_from={product.u_id}
                   request_to={product.req_id}
                   product_name={product.prod_name}
                   product_discription={product.prod_discription}
                   product_price={product.prod_price}
                   product_time_of_enroll={product.prod_requirement}>

      </ProductCard>
    ));

    return(
      <React.Fragment>
      <CssBaseline />
        <Container className={classes.Container} component="main" >

        <div className={classes.div_app}>
      
          {/* 위치: 중앙 */}

            {/*헤더 */}
            <Grid  container
              className={classes.Grid_header}
              direction="row"
              justify="flex-start"
              alignItems="flex-end">

                  <Link className={classes.Link_product_list} href="/product/list">
                    {"상품 목록"}
                  </Link>

                  <Link className={classes.Link_product_add} href="/product/add">
                    {"상품 추가하기"}
                  </Link>
           {/* 검색창 */}
           <div className={classes.div_search}>
            <Box  borderRadius={16} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
                    <InputBase
                    placeholder="검색하기"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    name="searchKeyword"
                    value={this.searchKeyword}
                    onChange={this.handleValueChange}
                    />
              </Box>
            </div>  
            </Grid>
      
            <Divider className={classes.header_Divider}/>

            <Grid container direction="row" justify="flex-start" alignItems="baseline">

              {/* 나비게이터(카테고리)  */}
              <Grid className={classes.Grid_navigator}>

                {/* 리스트(카테고리) */}
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader className={classes.ListSubheader_category} component="div" id="nested-list-subheader">
                      카테고리
                      </ListSubheader>}
                  className={classes.root}>

                  <ListItem button className={classes.ListItemText_Category}>
                    <Typography variant="h7">전체</Typography>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                    <Typography variant="h7">뷰티/미용</Typography>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                    <Typography variant="h7">식료품</Typography>
                  </ListItem>
                  
                  {/* 더보기 아이콘 */}
                  <Button style={{display:this.state.more_icon2}} className={classes.Button_more_icon} onClick={this.handleMoreIcon} ><img className={classes.img_more_icon} src={more_icon}/>더보기</Button>

                  <div className={classes.div_more_icon}  style={{display:this.state.more_icon}}>
                  <ListItem button className={classes.ListItemText_Category}>
                  <Typography variant="h7">헬스/건강</Typography>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                  <Typography variant="h7">전자제품</Typography>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                  <Typography variant="h7">악세사리</Typography>
                  </ListItem>
                  </div>

                </List>

                <Divider/>

                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                    className={classes.ListSubheader_country}
                    component="div"
                    id="nested-list-subheader">
                      나라별
                    </ListSubheader>}
                  className={classes.root}>
                  
                  <ListItem button className={classes.ListItemText_Category}>
                  <Typography variant="h7">전체</Typography>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={USA}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">미국</Typography>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={JP}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">일본</Typography>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={FRANCE}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">프랑스</Typography>
                  </ListItem>
                  
                  {/* 더보기 아이콘 */}
                  <Button style={{display:this.state.more_icon4}} className={classes.Button_more_icon} onClick={this.handleMoreIcon2} ><img className={classes.img_more_icon} src={more_icon}/>더보기</Button>

                  <div className={classes.div_more_icon}  style={{display:this.state.more_icon3}}>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={italy}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">이탈리아</Typography>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={UK}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">영국</Typography>
                  </ListItem>

                  
                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={VN}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">베트남</Typography>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={all}  className={classes.small} />
                    </ListItemIcon>
                    <Typography variant="h7">기타국가</Typography>
                  </ListItem>
                  </div>

                </List>
                <Divider/>

              </Grid>

              <Grid container direction="column" justify="flex-start" alignItems="flex-start"
                    className={classes.Grid_content}>

                {/* 상품 건수, 목록 버튼 */}
                <Grid container direction="row" justify="flex-start" alignItems="center"
                      className={classes.Grid_content_header}>
                  <Typography className={classes.Typography_content}
                              variant="h5">{this.state.product_number}</Typography>
                  <Typography className={classes.Typography_content}
                              variant="h5">{this.state.product_list.length}건</Typography>
                  <Button className={classes.Button_Showlist}>최신순</Button>
                  <Button className={classes.Button_Showlist}>마감순</Button>
                  <Button className={classes.Button_Showlist}>가격낮은순</Button>

                  <Divider></Divider>
                </Grid>

                <Grid container>
                  {/*foo1*/}
                  {/* 컨텐츠(상품카드) */}
                  {product_list}
                  

                </Grid>

         {/* 페이지 수 */}
              <Grid 
              className="grid" > 
                <Link  variant="h5" href="#">1</Link>
              <Divider></Divider>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      </React.Fragment>
    )

}
}



export default withStyles(styles)(ProductList);