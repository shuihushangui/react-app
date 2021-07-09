import React, {Component} from 'react'
import { Row, Col } from 'antd'
import { LeftOutlined, UnorderedListOutlined } from '@ant-design/icons';
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';
import img from '../img/img.jpg';

export default class details extends Component {
	constructor(props){
    super(props)
    this.state = {
			bookDetail: {},
			number: null,
		}
    this.handleClick = this.handleClick.bind(this)
  }

	componentWillMount () {
		processingRequest(urls.book + this.props.location.state._id).then(res => {
			this.setState({
				bookDetail: res.data,
				number: res.data.rating.score,
			})
		})
  }

	handleClick(){
    this.props.history.go(-1)
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
      width: '67%',
      height: '100%',
      float: 'left',
      paddingLeft: '10px',
    }

		let line = {
      width: '100vw',
      height: '1vh',
      backgroundColor: '#ccc'
    }

		let footer = {
      width:'100%',
      height:'8vh',
      position:'fixed',
      bottom:'0px',
      right:'0px',
      backgroundColor: '#fff',
      zIndex: '999'
    }

		let footerItem = {
      display: 'flex',
      display: '-webkit-flex',
      alignItems:'center',
      justifyContent:'center',
			backgroundColor: '#D2691E',
			color: '#fff',
			borderRight: '1px solid #fff'
    }

		let footerItem2 = {
      display: 'flex',
      display: '-webkit-flex',
      alignItems:'center',
      justifyContent:'center',
			backgroundColor: '#D2691E',
			color: '#fff',
    }

    return (
      <div>
				<Row style={header}>
          <Col span={4} style={item} onClick={this.handleClick}><LeftOutlined /></Col>
          <Col span={20} style={item}></Col>
        </Row>
				<div style={itemBox}>
					<div style={itemImgBox}><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
					<div style={contentBox}>
						<div style={{fontSize: '18px', height: '30%', lineHeight: '6vh'}}>{this.state.bookDetail.title}</div>
						<div style={{height: '20%', lineHeight: '4vh'}}>作者：{this.state.bookDetail.author}</div>
						<div style={{height: '20%', lineHeight: '4vh'}}>类型：{this.state.bookDetail.cat}</div>
						<div style={{height: '30%', lineHeight: '6vh'}}>评分：{this.state.number}</div>
					</div>
					<div style={{clear: 'both'}}></div>
				</div>
				<div style={line}></div>
				<div>
					<div style={{textAlign: 'left', paddingLeft: '10px', fontSize: '18px'}}>简介</div>
					<p style={{padding: '0px 10px', textIndent: '2em'}}>{this.state.bookDetail.longIntro}</p>
				</div>
				<div style={line}></div>
				<div>
					<div style={{textAlign: 'left', paddingLeft: '10px', fontSize: '18px'}}>目录</div>
					<div style={{width: '100vw', height: '8vh'}}>
						<div style={{float: 'left', width: '10%', height: '100%', paddingLeft: '10px'}}><UnorderedListOutlined style={{fontSize: '24px', textAlign: 'center', lineHeight: '8vh'}} /></div>
						<div style={{float: 'left', width: '90%', height: '100%', paddingLeft: '10px'}}>
							<div style={{width: '100%', height: '50%', color: '#aaa', lineHeight: '4vh'}}>最近更新：{this.state.bookDetail.updated}</div>
							<div style={{width: '100%', height: '50%', lineHeight: '4vh'}}>{this.state.bookDetail.lastChapter}</div>
						</div>
						<div style={{clear: 'both'}}></div>
					</div>
				</div>
				<div style={line}></div>
				<Row style={footer}>
					<Col span={12} style={footerItem}>加入书架</Col>
					<Col span={12} style={footerItem2}>立即阅读</Col>
				</Row>
			</div>
    )
  }
}