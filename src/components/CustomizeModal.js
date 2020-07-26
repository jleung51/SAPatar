import React, {Component} from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeMouthContainer from './CustomizeComponents/CustomizeMouthContainer';
import CustomizeEyebrowsContainer from './CustomizeComponents/CustomizeEyebrowsContainer';
import CustomizeEyesContainer from './CustomizeComponents/CustomizeEyesContainer';
import CustomizeHairContainer from './CustomizeComponents/CustomizeHairContainer';
import CustomizeWardrobeContainer from './CustomizeComponents/CustomizeWardrobeContainer';
import {
  Button,
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  ButtonGroup
} from 'react-bootstrap';

import styles from '../styles/styles';

// Category icons
import Clothes from '../img/category-icons/clothes.png';
import ClothesInactive from '../img/category-icons/clothes-inactive.png';
import Ears from '../img/category-icons/ears.png';
import EarsInactive from '../img/category-icons/ears-inactive.png';
import Eyebrows from '../img/category-icons/eyebrows.png';
import EyebrowsInactive from '../img/category-icons/eyebrows-inactive.png';
import Eyes from '../img/category-icons/eyes.png';
import EyesInactive from '../img/category-icons/eyes-inactive.png';
import Glasses from '../img/category-icons/glasses.png';
import GlassesInactive from '../img/category-icons/glasses-inactive.png';
import Hair from '../img/category-icons/hair.png';
import HairInactive from '../img/category-icons/hair-inactive.png';
import Hat from '../img/category-icons/hat.png';
import HatInactive from '../img/category-icons/hat-inactive.png';
import Mouth from '../img/category-icons/mouth.png';
import MouthInactive from '../img/category-icons/mouth-inactive.png';
import Nose from '../img/category-icons/nose.png';
import NoseInactive from '../img/category-icons/nose-inactive.png';
import Skin from '../img/category-icons/skin.png';
import SkinInactive from '../img/category-icons/skin-inactive.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

    padding: '0',

    width: '88%',
    height: '88%',
    borderRadius: '50px',

    overflowY: 'hidden',  // Prevent this modal from scrolling up/down
  },

  overlay: {
    zIndex: '1000',
  }
};

const customizeViews = Object.freeze({
  Hair: 1,
  Eyebrows: 2,
  Eyes: 3,
  Mouth: 4,
  FacialHair: 5,
  Color: 6,
  Accessories: 7,
  Wardrobe: 8,
})

class CustomizeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      currentView: customizeViews.Hair
    }

  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({
      ...this.state,
      modalIsOpen: true,
    })
  }

  afterOpenModal() {

  }

  closeModal(){
    this.setState({
      ...this.state,
      modalIsOpen: false,
    })
  }

  getCurrentView() {
    switch(this.state.currentView) {
      case(customizeViews.Hair): return <CustomizeHairContainer/>
      case(customizeViews.Eyebrows) : return <CustomizeEyebrowsContainer/>
      case(customizeViews.Eyes) : return <CustomizeEyesContainer/>
      case(customizeViews.Mouth): return <CustomizeMouthContainer/>
      case(customizeViews.FacialHair): return <CustomizeFacialhairContainer/>
      case(customizeViews.Wardrobe): return <CustomizeWardrobeContainer/>
      default: return <CustomizeHairContainer/>
    }
  }

  handleClick(type) {
    switch(type) {
      case (customizeViews.Hair): this.setState({...this.state, currentView: customizeViews.Hair});
      break;
      case (customizeViews.Eyebrows): this.setState({...this.state, currentView: customizeViews.Eyebrows});
      break;
      case (customizeViews.Eyes): this.setState({...this.state, currentView: customizeViews.Eyes});
      break;
      case (customizeViews.Mouth): this.setState({...this.state, currentView: customizeViews.Mouth});
      break;
      case (customizeViews.FacialHair):  this.setState({...this.state, currentView: customizeViews.FacialHair});
      break;
      case (customizeViews.Wardrobe): this.setState({...this.state, currentView: customizeViews.Wardrobe});
      default: return;
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal.bind(this)}
          style={styles.orangeButtonLarge}>
            Customize<br />My Avatar
        </Button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Customize My Avatar"
        >

          <div style={styles.customizeModal.header}>
            <span style={styles.customizeModal.headerText}>Customize your avatar</span>

            <span style={styles.customizeModal.headerButton}>
              <Button onClick={this.closeModal.bind(this)}
                style={styles.blueButtonSmall} >
                Save
              </Button>
            </span>
          </div>

          <Container fluid>
            <Row style={styles.customizeModal.floatingContainer}>
              <Col xs={5} style={styles.customizeModal.personColumn}>
                <div style={styles.customizeModal.personBackground}>
                  <Person size='500px' />
                  {/* Size matches personBackground card size */}
                </div>
              </Col>

              <Col>
              <Container style={styles.customizeModal.optionsContainer}>

                <Navbar expand="lg" style={styles.customizeModal.navbar}>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <ButtonGroup style={styles.customizeModal.navbarButtonGroup}>

                        {/* No function, just for show */}
                        <Button
                            style={styles.customizeModal.navbarButton}>
                          <img src={Skin} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            onClick={() => this.handleClick(customizeViews.Hair)}
                            style={styles.customizeModal.navbarButton}>
                          <img src={Hair} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            onClick={() => this.handleClick(customizeViews.Eyebrows)}
                            style={styles.customizeModal.navbarButton}>
                          <img src={Eyebrows} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            onClick={() => this.handleClick(customizeViews.Eyes)}
                            style={styles.customizeModal.navbarButton}>
                          <img src={Eyes} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            onClick={() => this.handleClick(customizeViews.Mouth)}
                            style={styles.customizeModal.navbarButton}>
                          <img src={Mouth} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        {/* No function, just for show */}
                        <Button
                            onClick={() => this.handleClick(customizeViews.Wardrobe)}
                            style={styles.customizeModal.navbarButton}>
                          <img src={Clothes} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        {/* Inactive categories */}
                        <Button
                            style={styles.customizeModal.navbarButton}>
                          <img src={NoseInactive} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            style={styles.customizeModal.navbarButton}>
                          <img src={GlassesInactive} style={styles.customizeModal.navbarButtonImage} />
                        </Button>

                        <Button
                            style={styles.customizeModal.navbarButton}>
                          <img src={EarsInactive} style={styles.customizeModal.navbarButtonImage} />
                        </Button>
                      </ButtonGroup>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>

                {this.getCurrentView()}

              </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    )
  }
}

export default CustomizeModal