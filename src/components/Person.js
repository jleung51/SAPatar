import * as React from 'react'
import Avatar from 'avataaars'
import StoreContext from '../storeContext';

let styles = {
  avatar: {
    // Sizing
    width: '400px',
    height: '400px',
  }
};

export default class Person extends React.Component {
  componentDidMount() {
    console.log(this.context)
  }

  render () {
    return (
      <div>
        <Avatar
          style={styles.avatar}
          avatarStyle='Transparent'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
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