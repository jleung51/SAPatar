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

let wardrobe = {
  'clothes': [
    'BlazerShirt',
    'BlazerSweater',
    'ShirtVNeck',
  ],
};

let currentOutfit = {
  eyeType: 'Default',
  clotheType: 'BlazerShirt',
  mouthType: 'Smile'
};

export default class Person extends React.Component {

  componentDidMount() {
    console.log(this.context)
  }

  getWardrobe() {
    return this.wardrobe;
  }

  render () {
    return (
      <div>
        <Avatar
          style={styles.avatar}
          avatarStyle='Transparent'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor={currentOutfit.hairColor}
          facialHairType='Blank'
          clotheType={currentOutfit.clotheType}
          clotheColor='PastelBlue'
          eyeType={currentOutfit.eyeType}
          eyebrowType='Default'
          mouthType={currentOutfit.mouthType}
          skinColor='Light'
        />
      </div>
    )
  }
}

Person.contextType = StoreContext;