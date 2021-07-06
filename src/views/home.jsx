import React, {Component} from 'react'

export default class home extends Component {
  render () {
    let marTop = {
      marginTop: '8vh',
    }

    return (
      <div className='appBox' style={marTop}>
				<h1>书架</h1>
			</div>
    )
  }
}