import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/view/Footer.js';
import LinkAppBar from './components/Appbar/LinkAppbar.js.js';
import Home from './components/view/Home.js';
import Mypage from "./components/mypage/Mypage.js";
import Paymentdetails from "./components/Paymentdetails.js";
import Detail from "./components/productDetail/Detail.js";
import Traveler from "./components/trip/Traveler.js";
import Travelerlist from "./components/trip/Travelerlist.js";
import Travelerdetail from "./components/trip/Travelerdetail.js";

import ProductAdd from './Product_add_page/ProductAdd';

//상품 목록 페이지
import ProductList from './Product_list_page/ProductList' 

//회원가입 페이지
import Register from './Register/Register'

//로그인 페이지
import Login from './Login/Login'

//FAQ 페이지
import FAQ from './FAQ/FAQ'

//고객센터
import ServiceCenter from './Service center/ServiceCenter'

//문의작성 
import QuestionAdd from './QuestionAdd/QuestionAdd'

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
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

