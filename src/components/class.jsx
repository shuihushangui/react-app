import React, {Component} from 'react'
import { Tabs, Layout } from 'antd';
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';
import one from '../img/one.jpg';

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

export default class classification extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode: 'top',
      // 女频
      woman: [],
      // 男频
      man: [],
      // 带图
      picture: [],
      // 出版
      press: [],
    }
  }

  componentWillMount () {
    processingRequest(urls.smallCategory).then(res => {
      this.setState({
        woman: res.data.female,
        man: res.data.male,
        picture: res.data.picture,
        press: res.data.press,
      })
    })
  }

  render () {
    let itemImg = {
      width: '30vw',
      height: '100%',
      marginRight: '2vw',
    }

    let xImg = {
      width: '100%',
      height: '100%',
    }

    let itemTitle = {
      width: '50vw',
      height: '33%',
      fontSize: '20px',
    }

    let itemUser = {
      width: '50vw',
      height: '33%',
      lineHeight: '5vh',
    }

    return (
      <div>
        <Tabs defaultActiveKey="a" centered className='tabClassBox'>
          <TabPane tab="女频" key="a">
            <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
              {this.state.woman.map((v,i) => {
                return <TabPane tab={v.major} key={i}>
                  {
                    v.mins.length != 0 ? (<Tabs defaultActiveKey="0a" tabPosition={this.state.mode}>
                      {
                        v.mins.map((item,index) => {
                          return <TabPane tab={item} key={index + 'a'}>
                            <Layout>
                              <Sider style={itemImg}>
                                <img style={xImg} src={one} alt="" />
                              </Sider>
                              <Layout>
                                <Header style={itemTitle}>标题</Header>
                                <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                                <Footer style={itemUser}>作者</Footer>
                              </Layout>
                            </Layout>
                          </TabPane>
                        })
                      }</Tabs>
                    ) : (<Layout>
                      <Sider style={itemImg}>
                        <img style={xImg} src={one} alt="" />
                      </Sider>
                      <Layout>
                        <Header style={itemTitle}>标题</Header>
                        <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                        <Footer style={itemUser}>作者</Footer>
                      </Layout>
                    </Layout>)
                  }
                </TabPane>
              })}
            </Tabs>
          </TabPane>
          <TabPane tab="男频" key="b">
            <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
              {this.state.man.map((v,i) => {
                return <TabPane tab={v.major} key={i}>
                  {
                    v.mins.length != 0 ? (<Tabs defaultActiveKey="0a" tabPosition={this.state.mode}>
                      {
                        v.mins.map((item,index) => {
                          return <TabPane tab={item} key={index + 'a'}>
                            <Layout>
                              <Sider style={itemImg}>
                                <img style={xImg} src={one} alt="" />
                              </Sider>
                              <Layout>
                                <Header style={itemTitle}>标题</Header>
                                <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                                <Footer style={itemUser}>作者</Footer>
                              </Layout>
                            </Layout>
                          </TabPane>
                        })
                      }</Tabs>
                    ) : (<Layout>
                      <Sider style={itemImg}>
                        <img style={xImg} src={one} alt="" />
                      </Sider>
                      <Layout>
                        <Header style={itemTitle}>标题</Header>
                        <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                        <Footer style={itemUser}>作者</Footer>
                      </Layout>
                    </Layout>)
                  }
                </TabPane>
              })}
            </Tabs>
          </TabPane>
          <TabPane tab="带图" key="c">
            <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
              {this.state.picture.map((v,i) => {
                return <TabPane tab={v.major} key={i}>
                  {
                    v.mins.length != 0 ? (<Tabs defaultActiveKey="0a" tabPosition={this.state.mode}>
                      {
                        v.mins.map((item,index) => {
                          return <TabPane tab={item} key={index + 'a'}>
                            <Layout>
                              <Sider style={itemImg}>
                                <img style={xImg} src={one} alt="" />
                              </Sider>
                              <Layout>
                                <Header style={itemTitle}>标题</Header>
                                <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                                <Footer style={itemUser}>作者</Footer>
                              </Layout>
                            </Layout>
                          </TabPane>
                        })
                      }</Tabs>
                    ) : (<Layout>
                      <Sider style={itemImg}>
                        <img style={xImg} src={one} alt="" />
                      </Sider>
                      <Layout>
                        <Header style={itemTitle}>标题</Header>
                        <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                        <Footer style={itemUser}>作者</Footer>
                      </Layout>
                    </Layout>)
                  }
                </TabPane>
              })}
            </Tabs>
          </TabPane>
          <TabPane tab="出版" key="d">
            <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
              {this.state.press.map((v,i) => {
                return <TabPane tab={v.major} key={i}>
                  {
                    v.mins.length != 0 ? (<Tabs defaultActiveKey="0a" tabPosition={this.state.mode}>
                      {
                        v.mins.map((item,index) => {
                          return <TabPane tab={item} key={index + 'a'}>
                            <Layout>
                              <Sider style={itemImg}>
                                <img style={xImg} src={one} alt="" />
                              </Sider>
                              <Layout>
                                <Header style={itemTitle}>标题</Header>
                                <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                                <Footer style={itemUser}>作者</Footer>
                              </Layout>
                            </Layout>
                          </TabPane>
                        })
                      }</Tabs>
                    ) : (<Layout>
                      <Sider style={itemImg}>
                        <img style={xImg} src={one} alt="" />
                      </Sider>
                      <Layout>
                        <Header style={itemTitle}>标题</Header>
                        <Content className='itemContent'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Content>
                        <Footer style={itemUser}>作者</Footer>
                      </Layout>
                    </Layout>)
                  }
                </TabPane>
              })}
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}