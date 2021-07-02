import React, {Component} from 'react'

export default class book extends Component {
	// handleClick2(data){
	// 	let path = {
	// 		pathname:"/book/mess",
	// 		state:data,
	// 	}
	// 	this.props.history.push(path)
  // }
  render () {
		// console.log(this.props)
    return (
      <div className='appBox'>
        <h1>书城</h1>
				{/* <Button onClick={() => this.handleClick2(data)}>Button</Button> */}
      </div>
    )
  }
}