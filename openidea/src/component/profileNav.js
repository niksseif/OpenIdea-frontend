


import React, { Component } from 'react'
import { Menu,Image } from 'semantic-ui-react'
import ImageExampleFluid from './image'

export default class Profile extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    const { user, usersIdeas } = this.props


    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={user === undefined ? null : user.image_url}  avatar />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
        <Menu.Item name='sign-in' active={activeItem === 'sign-up'} onClick={this.handleItemClick} href="/signup" >
          Sign-Up
        </Menu.Item>
        {/* this is the search area */}
        <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}  >
        <div className="ui loading search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search..."></input>
              <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>

        </Menu.Item>
      </Menu>
    )
  }
}
