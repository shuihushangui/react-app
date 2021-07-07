import React, {Component} from 'react'
import { Carousel, Layout } from 'antd';
import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';

const { Header, Footer, Sider, Content } = Layout;

export default class recommend extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render () {
    let view = {
      width: '100vw',
    }

    let image = {
      width: '100vw',
      height: '30vh',
    }

    let line = {
      width: '100vw',
      height: '1vh',
      backgroundColor: '#eee'
    }

    let box = {
      width: '100vw',
      height: '15vh',
      marginBottom: '3vh',
    }

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
        <Carousel autoplay style={view}>
          <div>
            <img style={image} src={one} alt="" />
          </div>
          <div>
            <img style={image} src={two} alt="" />
          </div>
          <div>
            <img style={image} src={three} alt="" />
          </div>
        </Carousel>
        <div style={line}></div>
        <ul className='bookItemBox'>
          <li style={box}>
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
          </li>
        </ul>
      </div>
    )
  }
}