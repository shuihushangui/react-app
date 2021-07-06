import React, {Component} from 'react'
import { Tabs } from 'antd';
import Recommend from "../components/recommend";
import Class from "../components/class";
import Ranking from "../components/ranking";

const { TabPane } = Tabs;

export default class book extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  
  render () {
    let marTop = {
      marginTop: '8vh',
      height: '84vh',
      overflowY: 'scroll',
    }

    return (
      <div className='appBox' style={marTop}>
        <Tabs defaultActiveKey="1" centered className='tabBox'>
          <TabPane tab="推荐" key="1">
            <Recommend />
          </TabPane>
          <TabPane tab="分类" key="2">
            <Class />
          </TabPane>
          <TabPane tab="榜单" key="3">
            <Ranking />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}