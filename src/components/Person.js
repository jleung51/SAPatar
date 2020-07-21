import * as React from 'react'
import Avatar from 'avataaars'
import StoreContext from '../storeContext';

const styles = {
  avatar: {
    // Sizing
    width: '400px',
    height: '400px',
  }
};

export default class Person extends React.Component {

  wardrobe = {
    'clothes': [
      'BlazerShirt',
      'BlazerSweater',
      'ShirtVNeck',
    ],
  };

  currentOutfit = {
    eyeType: 'Default',
    clotheType: 'BlazerShirt',
    mouthType: 'Smile'
  };

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
          avatarStyle='Circle'
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