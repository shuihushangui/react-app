import React, {Component} from 'react'
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom'
import { Row, Col } from 'antd';
import { DatabaseOutlined, HomeOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import home from "../views/home";
import book from "../views/bookCity";
import user from "../views/user";
import Search from "../views/search";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      headerShow: true,
      footerShow: true,
      footerId: '1',
    }
    this.handleClickHome = this.handleClickHome.bind(this)
    this.handleClickBook = this.handleClickBook.bind(this)
    this.handleClickUser = this.handleClickUser.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleSetState = this.handleSetState.bind(this)
  }

  handleClickHome(){
    this.props.history.push('/home')
    this.setState({
      headerShow: true,
      footerShow: true,
      footerId: '1',
    })
  }

  handleClickBook(){
    // let path = {
		// 	pathname: "/book",
		// 	state: this.state.hotId,
		// }
    // this.props.history.push(path)
    this.props.history.push('/book')
    this.setState({
      headerShow: true,
      footerShow: true,
      footerId: '2',
    })
  }
  
  handleClickUser(){
    this.props.history.push(`/user`)
    this.setState({
      headerShow: false,
      footerShow: true,
      footerId: '3',
    })
  }

  handleSetState(){
    this.setState({
      headerShow: true,
      footerShow: true,
    })
  }

  handleClickSearch(){
    this.props.history.push(`/search`)
    this.setState({
      headerShow: false,
      footerShow: false,
    })
  }

  render () {
    let header = {
      width:'100%',
      height:'8vh',
      position:'fixed',
      top:'0px',
      right:'0px',
      backgroundColor:'#D2691E',
      zIndex: '999',
    }

    let title = {
      textAlign: 'center',
      lineHeight: '8vh',
      fontSize: '20px'
    }

    let footer = {
      width:'100%',
      height:'8vh',
      position:'fixed',
      bottom:'0px',
      right:'0px',
      borderTop:'1px solid #aaa',
      backgroundColor: '#fff',
      zIndex: '999'
    }

    let item = {
      display: 'flex',
      display: '-webkit-flex',
      alignItems:'center',
      justifyContent:'center',
    }

    return (
      <div>
        {
          this.state.headerShow ? (<Row style={header}>
            <Col span={2} style={item} onClick={this.handleClickUser}><UserOutlined /></Col>
            <Col span={20} style={title}>雨神阅读器</Col>
            <Col span={2} style={item} onClick={this.handleClickSearch}><SearchOutlined /></Col>
          </Row>) : ''
        }
        {
          this.state.footerShow ? (<Row style={footer}>
            <Col className={this.state.footerId == '1' ? 'activeColor' : ''} span={8} style={item} onClick={this.handleClickHome}>
              <div><DatabaseOutlined /></div>
              <div>书架</div>
            </Col>
            <Col className={this.state.footerId == '2' ? 'activeColor' : ''} span={8} style={item} onClick={this.handleClickBook}>
              <div><HomeOutlined /></div>
              <div>书城</div>
            </Col>
            <Col className={this.state.footerId == '3' ? 'activeColor' : ''} span={8} style={item} onClick={this.handleClickUser}>
              <div><UserOutlined /></div>
              <div>我的</div>
            </Col>
          </Row>) : ''
        }
        <Switch>
          <Route path='/home' component={home}/>
          <Route path='/book' component={book}/>
          <Route path='/user' component={user}/>
          <Route path='/search' render={() => (<Search {...this.props} onHandleSet={this.handleSetState} /> )} /> 
          <Redirect to='/home'/>
        </Switch>
			</div>
    )
  }
}

export default withRouter(App);