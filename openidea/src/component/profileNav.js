


import React, { Component } from 'react'
import { Menu,Image } from 'semantic-ui-react'
import ImageExampleFluid from './image'

export default class Profile extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.props,"<<<<user in profileNav");
    const { activeItem } = this.state
    const { user } = this.props
    console.log("user deconstructed - ", user);

    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={user === undefined ? null : user.img_url}  avatar />
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
      </Menu>
    )
  }
}
