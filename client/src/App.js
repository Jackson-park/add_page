import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
//푸터
import Footer from './components/view/Footer.js';
//상단 메인 앱바
import LinkAppBar from './components/Appbar/LinkAppbar.js';
//메인화면
import Home from './components/view/Home.js';
//마이페이지
import Mypage from "./components/mypage/Mypage.js";
//결제내역 페이지
import Paymentdetails from "./components/Paymentdetail/Paymentdetails.js";
//상품상세 페이지
import Detail from "./components/productDetail/Detail.js";
//여행자등록 페이지
import Traveler from "./components/trip/Traveler.js";
//여행자 리스트 페이지
import Travelerlist from "./components/trip/Travelerlist.js";
//여행자 상세 페이지
import Travelerdetail from "./components/trip/Travelerdetail.js";
//상품등록 페이지
import ProductAdd from './components/Product_add_page/ProductAdd';

//상품 목록 페이지
import ProductList from './components/Product_list_page/ProductList' 

//회원가입 페이지
import Register from './components/Register/Register'

//로그인 페이지
import Login from './components/Login/Login'

//FAQ 페이지
import FAQ from './components/FAQ/FAQ'

//고객센터
import ServiceCenter from './components/Service center/ServiceCenter'

//문의작성 
import QuestionAdd from './components/QuestionAdd/QuestionAdd'
//정산현황
import Settlement from './components/Settlement/Settlement.js'
//이용약관
import Terms from './components/Terms_of_Use/Terms.js';
export default class App extends React.Component {

  render() {
    return (  
      <Router>
        <div>
          <LinkAppBar />
          <Switch>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/Mypage"} component={Mypage}></Route>
            <Route exact path={"/Paymentdetails"} component={Paymentdetails}></Route>
            <Route exact path={"/Detail"} component={Detail}></Route>
            <Route exact path={"/Traveler"} component={Traveler}></Route>
            <Route exact path={"/Travelerlist"} component={Travelerlist}></Route>
            <Route exact path={"/Travelerdetail"} component={Travelerdetail}></Route>
            <Route exact path='/product/add' component={ProductAdd} />
            <Route exact path='/product/list' component={ProductList} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/faq' component={FAQ}/>
            <Route exact path='/servicecenter' component={ServiceCenter}/>
            <Route exact path='/quetionadd' component={QuestionAdd}/>
            <Route exact path='/settlement' component={Settlement}/>
            <Route exact path='/Terms' component={Terms}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


