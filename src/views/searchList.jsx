import React, {Component} from 'react'
import { Row, Col, Input, message } from 'antd'
import { LeftOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';
import img from '../img/img.jpg';

import axios from 'axios';

export default class searchList extends Component {
	constructor(props){
    super(props)
    this.state = {
      value: '',
      bookList: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClickBook = this.handleClickBook.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentWillMount () {
    this.setState({
      bookList: this.props.location.state,
    });
  }

	handleClick(){
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
        this.setState({
          bookList: res.data.books,
          value: '',
        });
      })
    } else {
      message.warning('请输入书名或作者');
    }
  }
  
  handleClickBook(e){
    let path = {
      pathname: "/details",
      state: e,
    }
    this.props.history.push(path)
  }

  handleAdd(){
    // console.log(444)
    // axios.post('/getFood').then((res) => {
    //   console.log(res);
    // }).catch((error) => {
    //   console.log(error);
    // })
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

    let line = {
      width: '100vw',
      height: '1vh',
      backgroundColor: '#fff'
    }

    let itemBox = {
      width: '100vw',
      height: '20vh',
    }

    let itemImgBox = {
      width: '33%',
      height: '100%',
      float: 'left',
    }

    let contentBox = {
      width: '50%',
      height: '100%',
      float: 'left',
      paddingLeft: '10px',
    }

    let add = {
      width: '17%',
      height: '100%',
      float: 'left',
      display: 'flex',
      display: '-webkit-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    let cat = {
      backgroundColor: '#ddd',
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
        {
          this.state.bookList.map((e,i) => {
            return <div key={i}>
              <div style={line}></div>
              <div style={itemBox} onClick={() => this.handleClickBook(e)}>
                <div style={itemImgBox}><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
                <div style={contentBox}>
                  <div style={{fontSize: '18px', height: '23%'}}>{e.title}</div>
                  <div style={{height: '23%'}}><span style={cat}>{e.cat}</span></div>
                  <div style={{height: '23%'}}>{e.author}</div>
                  <div style={{height: '31%'}} className='jianjie'>{e.shortIntro}</div>
                </div>
                <div style={add} onClick={this.handleAdd}><PlusCircleOutlined style={{fontSize: '20px'}} /></div>
                <div style={{clear: 'both'}}></div>
              </div>
              <div style={line}></div>
            </div>
          })
        }
			</div>
    )
  }
}