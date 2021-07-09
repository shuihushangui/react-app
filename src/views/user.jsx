import React, {Component} from 'react'
import img from '../img/user.png';
import { SoundTwoTone, DashboardTwoTone, ProfileTwoTone, RightOutlined } from '@ant-design/icons';

export default class user extends Component {
  render () {
    let userBox = {
      width: '100vw',
      height: '30vh',
      backgroundColor: '#D2691E',
      display: 'flex',
      display: '-webkit-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    let imgBox = {
      display: 'inline-block',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
    }

    let hello = {
      width: '50%',
      height: '100px',
      color: '#fff',
      fontSize: '22px',
      marginLeft: '20px',
    }

    let item = {
      width: '100%',
      height: '50px',
      lineHeight: '50px',
    }

    let line = {
      width: '100vw',
      height: '1vh',
      backgroundColor: '#ccc'
    }

    let icon = {
      float: 'left',
      width: '10vw',
      height: '100%',
      display: 'flex',
      display: '-webkit-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    let text = {
      float: 'left',
      width: '80vw',
      height: '100%',
      lineHeight: '8vh',
      textIndent: '1em',
      fontSize: '18px'
    }

    let right = {
      float: 'left',
      width: '10vw',
      height: '100%',
      display: 'flex',
      display: '-webkit-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    let itemBox = {
      width: '100%',
      height: '8vh',
    }

    return (
      <div className='activeAppBox'>
        <div style={userBox}>
          <div style={imgBox}><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
          <div style={hello}>
            <div style={item}>您好</div>
            <div style={item}>150****0173</div>
          </div>
        </div>
        <h2 style={{marginTop: '20px', textIndent: '1em', fontWeight: 'bold'}}>个人中心</h2>
        <div style={itemBox}>
          <div style={icon}><SoundTwoTone twoToneColor="#D2691E" style={{fontSize: '28px'}} /></div>
          <div style={text}>消息通知</div>
          <div style={right}><RightOutlined style={{fontSize: '20px'}} /></div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div style={line}></div>
        <div style={itemBox}>
          <div style={icon}><DashboardTwoTone twoToneColor="#D2691E" style={{fontSize: '28px'}} /></div>
          <div style={text}>最近浏览</div>
          <div style={right}><RightOutlined style={{fontSize: '20px'}} /></div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div style={line}></div>
        <div style={itemBox}>
          <div style={icon}><ProfileTwoTone twoToneColor="#D2691E" style={{fontSize: '28px'}} /></div>
          <div style={text}>我的书单</div>
          <div style={right}><RightOutlined style={{fontSize: '20px'}} /></div>
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    )
  }
}