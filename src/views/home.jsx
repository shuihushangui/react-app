import React, {Component} from 'react'
import img from '../img/img.jpg';
import { Modal } from 'antd'
import { FieldTimeOutlined } from '@ant-design/icons';

export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      bookLists: [{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      },{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      },{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      },{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      },{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      },{
        title: '三国',
        new: '第三千六百五十二章',
        time: '2021-07-23 08:35',
      }],
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleClick (e) {
    this.setState({
      visible: true
    })
  }

  handleOk () {
    this.setState({
      visible: false
    })
  };

  handleCancel () {
    this.setState({
      visible: false
    })
  };

  render () {
    let marTop = {
      marginTop: '8vh',
      height: '84vh',
      overflowY: 'scroll',
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
      width: '67%',
      height: '100%',
      float: 'left',
      paddingLeft: '10px',
    }

    return (
      <div className='appBox' style={marTop}>
				{
          this.state.bookLists.map((e,i) => {
            return <div key={i}>
              <div style={line}></div>
              <div style={itemBox}  onClick={() => this.handleClick(e)}>
                <div style={itemImgBox}><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
                <div style={contentBox}>
                  <div style={{fontSize: '18px', height: '40%', lineHeight: '8vh'}}>{e.title}</div>
                  <div style={{height: '20%', lineHeight: '4vh'}}>最新：{e.new}</div>
                  <div style={{height: '40%', lineHeight: '8vh'}}><FieldTimeOutlined style={{marginRight: '10px'}} />{e.time}</div>
                </div>
                <div style={{clear: 'both'}}></div>
              </div>
              <div style={line}></div>
            </div>
          })
        }
        <Modal title="" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p style={{textAlign: 'center'}}>确定移除此书吗？</p>
        </Modal>
			</div>
    )
  }
}