import * as React from 'react'
import Avatar from 'avataaars'
import StoreContext from '../storeContext';

export default class Person extends React.Component {
  componentDidMount() {
    console.log(this.context.getState())
  }

  render () {
    return (
      <div>
        <Avatar
          style={{width: '800px', height: '800px'}}
          avatarStyle='Transparent'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='Black'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
    )
  }
}

Person.contextType = StoreContext;