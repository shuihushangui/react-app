import React, {Component} from 'react'
import { Tabs, Layout } from 'antd';
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';
import one from '../img/one.jpg';

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

export default class ranking extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode: 'left',
      // 女频
      woman: [],
      // 男频
      man: [],
      // 带图
      picture: [],
      // 电子
      epub: [],
      now: 'a',
      boxNow: '1a'
    }
    this.handleBoxClick = this.handleBoxClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentWillMount () {
    processingRequest(urls.leaderboardType).then(res => {
      this.setState({
        woman: res.data.female,
        man: res.data.male,
        picture: res.data.picture,
        epub: res.data.epub,
      })
    })
  }

  handleBoxClick(e) {
    this.setState({
      boxNow: e,
    })
  }

  handleClick(e) {
    this.setState({
      now: e,
    })
  }

  handleItemClick(e) {
    let id = ''
    let ids = ''
    if (this.state.boxNow == '1a') {
      this.state.epub.forEach((item,index) => {
        if (index == e) {
          ids = item._id
        }
      })
    } else if (this.state.boxNow == '2a') {
      this.state.woman.forEach((item,index) => {
        if (index == e) {
          ids = item._id
        }
      })
    } else if (this.state.boxNow == '3a') {
      this.state.man.forEach((item,index) => {
        if (index == e) {
          ids = item._id
        }
      })
    } else if (this.state.boxNow == '4a') {
      this.state.picture.forEach((item,index) => {
        if (index == e) {
          ids = item._id
        }
      })
    }
    if (this.state.now == 'a') {
      id = '_id'
    } else if (this.state.now == 'b') {
      id = 'monthRank'
    }else if (this.state.now == 'c') {
      id = 'totalRank'
    }
    processingRequest(urls.leaderboard + id + '=' + ids).then(res => {
      console.log(res.data)
    })
  }

  render () {
    let itemImg = {
      // width: '15vw',
      // height: '100%',
      marginRight: '2vw',
    }

    let xImg = {
      width: '100%',
      height: '100%',
    }

    let itemTitle = {
      width: '20vw',
      height: '33%',
      fontSize: '20px',
    }

    let itemUser = {
      width: '20vw',
      height: '33%',
      lineHeight: '5vh',
    }

    return (
      <div>
        <Tabs defaultActiveKey="1a" centered className='tabRankingBox' onTabClick={this.handleBoxClick}>
          <TabPane tab="电子" key="1a">
            <Tabs defaultActiveKey="a" centered className='tabRankingItem' onTabClick={this.handleClick}>
              <TabPane tab="周榜" key="a">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.epub.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="月榜" key="b">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.epub.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="总榜" key="c">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.epub.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="女频" key="2a">
            <Tabs defaultActiveKey="a" centered className='tabRankingItem' onTabClick={this.handleClick}>
              <TabPane tab="周榜" key="a">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.woman.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="月榜" key="b">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.woman.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="总榜" key="c">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.woman.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="男频" key="3a">
            <Tabs defaultActiveKey="a" centered className='tabRankingItem' onTabClick={this.handleClick}>
              <TabPane tab="周榜" key="a">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.man.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="月榜" key="b">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.man.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="总榜" key="c">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.man.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="带图" key="4a">
            <Tabs defaultActiveKey="a" centered className='tabRankingItem' onTabClick={this.handleClick}>
              <TabPane tab="周榜" key="a">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.picture.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="月榜" key="b">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.picture.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
              <TabPane tab="总榜" key="c">
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode} onTabClick={this.handleItemClick} className='boxClassItem'>
                  {this.state.picture.map((v,i) => (
                    <TabPane tab={v.title} key={i}>
                      <Layout>
                        <Sider style={itemImg}>
                          <img style={xImg} src={one} alt="" />
                        </Sider>
                        <Layout>
                          <Header style={itemTitle}>标题</Header>
                          <Content className='itemContentClass'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                          <Footer style={itemUser}>作者</Footer>
                        </Layout>
                      </Layout>
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}