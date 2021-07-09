import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import { Row, Col, Input, message } from 'antd';
import { LeftOutlined, SearchOutlined, SyncOutlined } from '@ant-design/icons';
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';

export default class search extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      hots: [],
      hot: [],
      nowId: 0,
      searchList: [],
      bookList: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentWillMount () {
    processingRequest(urls.searchHot).then(res => {
      this.setState({
        hots: res.data.searchHotWords,
        hot: res.data.searchHotWords.slice(this.state.nowId,this.state.nowId + 10),
      })
    })
  }

  handleClick(){
    this.props.onHandleSet()
    this.props.history.go(-1)
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleClickSearch(word){
    if (word) {
      processingRequest(urls.blurrySearch,{query:word}).then(res => {
        let _searchList = this.state.searchList;
        _searchList.push(word);
        this.setState({
          searchList: _searchList,
          bookList: res.data.books,
        });
        let path = {
          pathname: "/searchList",
          state: this.state.bookList,
        }
        this.props.history.push(path)
      })
    } else {
      message.warning('请输入书名或作者');
    }
  }

  handleSearch(){
    this.state.nowId == 100 ? this.state.nowId = 0 :(this.setState({ nowId: this.state.nowId + 10 }))
    this.setState({
      hot: this.state.hots.slice(this.state.nowId,this.state.nowId + 10),
    })
  }

  handleClear(){
    this.setState({
      searchList: []
    });
  }

  componentWillUnmount () {
    this.setState = (state,callback)=>{
      return;
    };
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

    let headerBox = {
      width:'100%',
      height:'5vh',
    }

    let boxItem = {
      fontSize: '16px',
      textAlign: 'center',
      lineHeight: '5vh',
    }

    let boxItem2 = {
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '5vh',
    }

    let itemName = {
      textIndent: '3em',
      lineHeight: '5vh',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }

    let line = {
      width: '100vw',
      height: '1vh',
      backgroundColor: '#eee'
    }

    let searchItem = {
      backgroundColor: '#ddd',
      marginLeft: '2vw',
      wordBreak: 'normal',
      display: 'inline-block',
    }

    return (
      <div>
        <Row style={header}>
          <Col span={3} style={item} onClick={this.handleClick}><LeftOutlined /></Col>
          <Col span={18} style={item}>
            <Input value={this.state.value} onChange={this.handleChange} size="large" placeholder="搜索书名或作者" prefix={<SearchOutlined />} />
          </Col>
          <Col span={3} style={item} onClick={() => this.handleClickSearch(this.state.value)}>搜索</Col>
        </Row>
        <Row style={headerBox}>
          <Col span={5} style={boxItem}>热门搜索</Col>
          <Col span={14}></Col>
          <Col span={5} style={boxItem2} onClick={this.handleSearch}><SyncOutlined />换一批</Col>
        </Row>
        <Row>
          {this.state.hot.map((e,i) => {
            return <Col span={12} style={itemName} key={i} onClick={() => this.handleClickSearch(e.word)}><span style={{color: (i == '0' || i == '1' || i == '2') ? '#D2691E' : 'none'}}>{i+1}</span>&nbsp;&nbsp;{e.word}</Col>
          })}
        </Row>
        <div style={line}></div>
        <Row style={headerBox}>
          <Col span={5} style={boxItem}>搜索历史</Col>
          <Col span={14}></Col>
          <Col span={5} style={boxItem2} onClick={this.handleClear}>清空历史</Col>
        </Row>
        {this.state.searchList.map((e,i) => {
          return <p style={searchItem} key={i}>{e}</p>
        })}
      </div>
    )
  }
}