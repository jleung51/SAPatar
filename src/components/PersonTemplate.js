'use strict';
import * as React from 'react'
import Avatar from 'sapataaars'

{/*
  Generic customizable Avatar. Each call creates a new instance.

  Example call:

  <Person
    size='100px'
    avatarStyle='Transparent'

    topType         ={topType}
    accessoriesType ={accessoriesType}
    clotheType      ={clotheType}
    clotheColor     ={clotheColor}

    hairColor       ={hairColor}
    facialHairType  ={facialHairType}
    eyeType         ={eyeType}
    eyebrowType     ={eyebrowType}
    mouthType       ={mouthType}
    skinColor       ={skinColor}
  />
*/}

export default class PersonTemplate extends React.Component {

  render () {
    let size = '300px';  // Default
    if (this.props.size) {  // Override prop in call
      size = this.props.size;
    }

    let styling = {
      width: size,
      height: size,
    };

    let background = 'Transparent';  // Default
    if (this.props.background) {  // Override prop in call
      background = this.props.background;
    }

    return (
      <div>
        <Avatar
          style={styling}
          avatarStyle={background}

          topType         ={this.props.topType}
          accessoriesType ={this.props.accessoriesType}
          clotheType      ={this.props.clotheType}
          clotheColor     ={this.props.clotheColor}

          hairColor       ={this.props.hairColor}
          facialHairType  ={this.props.facialHairType}
          eyeType         ={this.props.eyeType}
          eyebrowType     ={this.props.eyebrowType}
          mouthType       ={this.props.mouthType}
          skinColor       ={this.props.skinColor}
        />
      </div>
    )
  }
}