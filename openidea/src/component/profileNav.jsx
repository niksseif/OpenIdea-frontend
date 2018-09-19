


import React, { Component } from 'react'
import { Menu,Image } from 'semantic-ui-react'
import ImageExampleFluid from './image'

export default class Profile extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.location ='/feeds'
  }

  handleItemClickHome = (e, { name }) => {
    this.setState({ activeItem: name })
    window.location ='/'
  }

  render() {
    const { activeItem } = this.state
    const { id, users } = this.props
    console.log(this.props,"<<<<")
    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={users === undefined ? null : users.image_url}  avatar />
        </Menu.Item>

        <Menu.Item
          name='main'
          active={activeItem === 'main'}
          onClick={this.handleItemClickHome}
        >
          Main
        </Menu.Item>
        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Public ideas
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
        <Menu.Item name='sign-in' active={activeItem === 'sign-up'} onClick={this.handleItemClick} href="/signup" >
          Sign-Up
        </Menu.Item>
        {/* this is the search area */}
        <Menu.Item 
        name='search' 
        active={activeItem === 'search'} 
        // onClick={this.handleItemClick}  
        >
        <div className="ui loading search">
          <div className="ui icon input">
            <input 
            className="prompt" 
            type="text" 
            placeholder="Search..."
            >
            </input>
              <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        </Menu.Item>
      </Menu>
    )
  }
}
