import React, { Component } from "react";
import { Card, Icon, Image,Collapse } from 'semantic-ui-react'
// import { Collapse, CardBody } from 'reactstrap'

class CategoryCard extends Component {
  state = { collapse:true }
  toggle= this.toggle;
  toggle() {
    this.setState({ collapse: true })
  }
  render(){
    const { idea, users, categories } = this.props
    return(
        <Card>
          <Image src={idea.image_url} />
            <Card.Content >
              <Card.Header>{idea.title}</Card.Header>
              <Card.Meta>Joined in 2018</Card.Meta>
              <Card.Description >{idea.description}</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <div className="ui styled accordion">
              <div className='active title'>
                <a  onClick={ this.toggle } >
                  <Icon name='user' />
                    Show
                    <Card.Content isOpen={this.state.collapse}>
                      <Card>
                        <Card.Description className="">
                        Anim pariatur cliche reprehenderit,
                         enim eiusmod high life accusamus terry richardson ad squid. Nihil
                         anim keffiyeh helvetica, craft beer labore wes anderson cred
                         nesciunt sapiente ea proident.
                       </Card.Description>
                      </Card>
          </Card.Content>

                </a>
              </div>
            </div>


          </Card.Content>
        </Card>
    )
  }
}

export default CategoryCard;
