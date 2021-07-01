import React, {Component} from 'react'
import logo from '../logo.svg'
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    processingRequest(urls.allCategories).then(res => {
      console.log(res.data)
    })
  }

  render () {
    return (
      <div>
				<img onClick={this.handleClick} className='logo' src={logo} alt="logo" />
			</div>
    )
  }
}