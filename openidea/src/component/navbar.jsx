import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import ImageExampleFluid from './image'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    window.location ='/login'
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img  />
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
