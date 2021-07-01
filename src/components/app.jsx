import React, {Component} from 'react'
import urls from "../api/urls";
import processingRequest from '../api/processingRequest';
import { Button } from 'antd';

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
        <Button onClick={this.handleClick} type="primary">Button</Button>
			</div>
    )
  }
}