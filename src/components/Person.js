'use strict';
import * as React from 'react'
import Avatar from 'avataaars'
import StoreContext from '../storeContext';

const styles = {
  avatar: {
    // Sizing
    width: '300px',
    height: '300px',
  }
};

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicalChars: {},
      currentOutfit: {},
    }
  }

  componentDidMount() {
    const storeState = this.context.getState();
    this.setState({
      currentOutfit: storeState.currentOutfit,
      physicalChars: storeState.physicalChars
    });
    
    this.unsubscribe = this.context.subscribe(() => {
      if(storeState.currentOutfit !== this.state.currentOutfit)
        this.setState({
          ...this.state,
          currentOutfit: storeState.currentOutfit
        })

      if(storeState.physicalChars !== this.state.physicalChars)
        this.setState({
          ...this.state,
          physicalChars: storeState.physicalChars
        });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (
      <div>
        <Avatar
          style={styles.avatar}
          avatarStyle='Circle'
          topType         ={this.state.currentOutfit.topType}
          accessoriesType ={this.state.currentOutfit.accessoriesType}
          clotheType      ={this.state.currentOutfit.clotheType}
          clotheColor     ={this.state.currentOutfit.clotheColor}

          hairColor       ={this.state.physicalChars.hairColor}
          facialHairType  ={this.state.physicalChars.facialHairType}
          eyeType         ={this.state.physicalChars.eyeType}
          eyebrowType     ={this.state.physicalChars.eyebrowType}
          mouthType       ={this.state.physicalChars.mouthType}
          skinColor       ={this.state.physicalChars.skinColor}
        />
      </div>
    )
  }
}

Person.contextType = StoreContext;