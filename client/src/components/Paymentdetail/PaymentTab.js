import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './PaymentTabPanel.js';

class PaymentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  render() {
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
          <Tab label="전체" {...this.a11yProps(0)} />
          <Tab label="매칭대기" {...this.a11yProps(1)} />
          <Tab label="결제전" {...this.a11yProps(2)} />
		  <Tab label="결제완료" {...this.a11yProps(3)} />
		  <Tab label="거래완료" {...this.a11yProps(4)} />
		  <Tab label="환불처리중" {...this.a11yProps(5)} />
		  <Tab label="취소완료" {...this.a11yProps(6)} />

        </Tabs>
      <TabPanel value={this.state.value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={this.state.value} index={2}>
        Item Thrㅁㄴㅇㅁee
      </TabPanel>
	  <TabPanel value={this.state.value} index={3}>
        Item Thㅁㄴㅇㄴㅁㅇㅇree
      </TabPanel>
	  <TabPanel value={this.state.value} index={4}>
        Item Tㅇㅇㅇhree
      </TabPanel>
	  <TabPanel value={this.state.value} index={5}>
        Item Tㅁㅁㅁhree
      </TabPanel>
	  <TabPanel value={this.state.value} index={6}>
        Item Thㅇree
      </TabPanel>
      </div>
    );
  }
}
export default PaymentTab;