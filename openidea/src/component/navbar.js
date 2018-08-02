import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import ImageExampleFluid from './image'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
<<<<<<< HEAD

=======
      
>>>>>>> 494693474ca367aac05eaef473d4c7b78c338420
      <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
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
      </Menu>
    )
  }
}
