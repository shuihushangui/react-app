import React, {Component} from 'react'
import { Row, Col, Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';

export default class search extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(){
    this.props.onHandleSet()
    this.props.history.go(-1)
  }

  handleChange(e){
    this.setState({
      value:e.target.value.trim()
    })
  }

  handleClickSearch(){
    console.log(this.state.value)
    // if (this.state.value) {
    //   this.props.add(this.state.value)
    //   this.setState({
    //     value:this.props.text
    //   })
    // }
  }

  render () {
    let header = {
      width:'100%',
      height:'8vh',
      position:'relative',
      top:'0px',
      right:'0px',
      backgroundColor:'#D2691E',
      color:'#fff'
    }
    
    let item = {
      display: 'flex',
      display: '-webkit-flex',
      alignItems:'center',
      justifyContent:'center',
    }

    return (
      <div>
        <Row style={header}>
          <Col span={3} style={item} onClick={this.handleClick}><LeftOutlined /></Col>
          <Col span={18} style={item}>
            <Input value={this.state.value} onChange={this.handleChange} size="large" placeholder="搜索书名或作者" prefix={<SearchOutlined />} />
          </Col>
          <Col span={3} style={item} onClick={this.handleClickSearch}>搜索</Col>
        </Row>
      </div>
    )
  }
}